// Dragging an item across a zoomed canvas: its top-left follows the pointer, divided by the zoom
// and snapped to the grid. `onMoveStart` fires on the first real change, so a click that doesn't
// move is no undo step, and `onMoveEnd` only after a drag that moved. Shared by FlowCanvas's nodes
// and DiagramCanvas's nodes, groups, and notes; keyboard nudges use `nudgeFor` from geometry.
import { useRef, type PointerEvent } from "react"
import { snap } from "../utils/graph/geometry"
import type { Point } from "../types/graph"

// eslint-disable-next-line functional/no-mixed-types -- options carry the move callbacks alongside the zoom
export type CanvasDragOptions = Readonly<{
  /** The canvas zoom, to turn pointer pixels into canvas units. */
  zoom: number
  /** The item's new snapped top-left, on every move. */
  onMove: (id: string, to: Point) => void
  /** First movement of a drag: push an undo entry here. */
  onMoveStart?: ((id: string) => void) | undefined
  onMoveEnd?: ((id: string) => void) | undefined
}>

export type CanvasDrag = Readonly<{
  /** Starts dragging `id` from its current top-left, `origin`. */
  start: (event: PointerEvent<HTMLElement>, id: string, origin: Point) => void
  /** Follows a drag in progress; false when none is, so the caller handles the move instead. */
  move: (event: PointerEvent<HTMLElement>) => boolean
  /** Ends a drag; null when none was in progress. */
  end: () => Readonly<{ id: string; moved: boolean }> | null
}>

type Drag = Readonly<{ id: string; start: Point; origin: Point; moved: boolean }>

export function useCanvasDrag({
  zoom,
  onMove,
  onMoveStart,
  onMoveEnd,
}: CanvasDragOptions): CanvasDrag {
  // In a ref, not state: pointerup must see the latest pointermove even when React hasn't
  // re-rendered in between (a fast flick), or a drag would end without onMoveEnd.
  const dragRef = useRef<Drag | null>(null)
  const setDrag = (next: Drag | null) => {
    // eslint-disable-next-line functional/immutable-data -- a React ref is the sanctioned mutable cell for in-flight gesture state
    dragRef.current = next
  }

  return {
    start: (e, id, origin) => {
      setDrag({ id, start: { x: e.clientX, y: e.clientY }, origin, moved: false })
    },
    move: (e) => {
      const drag = dragRef.current
      if (drag === null) return false
      const to = {
        x: snap(drag.origin.x + (e.clientX - drag.start.x) / zoom),
        y: snap(drag.origin.y + (e.clientY - drag.start.y) / zoom),
      }
      const changed = to.x !== drag.origin.x || to.y !== drag.origin.y
      if (!drag.moved && changed) {
        onMoveStart?.(drag.id)
        setDrag({ ...drag, moved: true })
      }
      onMove(drag.id, to)
      return true
    },
    end: () => {
      const drag = dragRef.current
      if (drag === null) return null
      setDrag(null)
      if (drag.moved) onMoveEnd?.(drag.id)
      return { id: drag.id, moved: drag.moved }
    },
  }
}
