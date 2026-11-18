// A note on a diagram: a short piece of explanation on a soft paper surface with a folded
// corner, so it reads as commentary and never as another node. Positioned by DiagramCanvas,
// which drives its pointer and keyboard handlers and draws the pointer line to `target`
// (see utils/graph/diagram-note-pointer.ts).
import { cn } from "../../../cn"
import { m } from "../../../paraglide/messages"
import type { DiagramNoteData } from "../../../types/diagram"
import type { CSSProperties, KeyboardEvent, PointerEvent, Ref } from "react"

/** A note's width when its data doesn't set one, in canvas units. */
export const DIAGRAM_NOTE_WIDTH = 224

export type DiagramNoteProps = Readonly<{
  note: DiagramNoteData
  selected?: boolean | undefined
  /** Faded back, while something unrelated is hovered or selected. */
  dimmed?: boolean | undefined
  /** Merged over the position and width the note takes from its data. */
  style?: CSSProperties | undefined
  className?: string | undefined
  ref?: Ref<HTMLDivElement> | undefined
  onPointerDown?: ((event: PointerEvent<HTMLDivElement>) => void) | undefined
  onKeyDown?: ((event: KeyboardEvent<HTMLDivElement>) => void) | undefined
  onFocus?: (() => void) | undefined
}>

/** A sticky note of explanation on a diagram. */
export function DiagramNote({
  note,
  selected = false,
  dimmed = false,
  style,
  className,
  ref,
  onPointerDown,
  onKeyDown,
  onFocus,
}: DiagramNoteProps) {
  return (
    // role="note" says what it is; its text is its content, read after the name. Focusable
    // inside the canvas's role="application", where arrow keys move it.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- keyboard-operated note inside role="application"
    <div
      ref={ref}
      className={cn("sk-diagram-note", selected && "is-selected", dimmed && "is-dimmed", className)}
      data-slot="diagram-note"
      data-note={note.id}
      role="note"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- notes are reached with Tab and moved with the keyboard
      tabIndex={0}
      aria-label={selected ? m.ui_diagram_note_selected() : m.ui_diagram_note_label()}
      style={{ left: note.x, top: note.y, width: note.width ?? DIAGRAM_NOTE_WIDTH, ...style }}
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
    >
      <p className="sk-diagram-note__text" data-slot="diagram-note-text">
        {note.text}
      </p>
    </div>
  )
}
