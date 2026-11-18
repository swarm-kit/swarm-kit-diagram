import { m } from "../../../paraglide/messages"
import { formatPercent } from "../../../utils/format/percent"
import { Button } from "../button/button"

// The canvas's zoom and layout controls.
// eslint-disable-next-line functional/no-mixed-types -- React props carry callbacks alongside data
export type CanvasToolbarProps = Readonly<{
  zoom: number
  onZoomIn: () => void
  onZoomOut: () => void
  onFit: () => void
  onUndo?: () => void
  onRedo?: () => void
  /** Shows "Tidy up". Pair with autoLayout(). */
  onTidy?: () => void
  /** Shows the full-screen button; `fullScreen` says whether the canvas is full screen now. */
  onFullScreen?: () => void
  fullScreen?: boolean
  /** Shows the data-flow toggle; `flow` says whether every relationship's flow is running. */
  onFlow?: () => void
  flow?: boolean
}>

/** Tidy up, undo and redo, zoom out, the zoom level, zoom in, fit to screen, and full screen. */
export function CanvasToolbar({
  zoom,
  onZoomIn,
  onZoomOut,
  onFit,
  onUndo,
  onRedo,
  onTidy,
  onFullScreen,
  fullScreen = false,
  onFlow,
  flow = false,
}: CanvasToolbarProps) {
  return (
    <div
      className="sk-ctool"
      data-slot="canvas-toolbar"
      role="toolbar"
      aria-label={m.ui_canvas_toolbar_label()}
    >
      {onTidy === undefined ? null : (
        <>
          <Button variant="quiet" size="sm" icon="layout-list" onClick={onTidy}>
            {m.ui_canvas_toolbar_tidy()}
          </Button>
          <span className="sk-ctool__sep" />
        </>
      )}
      {onUndo === undefined ? null : (
        <Button
          variant="quiet"
          size="sm"
          icon="undo"
          aria-label={m.ui_canvas_toolbar_undo()}
          onClick={onUndo}
        />
      )}
      {onRedo === undefined ? null : (
        <Button
          variant="quiet"
          size="sm"
          icon="redo"
          aria-label={m.ui_canvas_toolbar_redo()}
          onClick={onRedo}
        />
      )}
      {onUndo === undefined && onRedo === undefined ? null : <span className="sk-ctool__sep" />}
      <Button
        variant="quiet"
        size="sm"
        icon="minus"
        aria-label={m.ui_canvas_toolbar_zoom_out()}
        onClick={onZoomOut}
      />
      <span className="sk-ctool__zoom" aria-live="polite">
        {formatPercent(zoom)}
      </span>
      <Button
        variant="quiet"
        size="sm"
        icon="plus"
        aria-label={m.ui_canvas_toolbar_zoom_in()}
        onClick={onZoomIn}
      />
      <span className="sk-ctool__sep" />
      {onFlow === undefined ? null : (
        <Button
          variant="quiet"
          size="sm"
          icon="activity"
          aria-label={flow ? m.ui_canvas_toolbar_flow_off() : m.ui_canvas_toolbar_flow()}
          aria-pressed={flow}
          onClick={onFlow}
        />
      )}
      <Button
        variant="quiet"
        size="sm"
        icon="target"
        aria-label={m.ui_canvas_toolbar_fit()}
        onClick={onFit}
      />
      {onFullScreen === undefined ? null : (
        <Button
          variant="quiet"
          size="sm"
          icon={fullScreen ? "minimize" : "maximize"}
          aria-label={
            fullScreen ? m.ui_canvas_toolbar_exit_full_screen() : m.ui_canvas_toolbar_full_screen()
          }
          aria-pressed={fullScreen}
          onClick={onFullScreen}
        />
      )}
    </div>
  )
}
