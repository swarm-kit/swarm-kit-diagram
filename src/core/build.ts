/**
 * Builds the diagrams for a workspace, one per view:
 *
 *   readWorkspace(input)    -> the model and its views (structurizr.ts)
 *   size(element)           -> each element's real size, from the design system's own function
 *   layOut(...)             -> positions and routes from ELK (layout.ts)
 *   toDiagram(...)          -> the DiagramData every renderer draws (plan.ts)
 *
 * The layout engine does the whole job: it places the elements, nests the boundaries (a model
 * group, a system or container boundary, a deployment node) around what they hold, routes every
 * relationship around the ones in its way, and places each label on its line where nothing else
 * is. The canvas draws those routes as given (`points`, `labelAt`, and the end offsets on each
 * edge), so what is checked is what is drawn.
 */
import { DIAGRAM_KINDS, anchor, diagramNodeSize } from "../ds.ts"
import { attachRect } from "./geometry.ts"
import { headerSize, labelSize } from "./label.ts"
import { layOut, type LaidRoute } from "./layout.ts"
import { planView, toDiagram, type EdgeRoute, type PlannedNode } from "./plan.ts"
import type { View, Workspace } from "./structurizr.ts"
import type { Diagram, DiagramFigure, DiagramNode } from "./types.ts"

type Point = Readonly<{ x: number; y: number }>
type Box = Readonly<{ x: number; y: number; width: number; height: number }>
type Side = "top" | "right" | "bottom" | "left"

/**
 * The default view: the first one the file defines, so a one-view diagram needs no annotation.
 * `view="key"` on the fence picks another by its key.
 */
const selectView = (workspace: Workspace, key: string | undefined): View => {
  const view = key === undefined ? workspace.views[0] : workspace.views.find((v) => v.key === key)
  if (view === undefined) {
    const known = workspace.views.map((v) => v.key).join(", ") || "none"
    throw new Error(`Structurizr: no view '${key ?? ""}' (the workspace has: ${known})`)
  }
  return view
}

/** The node the design system sizes and draws, from a planned element, at a position. */
const nodeOf = (
  { element, kind, tone, typeLabel }: PlannedNode,
  box: Readonly<{ x: number; y: number }>,
): DiagramNode => {
  const size = diagramNodeSize(
    {
      ...(element.technology === undefined ? {} : { technology: element.technology }),
      ...(element.description === undefined ? {} : { description: element.description }),
    },
    DIAGRAM_KINDS[kind],
  )
  return {
    id: element.id,
    kind,
    ...(tone === undefined ? {} : { tone }),
    ...(typeLabel === undefined ? {} : { typeLabel }),
    title: element.name,
    ...(element.technology === undefined ? {} : { technology: element.technology }),
    ...(element.description === undefined ? {} : { description: element.description }),
    x: box.x,
    y: box.y,
    width: size.width,
    height: size.height,
  }
}

/** The side of a box a point on its border lies on. */
const sideOf = (box: Box, p: Point): Side => {
  const distances: readonly (readonly [Side, number])[] = [
    ["top", Math.abs(p.y - box.y)],
    ["bottom", Math.abs(p.y - (box.y + box.height))],
    ["left", Math.abs(p.x - box.x)],
    ["right", Math.abs(p.x - (box.x + box.width))],
  ]
  return distances.reduce((best, next) => (next[1] < best[1] ? next : best))[0]
}

const horizontal = (side: Side): boolean => side === "left" || side === "right"

/**
 * A laid-out route in the canvas's terms. The engine's end points lie on the node's box; the
 * canvas anchors on the shape's outline, at an offset from the middle of a side, so each end
 * becomes a side and an offset, and the leg out of it is squared up to where the canvas will
 * actually put the anchor (the canvas keeps an anchor a little short of a corner).
 */
const toEdgeRoute = (route: LaidRoute, from: DiagramNode, to: DiagramNode): EdgeRoute => {
  const fromBox = attachRect(from)
  const toBox = attachRect(to)
  const fromSide = sideOf({ ...from }, route.start)
  const toSide = sideOf({ ...to }, route.end)
  const offset = (box: Box, side: Side, p: Point): number =>
    horizontal(side) ? p.y - (box.y + box.height / 2) : p.x - (box.x + box.width / 2)
  const fromOffset = offset(fromBox, fromSide, route.start)
  const toOffset = offset(toBox, toSide, route.end)
  const start = anchor(fromBox, fromSide, fromOffset)
  const end = anchor(toBox, toSide, toOffset)

  // Square the first and the last leg up to the anchors as the canvas places them.
  const bends = route.bends.map((bend, index) => ({
    ...bend,
    ...(index === 0 ? (horizontal(fromSide) ? { y: start.y } : { x: start.x }) : {}),
    ...(index === route.bends.length - 1 ? (horizontal(toSide) ? { y: end.y } : { x: end.x }) : {}),
  }))

  return {
    fromSide,
    toSide,
    fromOffset,
    toOffset,
    points: bends,
    ...(route.labelAt === undefined ? {} : { labelAt: route.labelAt }),
  }
}

export type BuildOptions = Readonly<{
  /** Only these views, by key, in this order. Every view when left out. */
  views?: readonly string[]
  /** ELK option overrides, for tuning a layout. */
  layoutOptions?: Readonly<Record<string, string>>
}>

/** The views a build draws: every one, in the workspace's order, or the ones asked for. */
export const selectViews = (workspace: Workspace, keys: readonly string[] | undefined): readonly View[] => {
  if (keys === undefined || keys.length === 0) return workspace.views
  return keys.map((key) => {
    const view = workspace.views.find((v) => v.key === key)
    if (view === undefined) {
      const known = workspace.views.map((v) => v.key).join(", ") || "none"
      throw new Error(`Structurizr: no view '${key}' (the workspace has: ${known})`)
    }
    return view
  })
}

/** One diagram per view, laid out. Image (PlantUML, Mermaid) views are not in a workspace's views. */
export const buildDiagrams = async (workspace: Workspace, options: BuildOptions = {}): Promise<readonly DiagramFigure[]> => {
  const views = selectViews(workspace, options.views)
  if (views.length === 0) throw new Error("Structurizr: the workspace defines no views")
  return Promise.all(
    views.map(async (view) => ({
      key: view.key,
      caption: view.name,
      diagram: await buildView(workspace, view, options.layoutOptions),
    })),
  )
}

/** One view, laid out and mapped to a diagram. */
const buildView = async (
  workspace: Workspace,
  view: View,
  layoutOptions: Readonly<Record<string, string>> = {},
): Promise<Diagram> => {
  const plan = planView(workspace, view)

  const sized = new Map(plan.nodes.map((node) => [node.element.id, nodeOf(node, { x: 0, y: 0 })]))
  const layoutNodes = plan.nodes.flatMap((node) => {
    const drawn = sized.get(node.element.id)
    if (drawn === undefined) return []
    return [
      {
        id: node.element.id,
        width: drawn.width,
        height: drawn.height,
        ...(node.group === undefined ? {} : { parent: node.group }),
      },
    ]
  })
  // The boundaries nest as the plan says, each sized around what it holds plus its header.
  const layoutGroups = plan.groups.map((group) => ({
    id: group.id,
    ...(group.parent === undefined ? {} : { parent: group.parent }),
    header: headerSize(group.label, group.type),
  }))
  const edges = plan.edges.map((edge) => ({
    id: edge.id,
    from: edge.from,
    to: edge.to,
    label: labelSize(edge.label, edge.technology),
  }))

  const laid = await layOut(layoutNodes, layoutGroups, edges, view.direction, layoutOptions)
  const placed = new Map(
    plan.nodes.flatMap((node) => {
      const drawn = sized.get(node.element.id)
      const box = laid.boxes[node.element.id]
      return drawn === undefined || box === undefined
        ? []
        : [
            [
              node.element.id,
              { ...drawn, x: box.x, y: box.y, ...(node.group === undefined ? {} : { group: node.group }) },
            ] as const,
          ]
    }),
  )
  const routes: Record<string, EdgeRoute> = Object.fromEntries(
    edges.flatMap((edge) => {
      const route = laid.routes[edge.id]
      const from = placed.get(edge.from)
      const to = placed.get(edge.to)
      return route === undefined || from === undefined || to === undefined
        ? []
        : [[edge.id, toEdgeRoute(route, from, to)] as const]
    }),
  )
  return toDiagram(plan, [...placed.values()], laid.boxes, routes)
}
