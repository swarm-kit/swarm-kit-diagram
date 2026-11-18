// A boundary on a diagram: a tinted, rounded region around nodes, labelled in its top-left
// corner with its name and what kind of boundary it is, like C4's "[Software System]". Drawn
// behind nodes and positioned by DiagramCanvas, which drives the header's pointer and keyboard
// handlers (the header is the drag handle) and the corner and edge resize handles.
import { cn } from "../../../cn"
import { m } from "../../../paraglide/messages"
import { getLocale } from "../../../paraglide/runtime"
import type { DiagramGroupData } from "../../../types/diagram"
import type { CSSProperties, KeyboardEvent, PointerEvent, Ref } from "react"

/** A resize handle: a corner or the middle of a side, by compass point. */
export type DiagramGroupHandle = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w"

const HANDLES: readonly DiagramGroupHandle[] = ["nw", "n", "ne", "e", "se", "s", "sw", "w"]

/** Nested boundaries deepen in steps; past the fourth level they stay at the last step. */
const DEPTH_STEPS = 4

export type DiagramGroupProps = Readonly<{
  group: DiagramGroupData
  /** How deeply nested it is, 0 for a top-level boundary; each level tints a little stronger. */
  depth?: number | undefined
  selected?: boolean | undefined
  /** Faded back, while something unrelated is hovered or selected. */
  dimmed?: boolean | undefined
  /** Emphasised, while something inside it is hovered or selected. */
  highlighted?: boolean | undefined
  /** BorderBeam's pulse breathes on its border: the boundary that was picked. */
  beam?: boolean | undefined
  /** `compact` shows only the name, for a zoomed-out canvas. Default `full`. */
  detail?: "full" | "compact" | undefined
  /** Merged over the position and size the group takes from its data. */
  style?: CSSProperties | undefined
  className?: string | undefined
  ref?: Ref<HTMLDivElement> | undefined
  /** On the header, the group's drag handle. */
  onPointerDown?: ((event: PointerEvent<HTMLDivElement>) => void) | undefined
  onKeyDown?: ((event: KeyboardEvent<HTMLDivElement>) => void) | undefined
  onFocus?: (() => void) | undefined
  /** A resize handle was pressed; handles show while the group is selected. */
  onResizePointerDown?:
    ((handle: DiagramGroupHandle, event: PointerEvent<HTMLSpanElement>) => void) | undefined
}>

/** "Internet Banking System, Software system boundary, selected", as one localised list. */
function accessibleName(group: DiagramGroupData, selected: boolean): string {
  const name =
    group.type === undefined
      ? m.ui_diagram_group_label({ label: group.label })
      : m.ui_diagram_group_label_typed({ label: group.label, type: group.type })
  const parts = selected ? [name, m.ui_diagram_group_selected()] : [name]
  return new Intl.ListFormat(getLocale(), { type: "unit", style: "short" }).format(parts)
}

/** A labelled boundary around nodes on a diagram, with resize handles while selected. */
export function DiagramGroup({
  group,
  depth = 0,
  selected = false,
  dimmed = false,
  highlighted = false,
  beam = false,
  detail = "full",
  style,
  className,
  ref,
  onPointerDown,
  onKeyDown,
  onFocus,
  onResizePointerDown,
}: DiagramGroupProps) {
  const step = Math.min(Math.max(0, Math.floor(depth)), DEPTH_STEPS - 1)
  return (
    <div
      ref={ref}
      className={cn(
        "sk-diagram-group",
        `sk-diagram-group--${group.tone ?? "neutral"}`,
        `sk-diagram-group--depth-${String(step)}`,
        group.line === "solid" && "sk-diagram-group--solid",
        selected && "is-selected",
        dimmed && "is-dimmed",
        highlighted && "is-highlighted",
        // BorderBeam's own layers, on the boundary's own box: its pulse, the whole border breathing
        beam && "sk-beam sk-beam--pulse is-active",
        className,
      )}
      data-slot="diagram-group"
      data-group={group.id}
      style={{ left: group.x, top: group.y, width: group.width, height: group.height, ...style }}
    >
      {/* The header is the drag handle and the keyboard target, as a node is on FlowCanvas:
          focusable inside the canvas's role="application", where arrow keys move it. */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- keyboard-operated boundary inside role="application" */}
      <div
        className="sk-diagram-group__header"
        data-slot="diagram-group-header"
        role="group"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- boundaries are reached with Tab and moved with the keyboard
        tabIndex={0}
        aria-label={accessibleName(group, selected)}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
      >
        <span className="sk-diagram-group__label" data-slot="diagram-group-label">
          {group.label}
        </span>
        {detail === "compact" || group.type === undefined ? null : (
          <span className="sk-diagram-group__type" data-slot="diagram-group-type">
            {group.type}
          </span>
        )}
      </div>
      {beam ? (
        <>
          <span className="sk-beam__glow" data-slot="diagram-group-beam" aria-hidden="true" />
          <span className="sk-beam__ring" aria-hidden="true" />
        </>
      ) : null}
      {selected
        ? HANDLES.map((handle) => (
            <span
              key={handle}
              className={`sk-diagram-group__handle sk-diagram-group__handle--${handle}`}
              data-slot="diagram-group-handle"
              data-handle={handle}
              aria-hidden="true"
              onPointerDown={(event) => onResizePointerDown?.(handle, event)}
            />
          ))
        : null}
    </div>
  )
}
