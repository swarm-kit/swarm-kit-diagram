/**
 * The size of a relationship's label pill, as the design system draws it: the description in
 * 12px text on 16px lines, the technology under it in 10px monospace on a 14px line, 3×10 padding
 * and a 1px border, wrapping at 200px (`.sk-diagram-edge__label` in the design system's CSS).
 *
 * A build step has no text metrics, so the width is estimated per character, with averages
 * measured against the rendered pills. The layout reserves this box on the line, so it has to be
 * no smaller than what is drawn; a little larger only costs space.
 */
export type Size = Readonly<{ width: number; height: number }>

/** The pill's widest, before its text wraps. */
const MAX_WIDTH = 200
/** Padding and border, both sides. */
const CHROME = 22
/**
 * Average advance of the 12px sans text and the 10px monospace technology, in canvas units,
 * measured on rendered pills (5.7–6.0 for a phrase, more for a short word in capitals), with
 * slack so the reserved box is never smaller than the pill.
 */
const TEXT_CHAR = 6
const MONO_CHAR = 6.2
const SLACK = 6
const TEXT_LINE = 16
const MONO_LINE = 14
/** Padding and border, top and bottom. */
const CHROME_Y = 8

/** The pill for a label and its technology; nothing when the relationship shows neither. */
export const labelSize = (label: string | undefined, technology: string | undefined): Size => {
  const text = label?.trim() ?? ""
  const tech = technology === undefined ? "" : `[${technology}]`
  if (text === "" && tech === "") return { width: 0, height: 0 }

  const inner = MAX_WIDTH - CHROME
  const textWidth = text.length * TEXT_CHAR
  const lines = text === "" ? 0 : Math.max(1, Math.ceil(textWidth / inner))
  const techWidth = tech.length * MONO_CHAR
  const width = Math.min(
    MAX_WIDTH,
    Math.max(lines > 1 ? inner : textWidth, techWidth) + CHROME + SLACK,
  )
  const height = lines * TEXT_LINE + (tech === "" ? 0 : MONO_LINE) + CHROME_Y
  return { width: Math.ceil(width), height }
}

/** The pill's box, centred where the canvas puts it. */
export const labelBox = (
  centre: Readonly<{ x: number; y: number }>,
  size: Size,
): Readonly<{ x: number; y: number; width: number; height: number }> => ({
  x: centre.x - size.width / 2,
  y: centre.y - size.height / 2,
  width: size.width,
  height: size.height,
})

/**
 * The header chip of a boundary, where its name and type sit: 10 units in from the top-left
 * corner, its name in 13px semibold on an 18px line over its type on a 14px line, with 5/6
 * vertical and 10 horizontal padding and a 1px border (`.sk-diagram-group__header`).
 */
export const headerSize = (label: string, type: string | undefined): Size => ({
  width: Math.ceil(Math.min(400, Math.max(label.length * 7.2, (type?.length ?? 0) * 6) + CHROME)),
  height: 18 + (type === undefined ? 0 : 14) + 14,
})

export const HEADER_INSET = 10
