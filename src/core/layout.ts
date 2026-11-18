/**
 * Lays a diagram out with ELK's layered algorithm and returns everything the canvas needs to draw
 * it: each element's and boundary's placed box, and each relationship's full route (where it
 * leaves and arrives, its bends, and where its label sits), which ELK steers around the elements
 * and the other labels. Every coordinate is absolute, in canvas units.
 *
 * elkjs's bundled build runs in-process on Node (it fails under Bun, which is why this tool is a
 * Node package).
 */
import ELK from "elkjs/lib/elk.bundled.js"

type Point = Readonly<{ x: number; y: number }>
type Box = Readonly<{ x: number; y: number; width: number; height: number }>
type Size = Readonly<{ width: number; height: number }>

export type LayoutNode = Readonly<{ id: string; width: number; height: number; parent?: string }>
/** A boundary, and its header chip, which ELK has to keep lines clear of. */
export type LayoutGroup = Readonly<{ id: string; parent?: string; header: Size }>
/** A relationship, and its label pill's size (zero when it shows no label). */
export type LayoutEdge = Readonly<{ id: string; from: string; to: string; label: Size }>

export type LaidRoute = Readonly<{ start: Point; bends: readonly Point[]; end: Point; labelAt?: Point }>
export type LayoutResult = Readonly<{
  boxes: Readonly<Record<string, Box>>
  routes: Readonly<Record<string, LaidRoute>>
}>

/** Between siblings, and between ranks: a label on a relationship between two ranks gets its
 * own row between them, so the rank gap is paid twice around it. */
const GAP = 48
const LAYER_GAP = 56
/** Inside a boundary: room for its header chip above the first rank, and breathing room around. */
const GROUP_PAD = 28
const GROUP_PAD_TOP = 88
/** The header chip sits this far in from the boundary's corner (the group's own CSS). */
const HEADER_INSET = 10
/** Clearance a line keeps from a header chip. */
const HEADER_CLEAR = 16

/**
 * Spacing, applied at every level of the hierarchy: how close a line may run to an element and to
 * another line, and how far out of an element it runs before its first bend (an arrowhead is 10
 * long, and a turn under it reads badly). Labels sit on their line, with the line's room reserved.
 */
const SPACING: Readonly<Record<string, string>> = {
  "elk.spacing.nodeNode": String(GAP),
  "elk.layered.spacing.nodeNodeBetweenLayers": String(LAYER_GAP),
  "elk.spacing.edgeNode": "40",
  "elk.spacing.edgeEdge": "24",
  "elk.layered.spacing.edgeNodeBetweenLayers": "32",
  "elk.layered.spacing.edgeEdgeBetweenLayers": "24",
  "elk.spacing.edgeLabel": "12",
}

type ElkNode = {
  id: string
  x?: number
  y?: number
  width?: number
  height?: number
  children?: ElkNode[]
  edges?: ElkEdge[]
  layoutOptions?: Record<string, string>
}
type ElkEdge = {
  id: string
  sources: string[]
  targets: string[]
  container?: string
  labels?: { text: string; width: number; height: number; x?: number; y?: number; layoutOptions?: Record<string, string> }[]
  sections?: { startPoint: Point; endPoint: Point; bendPoints?: Point[] }[]
}

const round = (n: number): number => Math.round(n * 100) / 100

/** Whether an axis-aligned leg passes through a box. */
const legCrosses = (a: Point, b: Point, box: Box): boolean => {
  const x1 = Math.min(a.x, b.x)
  const x2 = Math.max(a.x, b.x)
  const y1 = Math.min(a.y, b.y)
  const y2 = Math.max(a.y, b.y)
  return x1 < box.x + box.width && x2 > box.x && y1 < box.y + box.height && y2 > box.y
}

export const layOut = async (
  nodes: readonly LayoutNode[],
  groups: readonly LayoutGroup[],
  edges: readonly LayoutEdge[],
  direction: "DOWN" | "RIGHT",
  overrides: Readonly<Record<string, string>> = {},
): Promise<LayoutResult> => {
  /** The tree ELK lays out: groups become compound nodes holding their members. */
  const byParent = new Map<string, (LayoutNode | LayoutGroup)[]>()
  for (const node of [...nodes, ...groups]) {
    const parent = node.parent ?? "root"
    byParent.set(parent, [...(byParent.get(parent) ?? []), node])
  }

  const toElk = (node: LayoutNode | LayoutGroup, padLeft: ReadonlyMap<string, number>): ElkNode => {
    const children = byParent.get(node.id) ?? []
    if (children.length === 0) {
      return { id: node.id, width: "width" in node ? node.width : 240, height: "height" in node ? node.height : 96 }
    }
    const left = padLeft.get(node.id) ?? GROUP_PAD
    const header = "header" in node ? node.header : { width: 0, height: 0 }
    // A boundary is at least as wide as its header chip, which the canvas draws at full width.
    const minimum = `(${String(HEADER_INSET * 2 + header.width + 8)}, ${String(GROUP_PAD_TOP + GROUP_PAD)})`
    return {
      id: node.id,
      children: children.map((child) => toElk(child, padLeft)),
      layoutOptions: {
        ...SPACING,
        "elk.padding": `[top=${String(GROUP_PAD_TOP)},left=${String(left)},bottom=${String(GROUP_PAD)},right=${String(GROUP_PAD)}]`,
        "elk.nodeSize.constraints": "MINIMUM_SIZE",
        "elk.nodeSize.minimum": minimum,
      },
    }
  }

  const graph = (padLeft: ReadonlyMap<string, number>): ElkNode => ({
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": direction,
      "elk.hierarchyHandling": "INCLUDE_CHILDREN",
      "elk.edgeRouting": "ORTHOGONAL",
      ...SPACING,
      // Set here as well as on each label: ELK only positions inline labels when the graph says so.
      "elk.edgeLabels.placement": "CENTER",
      "elk.edgeLabels.inline": "true",
      "elk.padding": "[top=40,left=40,bottom=40,right=40]",
      // Keep the order stable and predictable across builds.
      "elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
      // Line elements up where that makes a relationship a straight line.
      "elk.layered.nodePlacement.favorStraightEdges": "true",
      // Try harder to keep lines from crossing: a dense component view needs it, and the cost is
      // milliseconds.
      "elk.layered.thoroughness": "100",
      ...overrides,
    },
    children: (byParent.get("root") ?? []).map((node) => toElk(node, padLeft)),
    edges: edges.map((e) => ({
      id: e.id,
      sources: [e.from],
      targets: [e.to],
      // The label is placed on its line, in the middle, and its room is reserved there, which is
      // where the canvas draws it.
      ...(e.label.width === 0
        ? {}
        : {
            labels: [
              {
                // ELK drops a label with no text; the text itself is never used.
                text: e.id,
                width: e.label.width,
                height: e.label.height,
                layoutOptions: { "elk.edgeLabels.placement": "CENTER", "elk.edgeLabels.inline": "true" },
              },
            ],
          }),
    })),
  })

  const elk = new ELK()
  // elkjs's types describe its JSON loosely; the graph here is exactly what it reads and returns.
  const run = (g: ElkNode): Promise<ElkNode> => elk.layout(g as never) as unknown as Promise<ElkNode>

  /** Absolute boxes and routes from a laid-out graph: ELK gives a child's coordinates relative to
   * its parent, and an edge's relative to the node it says contains it. */
  const collect = (laid: ElkNode): Readonly<{ boxes: Map<string, Box>; routes: Map<string, LaidRoute> }> => {
    const origins = new Map<string, Point>()
    const boxes = new Map<string, Box>()
    const walk = (node: ElkNode, ox: number, oy: number): void => {
      const x = ox + (node.x ?? 0)
      const y = oy + (node.y ?? 0)
      origins.set(node.id, { x, y })
      boxes.set(node.id, { x, y, width: node.width ?? 0, height: node.height ?? 0 })
      for (const child of node.children ?? []) walk(child, x, y)
    }
    walk(laid, 0, 0)

    const routes = new Map<string, LaidRoute>()
    const edgesOf = (node: ElkNode): ElkEdge[] => [...(node.edges ?? []), ...(node.children ?? []).flatMap(edgesOf)]
    for (const edge of edgesOf(laid)) {
      const section = edge.sections?.[0]
      if (section === undefined) continue
      const origin = origins.get(edge.container ?? "root") ?? { x: 0, y: 0 }
      const abs = (p: Point): Point => ({ x: round(p.x + origin.x), y: round(p.y + origin.y) })
      const label = edge.labels?.[0]
      routes.set(edge.id, {
        start: abs(section.startPoint),
        bends: (section.bendPoints ?? []).map(abs),
        end: abs(section.endPoint),
        ...(label?.x === undefined || label.y === undefined
          ? {}
          : { labelAt: abs({ x: label.x + label.width / 2, y: label.y + label.height / 2 }) }),
      })
    }
    return { boxes, routes }
  }

  /**
   * The boundaries whose header chip a line runs through. ELK knows nothing of the chip, which the
   * canvas draws in the boundary's top-left corner: a relationship into the leftmost element from
   * above runs straight through it. Such a boundary gets its members pushed right of the chip on a
   * second pass, so nothing is drawn over its name.
   */
  const headersCrossed = ({ boxes, routes }: ReturnType<typeof collect>): readonly LayoutGroup[] =>
    groups.filter((group) => {
      const box = boxes.get(group.id)
      if (box === undefined) return false
      const chip = { x: box.x + HEADER_INSET, y: box.y + HEADER_INSET, ...group.header }
      return [...routes.values()].some((route) => {
        const points = [route.start, ...route.bends, route.end]
        return points.slice(1).some((p, i) => {
          const prev = points[i]
          return prev !== undefined && legCrosses(prev, p, chip)
        })
      })
    })

  const first = collect(await run(graph(new Map())))
  const crossed = headersCrossed(first)
  const result =
    crossed.length === 0
      ? first
      : collect(
          await run(graph(new Map(crossed.map((group) => [group.id, HEADER_INSET + group.header.width + HEADER_CLEAR])))),
        )

  const ids = [...nodes, ...groups].map((n) => n.id)
  return {
    boxes: Object.fromEntries(ids.flatMap((id) => {
      const box = result.boxes.get(id)
      return box === undefined ? [] : [[id, box] as const]
    })),
    routes: Object.fromEntries(result.routes),
  }
}
