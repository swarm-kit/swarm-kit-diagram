import { edgeMarker, lineDashes, markerInset } from "./edge-marker"
import { cn } from "../../../cn"
import type { DiagramEdgeData } from "../../../types/diagram"

export type DiagramLineSwatchProps = Readonly<
  Pick<DiagramEdgeData, "line" | "tone" | "start" | "end"> & {
    className?: string | undefined
  }
>

/**
 * A short sample of an edge's line, tone, and end markers, for a legend. Decorative: the text
 * beside it in the legend says what it means.
 */
export function DiagramLineSwatch({
  line = "solid",
  tone = "neutral",
  start = "none",
  end = "arrow",
  className,
}: DiagramLineSwatchProps) {
  return (
    <svg
      className={cn(
        "sk-diagram-edge",
        "sk-diagram-edge__swatch",
        `sk-diagram-edge--${tone}`,
        `sk-diagram-edge--${line}`,
        className,
      )}
      data-slot="diagram-line-swatch"
      viewBox="0 0 48 16"
      aria-hidden="true"
    >
      {/* stops at a hollow marker's base, as a full edge does */}
      <path
        className="sk-diagram-edge__line"
        d={`M${String(4 + markerInset(start))},8 L${String(44 - markerInset(end))},8`}
        strokeDasharray={lineDashes[line]}
      />
      {edgeMarker(start, { x: 4, y: 8 }, 180, "start")}
      {edgeMarker(end, { x: 44, y: 8 }, 0, "end")}
    </svg>
  )
}
