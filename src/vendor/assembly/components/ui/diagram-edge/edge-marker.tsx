// The end markers DiagramEdge and DiagramLineSwatch share. Internal: no capitalised export, so
// generate-index keeps it out of the public API.
//
// Each marker is drawn pointing along +x with its tip at the origin, then placed and rotated, so
// it takes the edge's tone through `currentColor` and needs no <marker> ids that could collide
// between diagrams on one page.
//
// The hollow UML ends (`triangle`, `diamond-open`) have no fill: the line stops at their base
// instead (`markerInset`), so nothing shows through them on any background, tinted group or not.

import type { DiagramEnd } from "../../../types/diagram"

type Point = Readonly<{ x: number; y: number }>

/** The dash pattern for each line style, in canvas units; solid has none. */
export const lineDashes = { solid: undefined, dashed: "6 5", dotted: "0.5 5" } as const

const SHAPES: Readonly<Record<Exclude<DiagramEnd, "none">, string>> = {
  arrow: "M0,0 L-10,-4.5 L-10,4.5 Z",
  open: "M-9,-5 L0,0 L-9,5",
  dot: "M-7,0 a3.5,3.5 0 1,0 7,0 a3.5,3.5 0 1,0 -7,0",
  // UML composition, filled; aggregation is the same diamond, hollow
  diamond: "M0,0 L-7,-4.5 L-14,0 L-7,4.5 Z",
  "diamond-open": "M0,0 L-7,-4.5 L-14,0 L-7,4.5 Z",
  // UML generalisation and realisation: larger than an arrow, so it reads as a different mark
  triangle: "M0,0 L-13,-7.5 L-13,7.5 Z",
}

// How far back from the tip the line stops, so it meets the marker's base rather than running
// through it; 0 for the ends drawn over the line or open to it.
const INSETS: Readonly<Record<DiagramEnd, number>> = {
  none: 0,
  arrow: 0,
  open: 0,
  dot: 0,
  diamond: 14,
  "diamond-open": 14,
  triangle: 13,
}

/** How far the line should stop short of an end, in canvas units. */
export function markerInset(end: DiagramEnd): number {
  return INSETS[end]
}

/** One end marker at `at`, rotated to `angle` degrees; nothing for `none`. */
export function edgeMarker(end: DiagramEnd, at: Point, angle: number, position: "start" | "end") {
  if (end === "none") return null
  return (
    <path
      className={`sk-diagram-edge__marker sk-diagram-edge__marker--${end}`}
      data-slot="diagram-edge-marker"
      data-end={end}
      data-position={position}
      d={SHAPES[end]}
      transform={`translate(${String(at.x)} ${String(at.y)}) rotate(${String(angle)})`}
    />
  )
}
