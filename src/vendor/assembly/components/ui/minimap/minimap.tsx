import { cn } from "../../../cn"
import { minimapLayout, NODE_H, NODE_W, type Extent } from "../../../utils/graph/geometry"
import type { CanvasNode, Size, View } from "../../../types/graph"

/** One item in miniature: a FlowCanvas node, or anything with its own size. */
export type MinimapItem = Readonly<Extent & { id: string; state?: CanvasNode["state"] | undefined }>

// `box` is the visible canvas size. The canvas passes it in explicitly so the minimap stays pure
// rather than reading it from a ref.
export type MinimapProps = Readonly<{
  nodes: readonly MinimapItem[]
  /** Boundaries, drawn as outlines behind the nodes, such as a diagram's groups. */
  frames?: readonly MinimapItem[] | undefined
  view: View
  selected?: string | null
  box?: Size
}>

const SIZE = { width: 160, height: 96 } as const
const DEFAULT_BOX = { width: 800, height: 480 } as const

/** The whole flow in miniature, with the visible part outlined. Decorative: the canvas is the real UI. */
export function Minimap({
  nodes,
  frames = [],
  view,
  selected = null,
  box = DEFAULT_BOX,
}: MinimapProps) {
  const layout = minimapLayout([...frames, ...nodes], view, box, SIZE)
  if (layout === null) return null
  const { scale, minX, minY, viewport } = layout
  return (
    <svg
      className="sk-mini"
      data-slot="minimap"
      width={SIZE.width}
      height={SIZE.height}
      viewBox={`0 0 ${String(SIZE.width)} ${String(SIZE.height)}`}
      aria-hidden="true"
    >
      {frames.map((f) => (
        <rect
          key={`frame-${f.id}`}
          className="sk-mini__frame"
          x={(f.x - minX) * scale}
          y={(f.y - minY) * scale}
          width={(f.width ?? NODE_W) * scale}
          height={(f.height ?? NODE_H) * scale}
          rx={2}
        />
      ))}
      {nodes.map((n) => (
        <rect
          key={n.id}
          className={cn(
            "sk-mini__node",
            selected === n.id && "is-selected",
            n.state !== undefined && `is-${n.state}`,
          )}
          x={(n.x - minX) * scale}
          y={(n.y - minY) * scale}
          width={(n.width ?? NODE_W) * scale}
          height={(n.height ?? NODE_H) * scale}
          rx={1.5}
        />
      ))}
      <rect
        className="sk-mini__view"
        x={viewport.x}
        y={viewport.y}
        width={viewport.width}
        height={viewport.height}
        rx={2}
      />
    </svg>
  )
}
