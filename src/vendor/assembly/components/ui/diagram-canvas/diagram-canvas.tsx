// DiagramCanvas: a pannable, zoomable, free-form canvas for architecture diagrams, built from
// DiagramGroup, DiagramEdge, DiagramNode, and DiagramNote, with CanvasToolbar, Minimap, and
// DiagramLegend as overlays. The camera and item drags come from useCanvasViewport and
// useCanvasDrag (shared with FlowCanvas); routing from utils/graph/diagram-routing. The data is
// DiagramData (types/diagram.ts); the vocabulary of kinds comes from the caller.
//
// Layers are in DOM order groups, nodes, relationships, notes, with z-index painting the
// relationships beneath the nodes. So Tab reads a diagram as a person would: boundaries, then
// elements in reading order (top to bottom, left to right), then relationships, then notes.
import { useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react"
import { cn } from "../../../cn"
import { useCanvasDrag } from "../../../hooks/use-canvas-drag"
import { useCanvasViewport } from "../../../hooks/use-canvas-viewport"
import { m } from "../../../paraglide/messages"
import { diagramNodeSize, shapeAnchor, shapeOf } from "../../../utils/graph/diagram-node-size"
import { notePointer } from "../../../utils/graph/diagram-note-pointer"
import { pickSides, routeEdge, type Rect } from "../../../utils/graph/diagram-routing"
import { PALETTE_DRAG_TYPE } from "../../../utils/graph/drag"
import { gridBackground, nudgeFor, snap, type Extent } from "../../../utils/graph/geometry"
import { CanvasToolbar } from "../canvas-toolbar/canvas-toolbar"
import { DiagramEdge } from "../diagram-edge/diagram-edge"
import { DiagramGroup, type DiagramGroupHandle } from "../diagram-group/diagram-group"
import { DiagramLegend } from "../diagram-legend/diagram-legend"
import { DiagramNode } from "../diagram-node/diagram-node"
import { DIAGRAM_NOTE_WIDTH, DiagramNote } from "../diagram-note/diagram-note"
import { Minimap } from "../minimap/minimap"
import type {
  DiagramData,
  DiagramEdgeData,
  DiagramGroupData,
  DiagramKinds,
  DiagramNodeData,
  DiagramNoteData,
  DiagramSide,
} from "../../../types/diagram"
import type { Point, View } from "../../../types/graph"

/** One thing on the diagram, by type and id: what's selected, deleted, or moved. */
export type DiagramItem = Readonly<{ type: "node" | "edge" | "group" | "note"; id: string }>

/** A connection dragged from one node's handle onto another node. */
export type DiagramConnection = Readonly<{
  from: string
  fromSide: DiagramSide
  to: string
  toSide: DiagramSide
}>

export type DiagramLegendPlacement = "top-left" | "top-right" | "bottom-left" | "bottom-right"

export type DiagramCanvasProps = Readonly<{
  /** Controlled: the diagram, with `onChange` receiving every move, resize, and nudge. */
  data?: DiagramData | undefined
  /** Uncontrolled: the starting diagram. */
  defaultData?: DiagramData | undefined
  onChange?: ((data: DiagramData) => void) | undefined
  /** How each kind of node looks and is named, keyed by `DiagramNodeData.kind`. */
  kinds?: DiagramKinds | undefined
  /** Look, pan, zoom, and select, but no moving, resizing, or connecting. */
  readOnly?: boolean | undefined
  /** Controlled, one item: the last one picked. `selection` is the whole list. */
  selected?: DiagramItem | null | undefined
  defaultSelected?: DiagramItem | null | undefined
  /** The last item picked, or null when the selection is cleared; see `onSelectionChange`. */
  onSelect?: ((item: DiagramItem | null) => void) | undefined
  /** Controlled: every selected item, in the order picked. Shift adds to it. */
  selection?: readonly DiagramItem[] | undefined
  defaultSelection?: readonly DiagramItem[] | undefined
  onSelectionChange?: ((items: readonly DiagramItem[]) => void) | undefined
  /** The data flow running along every relationship at once, as the toolbar's toggle sets it. */
  flow?: boolean | undefined
  defaultFlow?: boolean | undefined
  onFlowChange?: ((flow: boolean) => void) | undefined
  /** Dragged from a node's handle onto another node; the caller adds the edge, in its style. */
  onConnect?: ((connection: DiagramConnection) => void) | undefined
  /** Delete or Backspace on a focused item. */
  onDelete?: ((item: DiagramItem) => void) | undefined
  /** A NodePalette item dropped on the canvas, with a grid-snapped top-left position. */
  onDrop?: ((itemId: string, x: number, y: number) => void) | undefined
  /** Before a move, resize, or nudge changes the diagram: push an undo entry here. */
  onMoveStart?: ((item: DiagramItem) => void) | undefined
  onMoveEnd?: ((item: DiagramItem) => void) | undefined
  onUndo?: (() => void) | undefined
  onRedo?: (() => void) | undefined
  /** The key, as an overlay: `true` for the top right, or a corner. */
  legend?: boolean | DiagramLegendPlacement | undefined
  /** What each relationship style means, for the legend; see DiagramLegend. */
  lineLabels?: Readonly<Record<string, string>> | undefined
  toolbar?: boolean | undefined
  minimap?: boolean | undefined
  height?: number | string | undefined
  /** Frame the whole diagram once, on mount. */
  fitOnMount?: boolean | undefined
  defaultView?: View | undefined
  /** The canvas's accessible name. Defaults to "Diagram". */
  label?: string | undefined
  /** Extra overlays positioned inside the canvas. */
  children?: ReactNode
  className?: string | undefined
}>

const EMPTY: DiagramData = { nodes: [], edges: [] }
const DEFAULT_VIEW: View = { x: 40, y: 40, zoom: 1 }
/** Below this zoom, the canvas draws compact: names and shapes, without technology or prose. */
const COMPACT_ZOOM = 0.7
/** How far apart edge ends sharing one side sit, at most. */
const SPREAD = 24
const MIN_GROUP = { width: 160, height: 96 } as const
/** A NodePalette drop is centred on the pointer at this size. */
const DROP_SIZE = { width: 256, height: 96 } as const
/** Keeps an offset end off a side's corners. */
const SIDE_MARGIN = 16

type Resize = Readonly<{
  id: string
  handle: DiagramGroupHandle
  start: Point
  origin: Rect
  moved: boolean
}>
type Connect = Readonly<{ from: string; fromSide: DiagramSide; point: Point }>

const itemKey = (item: DiagramItem): string => `${item.type}:${item.id}`
const parseKey = (key: string): DiagramItem => {
  const at = key.indexOf(":")
  return { type: key.slice(0, at) as DiagramItem["type"], id: key.slice(at + 1) }
}
const sameItem = (a: DiagramItem | null, b: DiagramItem | null): boolean =>
  a !== null && b !== null && a.type === b.type && a.id === b.id
const hasItem = (items: readonly DiagramItem[], item: DiagramItem): boolean =>
  items.some((each) => sameItem(each, item))

const nodeIdAt = (point: Point): string | null =>
  document.elementFromPoint(point.x, point.y)?.closest("[data-node]")?.getAttribute("data-node") ??
  null

/** A note's height, estimated from its text: the note sizes itself, and this places its pointer. */
const noteHeight = (note: DiagramNoteData): number => {
  const width = note.width ?? DIAGRAM_NOTE_WIDTH
  const perLine = Math.max(8, Math.floor((width - 26) / 7))
  const lines = note.text
    .split("\n")
    .reduce((sum, line) => sum + Math.max(1, Math.ceil(line.length / perLine)), 0)
  return 22 + lines * 19
}

/** The side of a rect nearest a point. */
const nearestSide = (rect: Rect, p: Point): DiagramSide => {
  const distances: readonly (readonly [DiagramSide, number])[] = [
    ["top", Math.abs(p.y - rect.y)],
    ["bottom", Math.abs(p.y - (rect.y + rect.height))],
    ["left", Math.abs(p.x - rect.x)],
    ["right", Math.abs(p.x - (rect.x + rect.width))],
  ]
  return distances.reduce((best, d) => (d[1] < best[1] ? d : best))[0]
}

const centre = (r: Rect): Point => ({ x: r.x + r.width / 2, y: r.y + r.height / 2 })

/** A pannable, zoomable, free-form canvas for architecture diagrams. */
export function DiagramCanvas({
  data: dataProp,
  defaultData,
  onChange,
  kinds = {},
  readOnly = false,
  selected: selectedProp,
  defaultSelected = null,
  onSelect,
  selection: selectionProp,
  defaultSelection,
  onSelectionChange,
  flow: flowProp,
  defaultFlow = false,
  onFlowChange,
  onConnect,
  onDelete,
  onDrop,
  onMoveStart,
  onMoveEnd,
  onUndo,
  onRedo,
  legend = false,
  lineLabels,
  toolbar = true,
  minimap = true,
  height = 560,
  fitOnMount = false,
  defaultView = DEFAULT_VIEW,
  label,
  children,
  className,
}: DiagramCanvasProps) {
  const controlled = dataProp !== undefined && onChange !== undefined
  const [ownData, setOwnData] = useState<DiagramData>(dataProp ?? defaultData ?? EMPTY)
  const data = controlled ? dataProp : ownData
  const setData = (next: DiagramData) => {
    if (controlled) onChange(next)
    else setOwnData(next)
  }
  const groups = data.groups ?? []
  const notes = data.notes ?? []

  // The selection is a list, in the order picked; `selected` and `onSelect` are its one-item
  // view, the last one picked, so a caller that only ever needs one item keeps working.
  const [ownSelection, setOwnSelection] = useState<readonly DiagramItem[]>(
    defaultSelection ?? (defaultSelected === null ? [] : [defaultSelected]),
  )
  const selection: readonly DiagramItem[] =
    selectionProp ??
    (selectedProp === undefined ? ownSelection : selectedProp === null ? [] : [selectedProp])
  const selected = selection.at(-1) ?? null
  const setSelection = (next: readonly DiagramItem[]) => {
    if (selectionProp === undefined && selectedProp === undefined) setOwnSelection(next)
    onSelectionChange?.(next)
    onSelect?.(next.at(-1) ?? null)
  }
  const select = (item: DiagramItem | null) => {
    setSelection(item === null ? [] : [item])
  }
  // The flow along every relationship at once: a way to read the whole diagram's traffic,
  // without picking anything. It moves the lines only; nothing lights up or fades.
  const [ownFlow, setOwnFlow] = useState(defaultFlow)
  const flow = flowProp ?? ownFlow
  const toggleFlow = () => {
    if (flowProp === undefined) setOwnFlow(!flow)
    onFlowChange?.(!flow)
  }

  /** Shift adds an item to the selection, or takes it out when it's already there. */
  const toggle = (item: DiagramItem) => {
    setSelection(
      hasItem(selection, item)
        ? selection.filter((each) => !sameItem(each, item))
        : [...selection, item],
    )
  }

  // What emphasis follows besides the selection: the node or edge under the pointer, and the
  // node with keyboard focus.
  const [hovered, setHovered] = useState<DiagramItem | null>(null)
  const [focusedNode, setFocusedNode] = useState<string | null>(null)

  // --- geometry: every item's box, in canvas units
  const nodeSize = (node: DiagramNodeData) => diagramNodeSize(node, kinds[node.kind])
  const nodeRect = (node: DiagramNodeData): Rect => ({ x: node.x, y: node.y, ...nodeSize(node) })
  // Where connections attach: the shape's own outline, such as a stack's front card.
  const attachRect = (node: DiagramNodeData): Rect => {
    const shape = shapeOf(kinds[node.kind])
    const size = nodeSize(node)
    const top = shapeAnchor(shape, size, "top")
    const bottom = shapeAnchor(shape, size, "bottom")
    const left = shapeAnchor(shape, size, "left")
    const right = shapeAnchor(shape, size, "right")
    return {
      x: node.x + left.x,
      y: node.y + top.y,
      width: right.x - left.x,
      height: bottom.y - top.y,
    }
  }
  const noteRect = (note: DiagramNoteData): Rect => ({
    x: note.x,
    y: note.y,
    width: note.width ?? DIAGRAM_NOTE_WIDTH,
    height: noteHeight(note),
  })
  const nodesById = new Map(data.nodes.map((n) => [n.id, n]))
  const groupsById = new Map(groups.map((g) => [g.id, g]))
  const extents: readonly Extent[] = [
    ...groups,
    ...data.nodes.map(nodeRect),
    ...notes.map(noteRect),
  ]

  // A group's nesting depth, and every group nested anywhere inside it.
  const depthOf = (group: DiagramGroupData, seen: ReadonlySet<string> = new Set()): number => {
    const parent = group.parent === undefined ? undefined : groupsById.get(group.parent)
    return parent === undefined || seen.has(parent.id)
      ? 0
      : 1 + depthOf(parent, new Set([...seen, group.id]))
  }
  const within = (id: string, seen: ReadonlySet<string> = new Set()): ReadonlySet<string> => {
    const children = groups.filter((g) => g.parent === id && !seen.has(g.id)).map((g) => g.id)
    return children.reduce<ReadonlySet<string>>(
      (all, child) => new Set([...all, ...within(child, new Set([...seen, id, child]))]),
      new Set([id, ...children]),
    )
  }
  // The groups a node sits in, innermost first.
  const groupsOf = (
    groupId: string | undefined,
    seen: ReadonlySet<string> = new Set(),
  ): readonly string[] => {
    if (groupId === undefined || seen.has(groupId)) return []
    return [groupId, ...groupsOf(groupsById.get(groupId)?.parent, new Set([...seen, groupId]))]
  }

  // --- camera and gestures
  const boxRef = useRef<HTMLDivElement>(null)
  const viewport = useCanvasViewport(boxRef, { defaultView, fitOnMount, content: extents })
  const { view, box } = viewport
  const detail = view.zoom < COMPACT_ZOOM ? "compact" : "full"

  const shift = (d: DiagramData, item: DiagramItem, dx: number, dy: number): DiagramData => {
    if (dx === 0 && dy === 0) return d
    const by = <T extends Readonly<{ x: number; y: number }>>(t: T): T => ({
      ...t,
      x: t.x + dx,
      y: t.y + dy,
    })
    if (item.type === "node")
      return { ...d, nodes: d.nodes.map((n) => (n.id === item.id ? by(n) : n)) }
    if (item.type === "note")
      return { ...d, notes: (d.notes ?? []).map((n) => (n.id === item.id ? by(n) : n)) }
    // a group carries everything inside it, and the notes pointing at any of it
    const inside = within(item.id)
    const members = new Set(
      d.nodes.filter((n) => n.group !== undefined && inside.has(n.group)).map((n) => n.id),
    )
    return {
      ...d,
      groups: (d.groups ?? []).map((g) => (inside.has(g.id) ? by(g) : g)),
      nodes: d.nodes.map((n) => (members.has(n.id) ? by(n) : n)),
      notes: (d.notes ?? []).map((n) =>
        n.target !== undefined && (inside.has(n.target) || members.has(n.target)) ? by(n) : n,
      ),
    }
  }
  const originOf = (item: DiagramItem): Point | undefined =>
    item.type === "node"
      ? nodesById.get(item.id)
      : item.type === "group"
        ? groupsById.get(item.id)
        : notes.find((n) => n.id === item.id)

  const drag = useCanvasDrag({
    zoom: view.zoom,
    onMove: (key, to) => {
      const item = parseKey(key)
      const origin = originOf(item)
      if (origin !== undefined) setData(shift(data, item, to.x - origin.x, to.y - origin.y))
    },
    onMoveStart: (key) => onMoveStart?.(parseKey(key)),
    onMoveEnd: (key) => onMoveEnd?.(parseKey(key)),
  })

  // Resizing a group and drawing a connection live in refs, like the hooks' gestures: pointerup
  // must see the latest pointermove. Only the connection's temporary line is rendered, as state.
  const resizeRef = useRef<Resize | null>(null)
  const setResize = (next: Resize | null) => {
    // eslint-disable-next-line functional/immutable-data -- a React ref is the sanctioned mutable cell for in-flight gesture state
    resizeRef.current = next
  }
  const connectRef = useRef<Connect | null>(null)
  const [connecting, setConnecting] = useState<Connect | null>(null)
  const setConnect = (next: Connect | null) => {
    // eslint-disable-next-line functional/immutable-data -- a React ref is the sanctioned mutable cell for in-flight gesture state
    connectRef.current = next
    setConnecting(next)
  }

  const startDrag = (e: PointerEvent<HTMLElement>, item: DiagramItem) => {
    if (e.shiftKey) toggle(item)
    else select(item)
    if (e.button !== 0 || readOnly) return
    e.stopPropagation()
    const origin = originOf(item)
    if (origin === undefined) return
    drag.start(e, itemKey(item), { x: origin.x, y: origin.y })
    viewport.capture(e)
  }

  const onBackgroundDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    const target = e.target instanceof Element ? e.target : null
    // items handle their own pointer; an edge's hit path is clicked, not panned from
    if (
      target?.closest(
        '[data-node], [data-slot="diagram-group-header"], [data-slot="diagram-group-handle"], [data-slot="diagram-note"], [data-slot="diagram-edge-hit"], .sk-canvas__ui',
      ) != null
    )
      return
    viewport.panStart(e)
    viewport.capture(e)
  }

  const resizeTo = (resize: Resize, e: PointerEvent<HTMLDivElement>): Rect => {
    const dx = (e.clientX - resize.start.x) / view.zoom
    const dy = (e.clientY - resize.start.y) / view.zoom
    const o = resize.origin
    const h = resize.handle
    const right = h.includes("e") ? snap(o.x + o.width + dx) : o.x + o.width
    const bottom = h.includes("s") ? snap(o.y + o.height + dy) : o.y + o.height
    const left = h.includes("w") ? Math.min(snap(o.x + dx), right - MIN_GROUP.width) : o.x
    const top = h.includes("n") ? Math.min(snap(o.y + dy), bottom - MIN_GROUP.height) : o.y
    return {
      x: left,
      y: top,
      width: Math.max(MIN_GROUP.width, right - left),
      height: Math.max(MIN_GROUP.height, bottom - top),
    }
  }

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const resize = resizeRef.current
    if (resize !== null) {
      const rect = resizeTo(resize, e)
      const o = resize.origin
      const changed =
        rect.x !== o.x || rect.y !== o.y || rect.width !== o.width || rect.height !== o.height
      if (!changed) return
      if (!resize.moved) {
        onMoveStart?.({ type: "group", id: resize.id })
        setResize({ ...resize, moved: true })
      }
      setData({
        ...data,
        groups: groups.map((g) => (g.id === resize.id ? { ...g, ...rect } : g)),
      })
      return
    }
    const connect = connectRef.current
    if (connect !== null) {
      setConnect({ ...connect, point: viewport.toWorld(e.clientX, e.clientY) })
      return
    }
    if (viewport.panMove(e) || drag.move(e)) return
    // hover emphasis: the node or relationship under the pointer
    const target = e.target instanceof Element ? e.target : null
    const node = target?.closest("[data-node]")?.getAttribute("data-node") ?? null
    const edge =
      node === null ? (target?.closest("[data-edge]")?.getAttribute("data-edge") ?? null) : null
    const next: DiagramItem | null =
      node !== null ? { type: "node", id: node } : edge !== null ? { type: "edge", id: edge } : null
    if (!sameItem(next, hovered) && !(next === null && hovered === null)) setHovered(next)
  }

  const onUp = (e: PointerEvent<HTMLDivElement>) => {
    const resize = resizeRef.current
    if (resize !== null) {
      setResize(null)
      if (resize.moved) onMoveEnd?.({ type: "group", id: resize.id })
      return
    }
    const connect = connectRef.current
    if (connect !== null) {
      setConnect(null)
      const to = nodeIdAt({ x: e.clientX, y: e.clientY })
      const target = to === null ? undefined : nodesById.get(to)
      if (target !== undefined && target.id !== connect.from)
        onConnect?.({
          from: connect.from,
          fromSide: connect.fromSide,
          to: target.id,
          toSide: nearestSide(attachRect(target), viewport.toWorld(e.clientX, e.clientY)),
        })
      return
    }
    const pan = viewport.panEnd()
    if (pan !== null) {
      if (!pan.moved) select(null)
      return
    }
    drag.end()
  }

  const nudge = (item: DiagramItem, e: KeyboardEvent<HTMLElement>): boolean => {
    const step = nudgeFor(e.key, e.shiftKey)
    if (step === null || readOnly) return false
    e.preventDefault()
    onMoveStart?.(item)
    setData(shift(data, item, step.x, step.y))
    return true
  }

  const onItemKey = (e: KeyboardEvent<HTMLElement>, item: DiagramItem) => {
    if ((e.key === "Delete" || e.key === "Backspace") && onDelete !== undefined && !readOnly) {
      e.preventDefault()
      onDelete(item)
      return
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      if (e.shiftKey) toggle(item)
      else select(item)
      return
    }
    nudge(item, e)
  }

  // --- the selection as sets: the nodes and relationships picked, and every node inside a picked
  // boundary, at any depth, which counts as picked too
  const insideSelected: ReadonlySet<string> = new Set(
    selection.filter((item) => item.type === "group").flatMap((item) => [...within(item.id)]),
  )
  const selectedNodes: ReadonlySet<string> = new Set([
    ...selection.filter((item) => item.type === "node").map((item) => item.id),
    ...data.nodes
      .filter((n) => n.group !== undefined && insideSelected.has(n.group))
      .map((n) => n.id),
  ])
  const selectedEdges: ReadonlySet<string> = new Set(
    selection.filter((item) => item.type === "edge").map((item) => item.id),
  )

  // --- emphasis: everything selected, and the node hovered or focused or the edge hovered on
  // top of it, lights up with its neighbours and relationships, and everything else steps back.
  // The pointer adds to the selection's emphasis rather than replacing it, so picking a second
  // element with Shift never fades the first.
  const pointed = (hovered?.type === "node" ? hovered.id : null) ?? focusedNode
  const hoveredEdge = hovered?.type === "edge" ? hovered.id : null
  const focusNodes: ReadonlySet<string> = new Set([
    ...selectedNodes,
    ...(pointed === null ? [] : [pointed]),
  ])
  const focusEdges: ReadonlySet<string> = new Set([
    ...selectedEdges,
    ...(hoveredEdge === null ? [] : [hoveredEdge]),
  ])
  const relatedEdges: ReadonlySet<string> = new Set(
    data.edges
      .filter((e) => focusEdges.has(e.id) || focusNodes.has(e.from) || focusNodes.has(e.to))
      .map((e) => e.id),
  )
  const relatedNodes: ReadonlySet<string> = new Set([
    ...focusNodes,
    ...data.edges.filter((e) => relatedEdges.has(e.id)).flatMap((e) => [e.from, e.to]),
  ])
  const relatedGroups: ReadonlySet<string> = new Set([
    ...[...relatedNodes].flatMap((id) => groupsOf(nodesById.get(id)?.group)),
    ...insideSelected,
  ])
  const emphasis = focusNodes.size > 0 || focusEdges.size > 0

  // --- edge ends: resolve each end's side, then spread the ends sharing a side along it,
  // ordered by where their other end lies so the lines don't cross. An end the edge positions
  // itself (its own offset, as a layout engine's route gives) stays where it was put.
  const resolved = data.edges.flatMap((edge) => {
    const from = nodesById.get(edge.from)
    const to = nodesById.get(edge.to)
    if (from === undefined || to === undefined) return []
    const a = attachRect(from)
    const b = attachRect(to)
    const centreLine =
      edge.route === "straight" && edge.fromSide === undefined && edge.toSide === undefined
    const picked = pickSides(a, b)
    return [
      {
        edge,
        from,
        to,
        a,
        b,
        sides: centreLine
          ? null
          : { from: edge.fromSide ?? picked.from, to: edge.toSide ?? picked.to },
      },
    ]
  })
  type End = Readonly<{ key: string; slot: string; along: number; length: number }>
  const ends: readonly End[] = resolved.flatMap(({ edge, a, b, sides }) => {
    if (sides === null) return []
    const horizontal = (side: DiagramSide) => side === "left" || side === "right"
    const end = (which: "from" | "to", side: DiagramSide, own: Rect, other: Rect): End => ({
      key: `${edge.id}:${which}`,
      slot: `${which === "from" ? edge.from : edge.to}:${side}`,
      along: horizontal(side) ? centre(other).y : centre(other).x,
      length: horizontal(side) ? own.height : own.width,
    })
    return [
      ...(edge.fromOffset === undefined ? [end("from", sides.from, a, b)] : []),
      ...(edge.toOffset === undefined ? [end("to", sides.to, b, a)] : []),
    ]
  })
  const offsets = new Map(
    Object.values(Object.groupBy(ends, (e) => e.slot)).flatMap((slot = []) => {
      const sorted = slot.toSorted((p, q) => p.along - q.along)
      const length = sorted[0]?.length ?? 0
      const gap =
        sorted.length < 2 ? 0 : Math.min(SPREAD, (length - 2 * SIDE_MARGIN) / (sorted.length - 1))
      return sorted.map((e, i) => [e.key, (i - (sorted.length - 1) / 2) * gap] as const)
    }),
  )

  // --- announcements: what the selection is, for screen readers
  const nameOf = (item: DiagramItem | null): string => {
    if (item === null) return ""
    if (item.type === "node") return nodesById.get(item.id)?.title ?? ""
    if (item.type === "group") return groupsById.get(item.id)?.label ?? ""
    if (item.type === "note") return m.ui_diagram_note_label()
    const edge = data.edges.find((e) => e.id === item.id)
    return edge?.label ?? m.ui_diagram_edge_unnamed()
  }
  const selectedName = nameOf(selected)

  const grid = gridBackground(view)
  const legendAt: DiagramLegendPlacement | null =
    legend === false ? null : legend === true ? "top-right" : legend
  const readingOrder = data.nodes.toSorted((p, q) => p.y - q.y || p.x - q.x)
  const temp =
    connecting === null
      ? null
      : (() => {
          const from = nodesById.get(connecting.from)
          return from === undefined
            ? null
            : routeEdge(
                attachRect(from),
                { x: connecting.point.x, y: connecting.point.y, width: 0, height: 0 },
                { fromSide: connecting.fromSide, route: "curved" },
              ).path
        })()

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- role="application" is the diagram's keyboard owner: Escape and Delete on a relationship are handled here
    <div
      ref={boxRef}
      className={cn("sk-canvas", "sk-dcanvas", readOnly && "is-readonly", className)}
      data-slot="diagram-canvas"
      // Runtime geometry: the dot grid follows pan and zoom.
      style={{
        height,
        backgroundSize: `${String(grid.size)}px ${String(grid.size)}px`,
        backgroundPosition: `${String(grid.offsetX)}px ${String(grid.offsetY)}px`,
      }}
      role="application"
      aria-label={label ?? m.ui_diagram_canvas_label()}
      aria-roledescription={m.ui_diagram_canvas_roledescription()}
      onPointerDown={onBackgroundDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={() => {
        if (hovered !== null) setHovered(null)
      }}
      onFocus={(e) => {
        const id = e.target.closest("[data-node]")?.getAttribute("data-node") ?? null
        if (id !== focusedNode) setFocusedNode(id)
      }}
      onBlur={(e) => {
        if (!(e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)))
          setFocusedNode(null)
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          select(null)
          return
        }
        // a relationship's hit path handles Enter and Space; Delete is the canvas's
        const edge =
          e.target instanceof Element && e.target.closest('[data-slot="diagram-edge-hit"]') !== null
            ? e.target.closest("[data-edge]")?.getAttribute("data-edge")
            : null
        if (
          edge != null &&
          (e.key === "Delete" || e.key === "Backspace") &&
          onDelete !== undefined &&
          !readOnly
        ) {
          e.preventDefault()
          onDelete({ type: "edge", id: edge })
        }
      }}
      onDragOver={(e) => {
        if (onDrop !== undefined && !readOnly) e.preventDefault()
      }}
      onDrop={(e) => {
        const itemId = e.dataTransfer.getData(PALETTE_DRAG_TYPE)
        if (itemId === "" || onDrop === undefined || readOnly) return
        e.preventDefault()
        const p = viewport.toWorld(e.clientX, e.clientY)
        onDrop(itemId, snap(p.x - DROP_SIZE.width / 2), snap(p.y - DROP_SIZE.height / 2))
      }}
    >
      <div
        className="sk-canvas__world"
        data-slot="diagram-canvas-world"
        style={{
          transform: `translate(${String(view.x)}px,${String(view.y)}px) scale(${String(view.zoom)})`,
        }}
      >
        {groups
          .map((group) => ({ group, depth: depthOf(group) }))
          .toSorted((p, q) => p.depth - q.depth)
          .map(({ group, depth }) => {
            const item: DiagramItem = { type: "group", id: group.id }
            return (
              <DiagramGroup
                key={group.id}
                group={group}
                depth={depth}
                detail={detail}
                selected={hasItem(selection, item)}
                // the light spins round the boundary that was picked, not the ones inside it
                beam={hasItem(selection, item)}
                highlighted={emphasis && relatedGroups.has(group.id)}
                dimmed={emphasis && !relatedGroups.has(group.id)}
                onPointerDown={(e) => {
                  startDrag(e, item)
                }}
                onKeyDown={(e) => {
                  onItemKey(e, item)
                }}
                {...(readOnly
                  ? {}
                  : {
                      onResizePointerDown: (
                        handle: DiagramGroupHandle,
                        e: PointerEvent<HTMLSpanElement>,
                      ) => {
                        if (e.button !== 0) return
                        e.stopPropagation()
                        setResize({
                          id: group.id,
                          handle,
                          start: { x: e.clientX, y: e.clientY },
                          origin: {
                            x: group.x,
                            y: group.y,
                            width: group.width,
                            height: group.height,
                          },
                          moved: false,
                        })
                        viewport.capture(e)
                      },
                    })}
              />
            )
          })}

        {readingOrder.map((node) => {
          const item: DiagramItem = { type: "node", id: node.id }
          const kind = kinds[node.kind]
          return (
            <DiagramNode
              key={node.id}
              node={node}
              kind={kind}
              className="sk-dcanvas__node"
              style={{ left: node.x, top: node.y }}
              detail={detail}
              selected={selectedNodes.has(node.id)}
              highlighted={emphasis && relatedNodes.has(node.id)}
              dimmed={emphasis && !relatedNodes.has(node.id)}
              beam={selectedNodes.has(node.id)}
              onPointerDown={(e) => {
                startDrag(e, item)
              }}
              onKeyDown={(e) => {
                onItemKey(e, item)
              }}
              {...(readOnly
                ? {}
                : {
                    onHandlePointerDown: (side: DiagramSide, e: PointerEvent<HTMLSpanElement>) => {
                      if (e.button !== 0) return
                      const point = viewport.toWorld(e.clientX, e.clientY)
                      setConnect({ from: node.id, fromSide: side, point })
                      viewport.capture(e)
                    },
                  })}
            />
          )
        })}

        <svg
          className="sk-canvas__edges sk-dcanvas__edges"
          data-slot="diagram-canvas-edges"
          width={1}
          height={1}
        >
          {notes.flatMap((note) => {
            if (note.target === undefined) return []
            const node = nodesById.get(note.target)
            const group = groupsById.get(note.target)
            const target = node === undefined ? group : attachRect(node)
            if (target === undefined) return []
            const { from, to } = notePointer(noteRect(note), target)
            return [
              <g
                key={`pointer-${note.id}`}
                className={cn(
                  "sk-dcanvas__pointer",
                  emphasis &&
                    !relatedNodes.has(note.target) &&
                    !relatedGroups.has(note.target) &&
                    "is-dimmed",
                )}
                aria-hidden="true"
              >
                <path
                  className="sk-dcanvas__pointer-line"
                  d={`M${String(from.x)},${String(from.y)} L${String(to.x)},${String(to.y)}`}
                />
                <circle className="sk-dcanvas__pointer-dot" cx={to.x} cy={to.y} r={3} />
              </g>,
            ]
          })}
          {resolved.map(({ edge, from, to, a, b, sides }) => {
            const item: DiagramItem = { type: "edge", id: edge.id }
            const routed: DiagramEdgeData =
              sides === null ? edge : { ...edge, fromSide: sides.from, toSide: sides.to }
            return (
              <DiagramEdge
                key={edge.id}
                edge={routed}
                from={a}
                to={b}
                fromLabel={from.title}
                toLabel={to.title}
                fromOffset={offsets.get(`${edge.id}:from`) ?? 0}
                toOffset={offsets.get(`${edge.id}:to`) ?? 0}
                detail={detail}
                interactive
                selected={selectedEdges.has(edge.id)}
                highlighted={emphasis && relatedEdges.has(edge.id)}
                dimmed={emphasis && !relatedEdges.has(edge.id)}
                // the flow shows for what was chosen, not for what is merely hovered; or
                // everywhere, when the toolbar says so
                beam={
                  flow ||
                  selectedEdges.has(edge.id) ||
                  selectedNodes.has(edge.from) ||
                  selectedNodes.has(edge.to)
                }
                onSelect={() => {
                  select(item)
                }}
              />
            )
          })}
          {temp === null ? null : <path className="sk-dcanvas__temp" d={temp} aria-hidden="true" />}
        </svg>

        {notes.map((note) => {
          const item: DiagramItem = { type: "note", id: note.id }
          return (
            <DiagramNote
              key={note.id}
              note={note}
              className="sk-dcanvas__note"
              selected={sameItem(selected, item)}
              dimmed={
                emphasis &&
                (note.target === undefined ||
                  (!relatedNodes.has(note.target) && !relatedGroups.has(note.target)))
              }
              onPointerDown={(e) => {
                startDrag(e, item)
              }}
              onKeyDown={(e) => {
                onItemKey(e, item)
              }}
            />
          )
        })}
      </div>

      <p className="sk-visually-hidden" aria-live="polite" data-slot="diagram-canvas-status">
        {selection.length > 1
          ? m.ui_diagram_canvas_selected_many({ count: String(selection.length) })
          : selectedName === ""
            ? ""
            : m.ui_diagram_canvas_selected({ name: selectedName })}
      </p>

      {children === undefined ? null : <div className="sk-canvas__ui">{children}</div>}
      {legendAt === null ? null : (
        <div
          className={cn("sk-canvas__ui", "sk-dcanvas__legend", `sk-dcanvas__legend--${legendAt}`)}
        >
          <DiagramLegend
            kinds={kinds}
            nodes={data.nodes}
            edges={data.edges}
            lineLabels={lineLabels}
          />
        </div>
      )}
      {toolbar ? (
        <div className="sk-canvas__ui sk-canvas__zoom">
          <CanvasToolbar
            zoom={view.zoom}
            onZoomIn={viewport.zoomIn}
            onZoomOut={viewport.zoomOut}
            onFit={() => {
              viewport.fit(extents)
            }}
            onFullScreen={viewport.toggleFullScreen}
            fullScreen={viewport.fullScreen}
            onFlow={toggleFlow}
            flow={flow}
            {...(onUndo === undefined ? {} : { onUndo })}
            {...(onRedo === undefined ? {} : { onRedo })}
          />
        </div>
      ) : null}
      {minimap ? (
        <div className="sk-canvas__ui sk-canvas__mini">
          <Minimap
            nodes={data.nodes.map((n) => ({ id: n.id, ...nodeRect(n) }))}
            frames={groups}
            view={view}
            selected={selected?.type === "node" ? selected.id : null}
            box={box}
          />
        </div>
      ) : null}
    </div>
  )
}
