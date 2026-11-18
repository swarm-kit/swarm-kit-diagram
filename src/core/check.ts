/**
 * Model-level checks of a laid-out diagram: reports what a reader would actually run into, such as
 * a relationship whose label lands on an element, or whose line crosses one. It draws every
 * relationship exactly as the design system does, with the same router and the same anchors, so
 * it measures what is drawn rather than an approximation. `swarm-kit-diagram check` runs it, and
 * exits non-zero on any problem so it can gate a change.
 */
import { routeEdge } from "../ds.ts"
import { attachRect } from "./geometry.ts"
import { HEADER_INSET, headerSize, labelBox, labelSize } from "./label.ts"
import type { Diagram } from "./types.ts"

type Point = Readonly<{ x: number; y: number }>
type Box = Readonly<{ x: number; y: number; width: number; height: number }>

/**
 * A path as a dense polyline, so a curve is tested along its real arc rather than at its control
 * points. `M`/`L` are points, `Q` a quadratic arc, `C` a cubic; every curved leg is sampled.
 */
const pathPoints = (d: string): readonly Point[] => {
  const out: Point[] = []
  let cursor: Point | undefined
  const nums = (group: string): readonly number[] => [...group.matchAll(/-?[\d.]+/g)].map((m) => Number(m[0]))
  for (const m of d.matchAll(/([MLQC])([^MLQC]*)/g)) {
    const v = nums(m[2] ?? "")
    if (m[1] === "M" || m[1] === "L") {
      cursor = { x: v[0] ?? 0, y: v[1] ?? 0 }
      out.push(cursor)
    } else if (m[1] === "Q" && cursor !== undefined) {
      const p0 = cursor
      const p1 = { x: v[0] ?? 0, y: v[1] ?? 0 }
      const p2 = { x: v[2] ?? 0, y: v[3] ?? 0 }
      for (let i = 1; i <= 8; i++) {
        const t = i / 8
        const u = 1 - t
        out.push({ x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x, y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y })
      }
      cursor = p2
    } else if (m[1] === "C" && cursor !== undefined) {
      const p0 = cursor
      const p1 = { x: v[0] ?? 0, y: v[1] ?? 0 }
      const p2 = { x: v[2] ?? 0, y: v[3] ?? 0 }
      const p3 = { x: v[4] ?? 0, y: v[5] ?? 0 }
      for (let i = 1; i <= 24; i++) {
        const t = i / 24
        const u = 1 - t
        out.push({
          x: u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x,
          y: u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y,
        })
      }
      cursor = p3
    }
  }
  return out
}

const inside = (box: Box, p: Point): boolean =>
  p.x > box.x && p.x < box.x + box.width && p.y > box.y && p.y < box.y + box.height

/** Whether a leg passes through a box, sampled along its length. */
const legHit = (a: Point, b: Point, box: Box): boolean =>
  Array.from({ length: 24 }, (_, i) => i / 23).some((t) =>
    inside(box, { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }),
  )

const pathCrosses = (points: readonly Point[], box: Box): boolean =>
  points.slice(1).some((p, i) => {
    const prev = points[i]
    return prev !== undefined && legHit(prev, p, box)
  })

const intersects = (a: Box, b: Box): boolean =>
  a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height

/** Whether two legs cross, strictly: touching at an end doesn't count. */
const legsCross = (a1: Point, a2: Point, b1: Point, b2: Point): boolean => {
  const cross = (o: Point, a: Point, b: Point): number => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x)
  const d1 = cross(b1, b2, a1)
  const d2 = cross(b1, b2, a2)
  const d3 = cross(a1, a2, b1)
  const d4 = cross(a1, a2, b2)
  return ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))
}

const pathsCross = (a: readonly Point[], b: readonly Point[]): boolean =>
  a.slice(1).some((a2, i) => {
    const a1 = a[i]
    return a1 !== undefined && b.slice(1).some((b2, j) => {
      const b1 = b[j]
      return b1 !== undefined && legsCross(a1, a2, b1, b2)
    })
  })

/** The longest end marker, so a turn must not start within it. */
const MARKER_LENGTH = 12

/**
 * The straight run out of each end before the line turns, for an elbowed path. The router emits a
 * corner as `L{curve start} Q{corner} {curve end}`, so the second point is where the curve begins;
 * the shorter of the two ends is what an arrowhead sits on. A path with no turn returns infinity.
 */
const straightRun = (d: string, points: readonly Point[]): number => {
  if (!d.includes("Q")) return Number.POSITIVE_INFINITY
  const first = points[0]
  const second = points[1]
  const last = points[points.length - 1]
  const beforeLast = points[points.length - 2]
  if (first === undefined || second === undefined || last === undefined || beforeLast === undefined) {
    return Number.POSITIVE_INFINITY
  }
  return Math.min(
    Math.hypot(second.x - first.x, second.y - first.y),
    Math.hypot(last.x - beforeLast.x, last.y - beforeLast.y),
  )
}

/** The header chip of a group, where its name and type sit, as the canvas places it. */
const groupHeaderBox = (group: Readonly<{ x: number; y: number; label: string; type?: string }>): Box => ({
  x: group.x + HEADER_INSET,
  y: group.y + HEADER_INSET,
  ...headerSize(group.label, group.type),
})

/** One relationship as drawn: its path, its label box, its bends, and the elements it joins. */
type Drawn = Readonly<{
  id: string
  label: string
  path: string
  points: readonly Point[]
  box: Box
  bends: number
  from: string
  to: string
}>

/**
 * Every relationship as the canvas draws it: the design system's router, on the shapes' own
 * attach rectangles, with the route the layout gave the edge. An edge that carries its own
 * offsets is left alone by the canvas's spreading, which every edge here does.
 */
const drawAll = (diagram: Diagram): readonly Drawn[] => {
  const nodes = new Map(diagram.nodes.map((n) => [n.id, n]))
  return diagram.edges.flatMap((edge) => {
    const from = nodes.get(edge.from)
    const to = nodes.get(edge.to)
    if (from === undefined || to === undefined) return []
    const route = routeEdge(attachRect(from), attachRect(to), {
      route: edge.route ?? "curved",
      ...(edge.fromSide === undefined ? {} : { fromSide: edge.fromSide }),
      ...(edge.toSide === undefined ? {} : { toSide: edge.toSide }),
      fromOffset: edge.fromOffset ?? 0,
      toOffset: edge.toOffset ?? 0,
      ...(edge.points === undefined ? {} : { points: edge.points }),
      ...(edge.labelAt === undefined ? {} : { labelAt: edge.labelAt }),
    })
    const label = edge.label ?? `${edge.from}->${edge.to}`
    return [
      {
        id: edge.id,
        label,
        path: route.path,
        points: pathPoints(route.path),
        box: labelBox(route.mid, labelSize(edge.label, edge.technology)),
        bends: (route.path.match(/Q/g) ?? []).length,
        from: edge.from,
        to: edge.to,
      },
    ]
  })
}

/**
 * Every way the drawing can be hard to read, checked pairwise:
 *
 * - a relationship's label on an element, on a boundary's header, or on another label;
 * - a relationship's line through an element, through a boundary's header chip, through another
 *   relationship's label, or across another relationship's line;
 * - a turn that starts under an end marker.
 *
 * A line crossing an element is hidden behind it by the canvas's layer order, but it is reported
 * all the same: a long crossing reads as a line to nowhere.
 */
export const checkDiagram = (diagram: Diagram, caption: string): readonly string[] => {
  const problems: string[] = []
  const drawn = drawAll(diagram)

  for (const edge of drawn) {
    for (const node of diagram.nodes) {
      const own = node.id === edge.from || node.id === edge.to
      const box = attachRect(node)
      if (intersects(edge.box, box)) {
        problems.push(`${caption}: label "${edge.label}" on "${node.title}"`)
      } else if (!own && pathCrosses(edge.points, box)) {
        problems.push(`${caption}: line "${edge.label}" crosses "${node.title}"`)
      }
    }

    for (const group of diagram.groups) {
      // A boundary is a region, so a label inside it is normal; only its header chip is text that
      // must stay clear, which is where the boundary's name and type sit.
      const header = groupHeaderBox(group)
      if (pathCrosses(edge.points, header)) {
        problems.push(`${caption}: line "${edge.label}" crosses the "${group.label}" header`)
      }
      if (intersects(edge.box, header)) {
        problems.push(`${caption}: label "${edge.label}" on the "${group.label}" header`)
      }
    }

    const run = straightRun(edge.path, edge.points)
    if (run < MARKER_LENGTH) {
      problems.push(`${caption}: bend ${String(Math.round(run))} from the "${edge.label}" arrow`)
    }

    for (const other of drawn) {
      if (other.id === edge.id) continue
      if (intersects(edge.box, other.box)) {
        problems.push(`${caption}: label "${edge.label}" on the label of "${other.label}"`)
      }
      if (pathCrosses(edge.points, other.box)) {
        problems.push(`${caption}: line "${edge.label}" crosses the label of "${other.label}"`)
      }
      if (other.id > edge.id && pathsCross(edge.points, other.points)) {
        problems.push(`${caption}: line "${edge.label}" crosses the line of "${other.label}"`)
      }
    }
  }
  return problems
}

/** Bends per relationship, so a change that adds bends without adding faults is still visible. */
export const summarizeDiagram = (diagram: Diagram, caption: string): string => {
  const drawn = drawAll(diagram)
  const straight = drawn.filter((edge) => edge.bends === 0).length
  const bends = drawn.reduce((sum, edge) => sum + edge.bends, 0)
  return `${caption}: ${String(drawn.length)} relationships, ${String(straight)} straight, ${String(bends)} bends`
}
