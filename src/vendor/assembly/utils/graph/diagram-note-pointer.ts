// Where a DiagramNote's pointer line runs: from the note's border to its target's border, along
// the line between their centres, so the pointer never crosses either box. Pure geometry for
// DiagramCanvas, which draws the line; canvas units throughout.

import type { Point } from "../../types/graph"

export type Rect = Readonly<{ x: number; y: number; width: number; height: number }>

const centreOf = (rect: Rect): Point => ({
  x: rect.x + rect.width / 2,
  y: rect.y + rect.height / 2,
})

/** Where a ray from the rect's centre toward `towards` leaves the rect. */
function exitPoint(rect: Rect, towards: Point): Point {
  const centre = centreOf(rect)
  const dx = towards.x - centre.x
  const dy = towards.y - centre.y
  if (dx === 0 && dy === 0) return centre
  // the ray leaves through whichever side it reaches first
  const tx = dx === 0 ? Number.POSITIVE_INFINITY : rect.width / 2 / Math.abs(dx)
  const ty = dy === 0 ? Number.POSITIVE_INFINITY : rect.height / 2 / Math.abs(dy)
  const t = Math.min(tx, ty)
  return { x: centre.x + dx * t, y: centre.y + dy * t }
}

/**
 * The pointer from a note to its target: `from` on the note's border, `to` on the target's, both
 * on the line between their centres. When one box contains the other's centre the points meet.
 */
export function notePointer(note: Rect, target: Rect): Readonly<{ from: Point; to: Point }> {
  return {
    from: exitPoint(note, centreOf(target)),
    to: exitPoint(target, centreOf(note)),
  }
}
