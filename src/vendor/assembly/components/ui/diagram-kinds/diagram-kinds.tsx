// DiagramKinds: an optional, ready-made vocabulary for DiagramCanvas (C4, architecture building
// blocks, and UML), and DiagramKindsPreview, a read-only gallery of it. The kinds themselves live
// in ./kinds.ts; this file publishes them and the gallery.

import { kindsGallery } from "./gallery"
import { DIAGRAM_KIND_GROUPS, DIAGRAM_KINDS, type DiagramKindGroupKey } from "./kinds"
import { m } from "../../../paraglide/messages"
import { DiagramCanvas } from "../diagram-canvas/diagram-canvas"
import type { DiagramKinds } from "../../../types/diagram"

export {
  DIAGRAM_KINDS,
  DIAGRAM_KIND_GROUPS,
  DIAGRAM_KIND_GROUP_KEYS,
  type DiagramKindGroup,
  type DiagramKindGroupKey,
} from "./kinds"

export type DiagramKindsPreviewProps = Readonly<{
  /** The kinds to show; default the whole preset. Extend it to preview your own additions. */
  kinds?: DiagramKinds | undefined
  /** Which of the preset's groups to show, in order; default all of them. */
  groups?: readonly DiagramKindGroupKey[] | undefined
  /** Height of the canvas; default 720. */
  height?: number | string | undefined
  /** Accessible name of the canvas. */
  label?: string | undefined
  className?: string | undefined
}>

/**
 * A read-only DiagramCanvas showing every kind, one boundary per group, each node titled with its
 * kind's label: a reference for the preset, or for kinds that extend it.
 */
export function DiagramKindsPreview({
  kinds,
  groups,
  height = 720,
  label,
  className,
}: DiagramKindsPreviewProps) {
  const all = kinds ?? { ...DIAGRAM_KINDS }
  const shown = DIAGRAM_KIND_GROUPS.filter(
    (group) => groups === undefined || groups.includes(group.key),
  ).map((group) => ({ key: group.key, label: group.label, kinds: group.kinds }))
  return (
    <DiagramCanvas
      data={kindsGallery(all, shown)}
      kinds={all}
      readOnly
      fitOnMount
      height={height}
      label={label ?? m.ui_diagram_kind_preview_label()}
      className={className}
    />
  )
}
