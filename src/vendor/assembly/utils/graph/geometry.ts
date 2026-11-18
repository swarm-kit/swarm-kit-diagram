import type { Point, Size, View } from "../../types/graph"

/** Node card size and grid pitch, in canvas units. Fixed by the design system. */
export const NODE_W = 280
export const NODE_H = 72
export const GRID = 16
export const MIN_ZOOM = 0.4
export const MAX_ZOOM = 2

/** Snaps a canvas coordinate to the 16-unit grid. */
export function snap(value: number): number {
  return Math.round(value / GRID) * GRID
}

/** A node's output labels; one unlabelled output when none are declared. */
export function outPorts(
  node: Readonly<{ outputs?: readonly string[] }>,
): readonly (string | null)[] {
  return node.outputs !== undefined && node.outputs.length > 0 ? node.outputs : [null]
}

/**
 * Where a port sits, in canvas units. Flows read top to bottom: the input port is centred on
 * the top edge, outputs are spread evenly along the bottom edge.
 */
export function portPosition(
  node: Readonly<{ x: number; y: number; outputs?: readonly string[] }>,
  side: "in" | "out",
  index = 0,
): Point {
  if (side === "in") return { x: node.x + NODE_W / 2, y: node.y }
  const count = outPorts(node).length
  return { x: node.x + (NODE_W * (index + 1)) / (count + 1), y: node.y + NODE_H }
}

/** A vertical cubic Bézier from an output port to an input port, as an SVG path. */
export function edgePath(a: Point, b: Point): string {
  const dy = Math.max(32, Math.abs(b.y - a.y) / 2)
  return `M${a.x},${a.y} C${a.x},${a.y + dy} ${b.x},${b.y - dy} ${b.x},${b.y}`
}

/** The small arrowhead drawn at an input port. */
export function arrowPath(tip: Point): string {
  return `M${tip.x - 4},${tip.y - 7} L${tip.x},${tip.y} L${tip.x + 4},${tip.y - 7}`
}

export type Bounds = Readonly<{ minX: number; minY: number; maxX: number; maxY: number }>

/**
 * Something placed on a canvas: its top-left, and its size when it has its own. Without one it's
 * a FlowCanvas node, NODE_W by NODE_H; DiagramCanvas's nodes, groups, and notes pass theirs.
 */
export type Extent = Readonly<{
  x: number
  y: number
  width?: number | undefined
  height?: number | undefined
}>

/** The box around every item, or null for an empty canvas. */
export function bounds(nodes: readonly Extent[]): Bounds | null {
  if (nodes.length === 0) return null
  return nodes.reduce<Bounds>(
    (b, n) => ({
      minX: Math.min(b.minX, n.x),
      minY: Math.min(b.minY, n.y),
      maxX: Math.max(b.maxX, n.x + (n.width ?? NODE_W)),
      maxY: Math.max(b.maxY, n.y + (n.height ?? NODE_H)),
    }),
    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity },
  )
}

export function clampZoom(zoom: number): number {
  return Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoom))
}

/**
 * Zooms to `zoom` while keeping the canvas point under `anchor` (in screen pixels relative to
 * the canvas box) where it is. Anchor defaults to the centre of the box.
 */
export function zoomAt(view: View, zoom: number, box: Size, anchor?: Point): View {
  const z = clampZoom(zoom)
  const px = anchor?.x ?? box.width / 2
  const py = anchor?.y ?? box.height / 2
  const wx = (px - view.x) / view.zoom
  const wy = (py - view.y) / view.zoom
  return { zoom: z, x: px - wx * z, y: py - wy * z }
}

/** The view that frames every node with a 48px margin, never zoomed past 125%. */
export function fitView(nodes: readonly Extent[], box: Size, current: View): View {
  const b = bounds(nodes)
  if (b === null) return current
  const w = b.maxX - b.minX
  const h = b.maxY - b.minY
  const zoom = Math.max(
    MIN_ZOOM,
    Math.min(1.25, Math.min((box.width - 96) / w, (box.height - 96) / h)),
  )
  return {
    zoom,
    x: (box.width - w * zoom) / 2 - b.minX * zoom,
    y: (box.height - h * zoom) / 2 - b.minY * zoom,
  }
}

/** Screen pixels, relative to the canvas box, to canvas units. */
export function toWorld(view: View, screen: Point): Point {
  return { x: (screen.x - view.x) / view.zoom, y: (screen.y - view.y) / view.zoom }
}

/** The dot grid's size and offset so it pans and zooms with the world. */
export function gridBackground(
  view: View,
): Readonly<{ size: number; offsetX: number; offsetY: number }> {
  const size = GRID * view.zoom
  return { size, offsetX: view.x % size, offsetY: view.y % size }
}

/** Arrow-key nudge in canvas units: one grid step, four with Shift. Null for other keys. */
export function nudgeFor(key: string, shift: boolean): Point | null {
  const step = shift ? GRID * 4 : GRID
  switch (key) {
    case "ArrowLeft":
      return { x: -step, y: 0 }
    case "ArrowRight":
      return { x: step, y: 0 }
    case "ArrowUp":
      return { x: 0, y: -step }
    case "ArrowDown":
      return { x: 0, y: step }
    default:
      return null
  }
}

/** Returns the nodes with one of them moved to a new position. */
export function moveNode<N extends Readonly<{ id: string; x: number; y: number }>>(
  nodes: readonly N[],
  id: string,
  to: Point,
): readonly N[] {
  return nodes.map((n) => (n.id === id ? { ...n, x: to.x, y: to.y } : n))
}

export type MinimapLayout = Readonly<{
  scale: number
  minX: number
  minY: number
  viewport: Readonly<{ x: number; y: number; width: number; height: number }>
}>

/**
 * Fits the flow, padded by 80 units, into a width by height minimap, and places the viewport
 * rectangle for the visible part of the canvas.
 */
export function minimapLayout(
  nodes: readonly Extent[],
  view: View,
  box: Size,
  size: Size,
): MinimapLayout | null {
  const b = bounds(nodes)
  if (b === null) return null
  const minX = b.minX - 80
  const minY = b.minY - 80
  const scale = Math.min(size.width / (b.maxX + 80 - minX), size.height / (b.maxY + 80 - minY))
  return {
    scale,
    minX,
    minY,
    viewport: {
      x: (-view.x / view.zoom - minX) * scale,
      y: (-view.y / view.zoom - minY) * scale,
      width: (box.width / view.zoom) * scale,
      height: (box.height / view.zoom) * scale,
    },
  }
}
