/**
 * Geometry shared by the build and every renderer, kept apart from the layout so the browser
 * runtime does not pull in ELK.
 */
import { DIAGRAM_KINDS, shapeAnchor, shapeOf } from "../ds.ts"
import type { DiagramNode } from "./types.ts"

type Box = Readonly<{ x: number; y: number; width: number; height: number }>

/**
 * Where a node's connections attach: its shape's own outline rather than its box, as the canvas
 * computes it (a cloud's bumps, a component's body beside its tabs). The same as the box for the
 * plain shapes.
 */
export const attachRect = (node: DiagramNode): Box => {
  const kind = DIAGRAM_KINDS[node.kind]
  const shape = shapeOf(kind)
  const size = { width: node.width, height: node.height }
  const top = shapeAnchor(shape, size, "top")
  const bottom = shapeAnchor(shape, size, "bottom")
  const left = shapeAnchor(shape, size, "left")
  const right = shapeAnchor(shape, size, "right")
  return {
    x: node.x + left.x,
    y: node.y + top.y,
    width: right.x - left.x,
    height: bottom.y - top.y,
  }
}

