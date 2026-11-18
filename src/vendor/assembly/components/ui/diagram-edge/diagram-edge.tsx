import { edgeMarker, lineDashes, markerInset } from "./edge-marker"
import { pathBeam } from "./path-beam"
import { cn } from "../../../cn"
import { m } from "../../../paraglide/messages"
import { endLabelPositions, routeEdge, type Rect } from "../../../utils/graph/diagram-routing"
import type { DiagramEdgeData } from "../../../types/diagram"
import type { KeyboardEvent } from "react"

// DiagramEdge: one relationship on a DiagramCanvas, drawn as SVG inside the canvas's shared
// <svg> layer. Routing is in utils/graph/diagram-routing.ts; this draws the line, its end
// markers, the label pill, the animated flow, and the hit target when it's interactive.

export type DiagramEdgeProps = Readonly<{
  edge: DiagramEdgeData
  /** The two nodes' boxes, in canvas units. */
  from: Rect
  to: Rect
  /** The two nodes' names, for an interactive edge's accessible name. */
  fromLabel?: string | undefined
  toLabel?: string | undefined
  /**
   * Moves each end along its side, so edges sharing a side spread out. The edge's own
   * `fromOffset` and `toOffset`, when it has them, take precedence.
   */
  fromOffset?: number | undefined
  toOffset?: number | undefined
  selected?: boolean | undefined
  /** Connected to the node being hovered or selected: drawn stronger. */
  highlighted?: boolean | undefined
  /** Not connected to it: faded back. */
  dimmed?: boolean | undefined
  /** Data flows along it: a beam travels the line from its start to its end. */
  beam?: boolean | undefined
  /** `compact` hides the technology line and the end labels, for a zoomed-out view. Default `full`. */
  detail?: "full" | "compact" | undefined
  /** Clickable and focusable, through a wide invisible hit path. */
  interactive?: boolean | undefined
  onSelect?: ((id: string) => void) | undefined
  className?: string | undefined
}>

/** The end labels read aloud: "1 to 0..*", or the one that's there. */
function endsText(edge: DiagramEdgeData): string | undefined {
  const { startLabel, endLabel } = edge
  if (startLabel !== undefined && endLabel !== undefined)
    return m.ui_diagram_edge_end_labels({ start: startLabel, end: endLabel })
  if (startLabel !== undefined) return m.ui_diagram_edge_start_label({ label: startLabel })
  if (endLabel !== undefined) return m.ui_diagram_edge_end_label({ label: endLabel })
  return undefined
}

/** "Web app to API: Makes API calls, JSON/HTTPS, 1 to 0..*", for a screen reader. */
function accessibleName(
  edge: DiagramEdgeData,
  fromLabel: string | undefined,
  toLabel: string | undefined,
): string {
  const between =
    fromLabel === undefined || toLabel === undefined
      ? m.ui_diagram_edge_unnamed()
      : m.ui_diagram_edge_between({ from: fromLabel, to: toLabel })
  const labelled =
    edge.label !== undefined && edge.technology !== undefined
      ? m.ui_diagram_edge_label_technology({ label: edge.label, technology: edge.technology })
      : (edge.label ?? edge.technology)
  const ends = endsText(edge)
  const description =
    labelled !== undefined && ends !== undefined
      ? m.ui_diagram_edge_and({ first: labelled, second: ends })
      : (labelled ?? ends)
  return description === undefined ? between : m.ui_diagram_edge_described({ between, description })
}

/** One relationship between two nodes: a routed line, its end markers, and a label. */
export function DiagramEdge({
  edge,
  from,
  to,
  fromLabel,
  toLabel,
  fromOffset,
  toOffset,
  selected = false,
  highlighted = false,
  dimmed = false,
  beam = false,
  detail = "full",
  interactive = false,
  onSelect,
  className,
}: DiagramEdgeProps) {
  const startEnd = edge.start ?? "none"
  const endEnd = edge.end ?? "arrow"
  // the line stops at a hollow marker's base, so nothing shows through it
  const insets = { startInset: markerInset(startEnd), endInset: markerInset(endEnd) }
  const route = routeEdge(from, to, {
    route: edge.route,
    fromSide: edge.fromSide,
    toSide: edge.toSide,
    fromOffset: edge.fromOffset ?? fromOffset,
    toOffset: edge.toOffset ?? toOffset,
    points: edge.points,
    labelAt: edge.labelAt,
    ...insets,
  })
  const hasEndLabels =
    detail === "full" && (edge.startLabel !== undefined || edge.endLabel !== undefined)
  const endLabels = hasEndLabels ? endLabelPositions(route, insets) : undefined
  const line = edge.line ?? "solid"
  const hasLabel = edge.label !== undefined || edge.technology !== undefined
  const select = () => {
    onSelect?.(edge.id)
  }

  return (
    <g
      className={cn(
        "sk-diagram-edge",
        `sk-diagram-edge--${edge.tone ?? "neutral"}`,
        `sk-diagram-edge--${line}`,
        selected && "is-selected",
        highlighted && "is-highlighted",
        dimmed && "is-dimmed",
        interactive && "is-interactive",
        className,
      )}
      data-slot="diagram-edge"
      data-edge={edge.id}
    >
      <path
        className="sk-diagram-edge__line"
        data-slot="diagram-edge-line"
        d={route.path}
        strokeDasharray={lineDashes[line]}
        aria-hidden="true"
      />
      {edge.animated === true ? (
        <path
          className="sk-diagram-edge__flow"
          data-slot="diagram-edge-flow"
          d={route.path}
          aria-hidden="true"
        />
      ) : null}
      {beam ? pathBeam(route.path) : null}
      {/* an arrowhead at the start too means data flows both ways: a second beam runs back */}
      {beam && (startEnd === "arrow" || startEnd === "open")
        ? pathBeam(route.path, "travel", "back")
        : null}
      <g aria-hidden="true">
        {edgeMarker(startEnd, route.start, route.startAngle, "start")}
        {edgeMarker(endEnd, route.end, route.endAngle, "end")}
      </g>
      {endLabels === undefined ? null : (
        // read through the edge's accessible name, so the drawn text is decorative
        <g aria-hidden="true">
          {edge.startLabel === undefined ? null : (
            <text
              className="sk-diagram-edge__end-label"
              data-slot="diagram-edge-end-label"
              data-position="start"
              x={endLabels.start.x}
              y={endLabels.start.y}
              textAnchor={endLabels.start.anchor}
            >
              {edge.startLabel}
            </text>
          )}
          {edge.endLabel === undefined ? null : (
            <text
              className="sk-diagram-edge__end-label"
              data-slot="diagram-edge-end-label"
              data-position="end"
              x={endLabels.end.x}
              y={endLabels.end.y}
              textAnchor={endLabels.end.anchor}
            >
              {edge.endLabel}
            </text>
          )}
        </g>
      )}
      {interactive ? (
        <path
          className="sk-diagram-edge__hit"
          data-slot="diagram-edge-hit"
          d={route.path}
          role="button"
          tabIndex={0}
          aria-label={accessibleName(edge, fromLabel, toLabel)}
          aria-pressed={selected}
          onClick={select}
          onKeyDown={(event: KeyboardEvent<SVGPathElement>) => {
            if (event.key !== "Enter" && event.key !== " ") return
            event.preventDefault()
            select()
          }}
        />
      ) : null}
      {hasLabel ? (
        // HTML inside a foreignObject: the pill sizes to its text and wraps, and the text renders
        // with the page's font hinting, crisper than SVG <text> at small sizes.
        <foreignObject
          className="sk-diagram-edge__label-box"
          x={route.mid.x - 110}
          y={route.mid.y - 32}
          width={220}
          height={64}
        >
          <div className="sk-diagram-edge__label-wrap">
            <div className="sk-diagram-edge__label" data-slot="diagram-edge-label">
              {edge.label === undefined ? null : (
                <span className="sk-diagram-edge__text">{edge.label}</span>
              )}
              {edge.technology === undefined || detail === "compact" ? null : (
                <span className="sk-diagram-edge__tech" data-slot="diagram-edge-technology">
                  [{edge.technology}]
                </span>
              )}
            </div>
          </div>
        </foreignObject>
      ) : null}
    </g>
  )
}
