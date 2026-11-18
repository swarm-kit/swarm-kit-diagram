import { cn } from "../../../cn"
import { m } from "../../../paraglide/messages"
import { legendEntries, type DiagramEdgeStyle } from "../../../utils/graph/diagram-legend"
import { shapeOf } from "../../../utils/graph/diagram-node-size"
import { DiagramLineSwatch } from "../diagram-edge/diagram-line-swatch"
import { DiagramShapeSwatch } from "../diagram-node/diagram-shape-swatch"
import type {
  DiagramEdgeData,
  DiagramEnd,
  DiagramKinds,
  DiagramNodeData,
} from "../../../types/diagram"
import type { Ref } from "react"

// DiagramLegend: the key to a diagram, built from what it uses. Each kind of node present, drawn
// as its shape, and each distinct relationship style, drawn as its line, so a reader learns once
// what a cylinder or a dashed line means. Standalone, or as DiagramCanvas's `legend` overlay.

export type DiagramLegendProps = Readonly<{
  kinds: DiagramKinds
  /** The diagram's nodes: only their kinds are listed. Every kind in `kinds` when left out. */
  nodes?: readonly Pick<DiagramNodeData, "kind">[] | undefined
  /** The diagram's edges: each distinct style is listed once. */
  edges?: readonly Pick<DiagramEdgeData, "line" | "tone" | "start" | "end">[] | undefined
  /**
   * What each relationship style means, keyed by `edgeStyleKey` from utils/graph/diagram-legend,
   * such as `{ "dashed/neutral/none/arrow": "Asynchronous" }`. A style without one is described
   * by its line.
   */
  lineLabels?: Readonly<Record<string, string>> | undefined
  /** Defaults to "Key". */
  title?: string | undefined
  className?: string | undefined
  ref?: Ref<HTMLElement> | undefined
}>

const END_NAMES: Readonly<Record<Exclude<DiagramEnd, "none">, () => string>> = {
  arrow: m.ui_diagram_legend_end_arrow,
  open: m.ui_diagram_legend_end_open,
  dot: m.ui_diagram_legend_end_dot,
  diamond: m.ui_diagram_legend_end_diamond,
  "diamond-open": m.ui_diagram_legend_end_diamond_open,
  triangle: m.ui_diagram_legend_end_triangle,
}

const pointsLikeArrow = (end: DiagramEnd): boolean => end === "arrow" || end === "open"

/**
 * An unnamed style, described by its line and ends. A plain arrow at the end is the unmarked
 * default; arrows at both ends read "both ways"; anything else (a UML triangle or diamond, a dot)
 * is named with where it sits, so a composition doesn't read as a plain solid line.
 */
const lineName = (style: DiagramEdgeStyle): string => {
  const line =
    style.line === "dashed"
      ? m.ui_diagram_legend_line_dashed()
      : style.line === "dotted"
        ? m.ui_diagram_legend_line_dotted()
        : m.ui_diagram_legend_line_solid()
  if (pointsLikeArrow(style.start) && pointsLikeArrow(style.end)) {
    return m.ui_diagram_legend_two_way({ line })
  }
  const start = style.start === "none" ? undefined : END_NAMES[style.start]()
  const end = style.end === "none" || style.end === "arrow" ? undefined : END_NAMES[style.end]()
  if (start !== undefined && end !== undefined) {
    return m.ui_diagram_legend_ends_both({ line, start, end })
  }
  if (start !== undefined) return m.ui_diagram_legend_end_at_start({ line, end: start })
  if (end !== undefined) return m.ui_diagram_legend_end_at_end({ line, end })
  return line
}

/** The key to a diagram: the kinds of element and the relationship styles it uses. */
export function DiagramLegend({
  kinds,
  nodes,
  edges = [],
  lineLabels = {},
  title,
  className,
  ref,
}: DiagramLegendProps) {
  const entries = legendEntries(kinds, nodes, edges)
  const heading = title ?? m.ui_diagram_legend_title()
  return (
    <section
      ref={ref}
      className={cn("sk-diagram-legend", className)}
      data-slot="diagram-legend"
      aria-label={heading}
    >
      <p className="sk-diagram-legend__title" data-slot="diagram-legend-title">
        {heading}
      </p>
      {entries.kinds.length === 0 ? null : (
        <ul
          className="sk-diagram-legend__list"
          data-slot="diagram-legend-kinds"
          aria-label={m.ui_diagram_legend_elements()}
        >
          {entries.kinds.map(({ key, kind }) => (
            <li key={key} className="sk-diagram-legend__item" data-slot="diagram-legend-item">
              <span className="sk-diagram-legend__swatch">
                <DiagramShapeSwatch
                  shape={shapeOf(kind)}
                  tone={kind.tone}
                  external={kind.external}
                  size={18}
                />
              </span>
              <span className="sk-diagram-legend__label">{kind.label}</span>
            </li>
          ))}
        </ul>
      )}
      {entries.styles.length === 0 ? null : (
        <ul
          className="sk-diagram-legend__list"
          data-slot="diagram-legend-styles"
          aria-label={m.ui_diagram_legend_relationships()}
        >
          {entries.styles.map(({ key, style }) => (
            <li key={key} className="sk-diagram-legend__item" data-slot="diagram-legend-item">
              <span className="sk-diagram-legend__swatch">
                <DiagramLineSwatch {...style} />
              </span>
              <span className="sk-diagram-legend__label">{lineLabels[key] ?? lineName(style)}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
