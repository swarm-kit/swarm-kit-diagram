// The camera and background gestures of a pannable, zoomable canvas, shared by FlowCanvas and
// DiagramCanvas: the view (pan offset and zoom), the canvas element's size, wheel pan and
// Ctrl/⌘ + wheel zoom at the pointer, drag-the-background-to-pan, zoom in and out, fit to content,
// full screen, and screen-to-world conversion. Geometry is in utils/graph/geometry.
import { useEffect, useRef, useState, type PointerEvent, type RefObject } from "react"
import { fitView, toWorld, zoomAt, type Extent } from "../utils/graph/geometry"
import type { Point, Size, View } from "../types/graph"

export type CanvasViewportOptions = Readonly<{
  /** The first view: pan offset in screen pixels and a zoom factor. */
  defaultView?: View | undefined
  /** Fit `content` into the canvas once, after the first measure. */
  fitOnMount?: boolean | undefined
  /** What fit-on-mount frames, in canvas units: items with their sizes, or FlowCanvas nodes. */
  content?: readonly Extent[] | undefined
}>

// eslint-disable-next-line functional/no-mixed-types -- a hook's result carries its state alongside its commands
export type CanvasViewport = Readonly<{
  view: View
  setView: (view: View) => void
  /** The canvas element's size, for zoom anchoring, fit, and a minimap's viewport. */
  box: Size
  /** Whether the canvas element is full screen now. */
  fullScreen: boolean
  /** Takes the canvas element full screen, or brings it back; the content is fitted again after. */
  toggleFullScreen: () => void
  /** A pointer position relative to the canvas element, in screen pixels. */
  local: (clientX: number, clientY: number) => Point
  /** A pointer position in canvas units. */
  toWorld: (clientX: number, clientY: number) => Point
  zoomIn: () => void
  zoomOut: () => void
  /** Frames these items, each at its own size (FlowCanvas's node size when it has none). */
  fit: (content: readonly Extent[]) => void
  /** Captures the pointer on the canvas element, so a drag keeps its events off the edge. */
  capture: (event: PointerEvent<HTMLElement>) => void
  /** Starts dragging the background to pan. */
  panStart: (event: PointerEvent<HTMLElement>) => void
  /** Follows a pan in progress; false when none is, so the caller handles the move instead. */
  panMove: (event: PointerEvent<HTMLElement>) => boolean
  /** Ends a pan; null when none was in progress. `moved` false means it was a click. */
  panEnd: () => Readonly<{ moved: boolean }> | null
}>

const DEFAULT_VIEW: View = { x: 40, y: 40, zoom: 1 }
const DEFAULT_BOX: Size = { width: 800, height: 480 }
const ZOOM_STEP = 1.2

type Pan = Readonly<{ start: Point; origin: Point; moved: boolean }>

/**
 * The camera for the canvas element `ref` points at. The caller owns the ref and puts it on the
 * element, so the result holds no ref and can be read freely during render.
 */
export function useCanvasViewport(
  ref: Readonly<RefObject<HTMLDivElement | null>>,
  { defaultView = DEFAULT_VIEW, fitOnMount = false, content = [] }: CanvasViewportOptions = {},
): CanvasViewport {
  const [view, setView] = useState<View>(defaultView)
  const [box, setBox] = useState<Size>(DEFAULT_BOX)

  // The pan in progress lives in a ref, not state: pointerup must see the latest pointermove even
  // when React hasn't re-rendered in between.
  const panRef = useRef<Pan | null>(null)
  const setPan = (next: Pan | null) => {
    // eslint-disable-next-line functional/immutable-data -- a React ref is the sanctioned mutable cell for in-flight gesture state
    panRef.current = next
  }

  const local = (clientX: number, clientY: number): Point => {
    const rect = ref.current?.getBoundingClientRect()
    return { x: clientX - (rect?.left ?? 0), y: clientY - (rect?.top ?? 0) }
  }

  // Track the canvas's own size for zoom anchoring, fit, and a minimap's viewport.
  useEffect(() => {
    const el = ref.current
    if (el === null) return undefined
    const observer = new ResizeObserver(([entry]) => {
      if (entry !== undefined)
        setBox({ width: entry.contentRect.width, height: entry.contentRect.height })
    })
    observer.observe(el)
    return () => {
      observer.disconnect()
    }
  }, [ref])

  // Wheel pans; Ctrl or ⌘ + wheel zooms at the pointer. The listener must be non-passive to stop
  // the page from scrolling, which React's onWheel cannot do.
  useEffect(() => {
    const el = ref.current
    if (el === null) return undefined
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const rect = el.getBoundingClientRect()
      setView((v) =>
        e.ctrlKey || e.metaKey
          ? zoomAt(v, v.zoom * (e.deltaY < 0 ? 1.1 : 0.9), rect, {
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            })
          : { ...v, x: v.x - e.deltaX, y: v.y - e.deltaY },
      )
    }
    el.addEventListener("wheel", onWheel, { passive: false })
    return () => {
      el.removeEventListener("wheel", onWheel)
    }
  }, [ref])

  // Fit once, on mount, when asked. Measures the DOM, so it belongs in an effect.
  const [fitted, setFitted] = useState(false)
  useEffect(() => {
    if (!fitOnMount || fitted) return
    const rect = ref.current?.getBoundingClientRect()
    if (rect === undefined) return
    setFitted(true)
    setView((v) => fitView(content, rect, v))
  }, [ref, fitOnMount, fitted, content])

  // Full screen, through the Fullscreen API on the canvas element. The browser owns that state
  // (Escape leaves it too), so it is read back from `fullscreenchange` rather than assumed.
  // Entering or leaving resizes the canvas a moment after the event: the size the canvas had at
  // the change is remembered, and the content is framed again once the measured size differs.
  const [fullScreen, setFullScreen] = useState(false)
  const refitFrom = useRef<Size | null>(null)
  const setRefitFrom = (next: Size | null) => {
    // eslint-disable-next-line functional/immutable-data -- a React ref is the sanctioned mutable cell for the size at the last full-screen change
    refitFrom.current = next
  }
  useEffect(() => {
    const onChange = () => {
      setFullScreen(
        document.fullscreenElement !== null && document.fullscreenElement === ref.current,
      )
      setRefitFrom(box)
    }
    document.addEventListener("fullscreenchange", onChange)
    return () => {
      document.removeEventListener("fullscreenchange", onChange)
    }
  }, [ref, box])
  useEffect(() => {
    const from = refitFrom.current
    if (from === null || (box.width === from.width && box.height === from.height)) return
    setRefitFrom(null)
    setView((v) => fitView(content, box, v))
  }, [box, content])
  const toggleFullScreen = () => {
    const el = ref.current
    if (el === null) return
    if (document.fullscreenElement === el) {
      void document.exitFullscreen()
    } else {
      // Refused without a user gesture, or where the API is missing: the canvas stays as it is.
      void el.requestFullscreen().catch(() => undefined)
    }
  }

  return {
    view,
    setView,
    box,
    fullScreen,
    toggleFullScreen,
    local,
    toWorld: (clientX, clientY) => toWorld(view, local(clientX, clientY)),
    zoomIn: () => {
      setView(zoomAt(view, view.zoom * ZOOM_STEP, box))
    },
    zoomOut: () => {
      setView(zoomAt(view, view.zoom / ZOOM_STEP, box))
    },
    fit: (points) => {
      setView(fitView(points, box, view))
    },
    capture: (e) => {
      // Synthetic pointers (tests, assistive tech) have no active pointer id to capture.
      if (e.isPrimary) ref.current?.setPointerCapture(e.pointerId)
    },
    panStart: (e) => {
      setPan({
        start: { x: e.clientX, y: e.clientY },
        origin: { x: view.x, y: view.y },
        moved: false,
      })
    },
    panMove: (e) => {
      const pan = panRef.current
      if (pan === null) return false
      setView({
        ...view,
        x: pan.origin.x + e.clientX - pan.start.x,
        y: pan.origin.y + e.clientY - pan.start.y,
      })
      if (!pan.moved) setPan({ ...pan, moved: true })
      return true
    },
    panEnd: () => {
      const pan = panRef.current
      if (pan === null) return null
      setPan(null)
      return { moved: pan.moved }
    },
  }
}
