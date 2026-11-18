// Edge routing for DiagramCanvas: where a connection leaves and arrives on two rectangles, the
// SVG path between them in one of three styles, the point for its label, and the angle of each
// end for its marker. Pure geometry in canvas units, no DOM.
//
// Orthogonal routes don't avoid obstacles: they take the direct elbowed path between the two
// sides, which crosses whatever lies in between. Place nodes so the elbows read, pick the sides
// by hand, or give the route's bends (`points`) from a layout engine that does steer around them.

import type { DiagramSide } from "../../types/diagram"
import type { Point } from "../../types/graph"

export type Rect = Readonly<{ x: number; y: number; width: number; height: number }>
export type RouteStyle = "curved" | "straight" | "orthogonal"

export type Route = Readonly<{
  /** The SVG path data, from the start point to the end point. */
  path: string
  start: Point
  end: Point
  /** Where the connection leaves and arrives. */
  fromSide: DiagramSide
  toSide: DiagramSide
  /** The middle of the path by length, where its label sits. */
  mid: Point
  /** Degrees, pointing back into the `from` rect: the direction a start marker faces. */
  startAngle: number
  /** Degrees, pointing into the `to` rect: the direction of travel at the end. */
  endAngle: number
}>

export type RouteOptions = Readonly<{
  fromSide?: DiagramSide | undefined
  toSide?: DiagramSide | undefined
  route?: RouteStyle | undefined
  /** Moves the anchor along its side, so several edges sharing a side spread out. */
  fromOffset?: number | undefined
  toOffset?: number | undefined
  /**
   * Stops the drawn path this far short of each end, along the path, so it meets a hollow
   * marker's base instead of running through it. The route's `start` and `end`, where the
   * markers sit, don't move.
   */
  startInset?: number | undefined
  endInset?: number | undefined
  /**
   * The bends of a route the caller worked out, in order from the start to the end: the path runs
   * from the start anchor through them to the end anchor in straight legs with rounded corners.
   * `route` isn't used. The markers point along the first and the last leg.
   */
  points?: readonly Point[] | undefined
  /** Where the label sits, when the caller places it; otherwise the middle of the path. */
  labelAt?: Point | undefined
}>

/** How far an orthogonal route runs straight out of a side before its first turn. */
export const STUB = 16
/** The radius an orthogonal route rounds its corners with, at most. */
export const CORNER = 8
/** How close to a corner an offset anchor may go. */
const ANCHOR_MARGIN = 8

const NORMALS: Readonly<Record<DiagramSide, Point>> = {
  top: { x: 0, y: -1 },
  right: { x: 1, y: 0 },
  bottom: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
}

/** The outward unit vector of a side. */
export function sideNormal(side: DiagramSide): Point {
  return NORMALS[side]
}

const isHorizontal = (side: DiagramSide): boolean => side === "left" || side === "right"

const center = (rect: Rect): Point => ({ x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 })

const clamp = (value: number, limit: number): number => Math.max(-limit, Math.min(limit, value))

/**
 * A point on a side: its midpoint, moved `offset` units along the side (clamped short of the
 * corners), so edges sharing a side don't stack on one another.
 */
export function anchor(rect: Rect, side: DiagramSide, offset = 0): Point {
  const c = center(rect)
  if (isHorizontal(side)) {
    const along = clamp(offset, Math.max(0, rect.height / 2 - ANCHOR_MARGIN))
    return { x: side === "left" ? rect.x : rect.x + rect.width, y: c.y + along }
  }
  const along = clamp(offset, Math.max(0, rect.width / 2 - ANCHOR_MARGIN))
  return { x: c.x + along, y: side === "top" ? rect.y : rect.y + rect.height }
}

/**
 * The sides two rects connect on when none are given: across the wider gap between their
 * centres, horizontally when they sit side by side, vertically when one sits above the other.
 */
export function pickSides(from: Rect, to: Rect): Readonly<{ from: DiagramSide; to: DiagramSide }> {
  const a = center(from)
  const b = center(to)
  const dx = b.x - a.x
  const dy = b.y - a.y
  if (Math.abs(dx) >= Math.abs(dy)) {
    return dx >= 0 ? { from: "right", to: "left" } : { from: "left", to: "right" }
  }
  return dy >= 0 ? { from: "bottom", to: "top" } : { from: "top", to: "bottom" }
}

// `+ 0` turns a -0 from atan2 into 0
const degrees = (v: Point): number => (Math.atan2(v.y, v.x) * 180) / Math.PI + 0
const sub = (a: Point, b: Point): Point => ({ x: a.x - b.x, y: a.y - b.y })
const add = (a: Point, b: Point): Point => ({ x: a.x + b.x, y: a.y + b.y })
const scale = (v: Point, k: number): Point => ({ x: v.x * k, y: v.y * k })
const length = (v: Point): number => Math.hypot(v.x, v.y)
const unit = (v: Point): Point => {
  const l = length(v)
  return l === 0 ? { x: 0, y: 0 } : scale(v, 1 / l)
}
const fmt = (n: number): string => String(Math.round(n * 100) / 100)
const pt = (p: Point): string => `${fmt(p.x)},${fmt(p.y)}`

/** Where the line from the rect's centre toward another point crosses its border. */
function borderToward(rect: Rect, toward: Point): Point {
  const c = center(rect)
  const d = sub(toward, c)
  if (d.x === 0 && d.y === 0) return c
  const tx = d.x === 0 ? Number.POSITIVE_INFINITY : rect.width / 2 / Math.abs(d.x)
  const ty = d.y === 0 ? Number.POSITIVE_INFINITY : rect.height / 2 / Math.abs(d.y)
  return add(c, scale(d, Math.min(tx, ty)))
}

/** The side of a rect a border point lies on. */
function sideAt(rect: Rect, p: Point): DiagramSide {
  const distances: readonly (readonly [DiagramSide, number])[] = [
    ["top", Math.abs(p.y - rect.y)],
    ["bottom", Math.abs(p.y - (rect.y + rect.height))],
    ["left", Math.abs(p.x - rect.x)],
    ["right", Math.abs(p.x - (rect.x + rect.width))],
  ]
  return distances.reduce((best, next) => (next[1] < best[1] ? next : best))[0]
}

/** A cubic Bézier's point at t. */
function cubicAt(p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point {
  const u = 1 - t
  const w0 = u * u * u
  const w1 = 3 * u * u * t
  const w2 = 3 * u * t * t
  const w3 = t * t * t
  return {
    x: w0 * p0.x + w1 * p1.x + w2 * p2.x + w3 * p3.x,
    y: w0 * p0.y + w1 * p1.y + w2 * p2.y + w3 * p3.y,
  }
}

/** Drops repeated points and points on a straight run, so every corner is a real turn. */
function simplify(points: readonly Point[]): readonly Point[] {
  const distinct = points.filter(
    (p, i) =>
      i === 0 ||
      Math.abs(p.x - (points[i - 1]?.x ?? NaN)) + Math.abs(p.y - (points[i - 1]?.y ?? NaN)) > 0.01,
  )
  return distinct.filter((p, i) => {
    const prev = distinct[i - 1]
    const next = distinct[i + 1]
    if (prev === undefined || next === undefined) return true
    const collinearX = Math.abs(prev.x - p.x) < 0.01 && Math.abs(p.x - next.x) < 0.01
    const collinearY = Math.abs(prev.y - p.y) < 0.01 && Math.abs(p.y - next.y) < 0.01
    return !collinearX && !collinearY
  })
}

/**
 * The axis-aligned points of an orthogonal route: out of the start side by a stub, one or two
 * turns, and into the end side by a stub.
 */
export function orthogonalPoints(
  start: Point,
  fromSide: DiagramSide,
  end: Point,
  toSide: DiagramSide,
): readonly Point[] {
  const nA = sideNormal(fromSide)
  const nB = sideNormal(toSide)
  const a1 = add(start, scale(nA, STUB))
  const b1 = add(end, scale(nB, STUB))
  const middle = ((): readonly Point[] => {
    if (isHorizontal(fromSide) && isHorizontal(toSide)) {
      // facing each other with room between: split halfway across
      const facing = (b1.x - a1.x) * nA.x >= 0 && (a1.x - b1.x) * nB.x >= 0
      if (facing) {
        const mx = (a1.x + b1.x) / 2
        return [
          { x: mx, y: a1.y },
          { x: mx, y: b1.y },
        ]
      }
      const my = (a1.y + b1.y) / 2
      return [
        { x: a1.x, y: my },
        { x: b1.x, y: my },
      ]
    }
    if (!isHorizontal(fromSide) && !isHorizontal(toSide)) {
      const facing = (b1.y - a1.y) * nA.y >= 0 && (a1.y - b1.y) * nB.y >= 0
      if (facing) {
        const my = (a1.y + b1.y) / 2
        return [
          { x: a1.x, y: my },
          { x: b1.x, y: my },
        ]
      }
      const mx = (a1.x + b1.x) / 2
      return [
        { x: mx, y: a1.y },
        { x: mx, y: b1.y },
      ]
    }
    // one horizontal side and one vertical: a single corner when both stubs head toward it
    const corner = isHorizontal(fromSide) ? { x: b1.x, y: a1.y } : { x: a1.x, y: b1.y }
    const fromReaches = (corner.x - a1.x) * nA.x + (corner.y - a1.y) * nA.y >= 0
    const toReaches = (corner.x - b1.x) * nB.x + (corner.y - b1.y) * nB.y >= 0
    if (fromReaches && toReaches) return [corner]
    return [isHorizontal(fromSide) ? { x: a1.x, y: b1.y } : { x: b1.x, y: a1.y }]
  })()
  return simplify([start, a1, ...middle, b1, end])
}

/** A polyline as a path with its corners rounded, each radius at most half the shorter leg. */
export function roundedPath(points: readonly Point[], radius = CORNER): string {
  const first = points[0]
  if (first === undefined) return ""
  const segments = points.slice(1).map((p, i) => {
    const prev = points[i] ?? p
    const next = points[i + 2]
    if (next === undefined) return `L${pt(p)}`
    const inLen = length(sub(p, prev))
    const outLen = length(sub(next, p))
    const r = Math.min(radius, inLen / 2, outLen / 2)
    const before = sub(p, scale(sub(p, prev), r / inLen))
    const after = add(p, scale(sub(next, p), r / outLen))
    return `L${pt(before)} Q${pt(p)} ${pt(after)}`
  })
  return `M${pt(first)} ${segments.join(" ")}`
}

/** The point halfway along a polyline, by length. */
export function polylineMid(points: readonly Point[]): Point {
  const legs = points.slice(1).map((p, i) => [points[i] ?? p, p] as const)
  const total = legs.reduce((sum, [a, b]) => sum + length(sub(b, a)), 0)
  const found = legs.reduce<Readonly<{ left: number; at: Point | undefined }>>(
    (acc, [a, b]) => {
      if (acc.at !== undefined) return acc
      const leg = length(sub(b, a))
      if (leg >= acc.left && leg > 0)
        return { left: 0, at: add(a, scale(sub(b, a), acc.left / leg)) }
      return { left: acc.left - leg, at: undefined }
    },
    { left: total / 2, at: undefined },
  )
  return found.at ?? points[0] ?? { x: 0, y: 0 }
}

/** The route of one edge between two rects. */
export function routeEdge(from: Rect, to: Rect, options: RouteOptions = {}): Route {
  const style = options.route ?? "curved"
  const picked = pickSides(from, to)

  if (style === "straight" && options.fromSide === undefined && options.toSide === undefined) {
    // along the line between the centres, clipped to each border
    const start = borderToward(from, center(to))
    const end = borderToward(to, center(from))
    const travel = sub(end, start)
    const dir = unit(travel)
    const drawnStart = add(start, scale(dir, options.startInset ?? 0))
    const drawnEnd = sub(end, scale(dir, options.endInset ?? 0))
    return {
      path: `M${pt(drawnStart)} L${pt(drawnEnd)}`,
      start,
      end,
      fromSide: sideAt(from, start),
      toSide: sideAt(to, end),
      mid: options.labelAt ?? scale(add(start, end), 0.5),
      startAngle: degrees(scale(travel, -1)),
      endAngle: degrees(travel),
    }
  }

  const fromSide = options.fromSide ?? picked.from
  const toSide = options.toSide ?? picked.to
  const start = anchor(from, fromSide, options.fromOffset ?? 0)
  const end = anchor(to, toSide, options.toOffset ?? 0)
  const nA = sideNormal(fromSide)
  const nB = sideNormal(toSide)

  // where the drawn path starts and ends: pulled back along it from the markers' tips
  const startInset = options.startInset ?? 0
  const endInset = options.endInset ?? 0

  if (options.points !== undefined) {
    // the caller's bends, between the anchors: each leg is drawn straight, and the ends are pulled
    // in along their own legs, whichever way those run
    const points = simplify([start, ...options.points, end])
    const outward = unit(sub(points[1] ?? end, start))
    const inward = unit(sub(end, points.at(-2) ?? start))
    const drawn = points.map((p, i) =>
      i === 0
        ? add(p, scale(outward, startInset))
        : i === points.length - 1
          ? sub(p, scale(inward, endInset))
          : p,
    )
    return {
      path: roundedPath(drawn),
      start,
      end,
      fromSide,
      toSide,
      mid: options.labelAt ?? polylineMid(points),
      startAngle: degrees(scale(outward, -1)),
      endAngle: degrees(inward),
    }
  }

  if (style === "straight") {
    const travel = sub(end, start)
    const dir = unit(travel)
    const drawnStart = add(start, scale(dir, startInset))
    const drawnEnd = sub(end, scale(dir, endInset))
    return {
      path: `M${pt(drawnStart)} L${pt(drawnEnd)}`,
      start,
      end,
      fromSide,
      toSide,
      mid: options.labelAt ?? scale(add(start, end), 0.5),
      startAngle: degrees(scale(travel, -1)),
      endAngle: degrees(travel),
    }
  }

  if (style === "orthogonal") {
    const points = orthogonalPoints(start, fromSide, end, toSide)
    // The stubs run straight out of each side for STUB units, longer than any marker's inset, so
    // pulling the first and last points in along the normals keeps every segment axis-aligned.
    const drawn = points.map((p, i) =>
      i === 0
        ? add(p, scale(nA, startInset))
        : i === points.length - 1
          ? add(p, scale(nB, endInset))
          : p,
    )
    return {
      path: roundedPath(drawn),
      start,
      end,
      fromSide,
      toSide,
      mid: options.labelAt ?? polylineMid(points),
      startAngle: degrees(scale(nA, -1)),
      endAngle: degrees(scale(nB, -1)),
    }
  }

  // curved: leave and arrive perpendicular to each side, with handles scaled to the distance
  const reach = Math.max(32, Math.min(160, length(sub(end, start)) * 0.45))
  const c1 = add(start, scale(nA, reach))
  const c2 = add(end, scale(nB, reach))
  const drawnStart = add(start, scale(nA, startInset))
  const drawnEnd = add(end, scale(nB, endInset))
  return {
    path: `M${pt(drawnStart)} C${pt(c1)} ${pt(c2)} ${pt(drawnEnd)}`,
    start,
    end,
    fromSide,
    toSide,
    mid: options.labelAt ?? cubicAt(start, c1, c2, end, 0.5),
    startAngle: degrees(scale(nA, -1)),
    endAngle: degrees(scale(nB, -1)),
  }
}

/** Where a small label at one end of an edge sits, and which way its text runs from there. */
export type EndLabelPlacement = Readonly<{
  x: number
  y: number
  /** SVG `text-anchor`, so the text runs away from the node: along the line, or away from it. */
  anchor: "start" | "end"
}>

/** How far along the line, past the marker, an end label sits. */
const END_LABEL_ALONG = 12
/** How far off the line: further above or below it, for the text's height, closer beside it. */
const END_LABEL_ABOVE = 10
const END_LABEL_BESIDE = 7

/**
 * Where the labels at each end of an edge go, as UML tools place multiplicities: a little way
 * along the line past the marker, and off to the side away from the route's middle, so a label
 * sits on the outer side of a bend, clear of the line. On a straight edge, where the middle is on
 * the line itself, they go above it, or to its left.
 */
export function endLabelPositions(
  route: Route,
  insets: Readonly<{ startInset?: number | undefined; endInset?: number | undefined }> = {},
): Readonly<{ start: EndLabelPlacement; end: EndLabelPlacement }> {
  const place = (tip: Point, angle: number, inset: number): EndLabelPlacement => {
    const radians = (angle * Math.PI) / 180
    // the angles point into the nodes; the line runs the other way, back along the path
    const along = { x: -Math.cos(radians), y: -Math.sin(radians) }
    const base = add(tip, scale(along, inset + END_LABEL_ALONG))
    const across = { x: -along.y, y: along.x }
    const towardMiddle = across.x * (route.mid.x - base.x) + across.y * (route.mid.y - base.y)
    const upOrLeft = across.y < -0.01 || (Math.abs(across.y) <= 0.01 && across.x < 0) ? 1 : -1
    const side = Math.abs(towardMiddle) > 1 ? -Math.sign(towardMiddle) : upOrLeft
    const beside = Math.abs(across.x) > Math.abs(across.y)
    const offset = scale(across, side * (beside ? END_LABEL_BESIDE : END_LABEL_ABOVE))
    const at = add(base, offset)
    // beside the line the text runs away from it; above or below, along it, away from the node
    const runs = beside ? offset.x : along.x
    return { x: at.x, y: at.y, anchor: runs > 0 ? "start" : "end" }
  }
  return {
    start: place(route.start, route.startAngle, insets.startInset ?? 0),
    end: place(route.end, route.endAngle, insets.endInset ?? 0),
  }
}
