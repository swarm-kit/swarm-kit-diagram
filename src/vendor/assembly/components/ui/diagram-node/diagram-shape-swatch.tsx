import { cn } from "../../../cn"
import { shapePaths } from "../../../utils/graph/diagram-node-size"
import type { DiagramShape, DiagramTone } from "../../../types/diagram"

export type DiagramShapeSwatchProps = Readonly<{
  shape: DiagramShape
  tone?: DiagramTone | undefined
  external?: boolean | undefined
  /** Height in pixels; the width follows the shape's proportions. Default 20. */
  size?: number | undefined
  className?: string | undefined
}>

// small outlines read best a little wider than tall, and wider still for the elongated shapes
const ASPECT: Readonly<Record<DiagramShape, number>> = {
  box: 1.4,
  stack: 1.4,
  cylinder: 1.1,
  queue: 1.8,
  hexagon: 1.6,
  document: 1.2,
  pill: 1.8,
  person: 1,
  browser: 1.4,
  mobile: 0.62,
  component: 1.4,
  cloud: 1.5,
  people: 1.3,
  bot: 1.1,
  shield: 0.9,
  diamond: 1.3,
  circle: 1,
  bucket: 1.1,
  folder: 1.35,
  timer: 1.9,
  function: 1.6,
  // UML
  class: 1.2,
  object: 1.4,
  actor: 0.7,
  usecase: 1.8,
  state: 1.5,
  initial: 1,
  final: 1,
  bar: 2.4,
  cube: 1.4,
  package: 1.4,
}

/**
 * A small, static drawing of a node shape in a tone, for a legend or a palette. Decorative: the
 * label beside it names what it stands for.
 */
export function DiagramShapeSwatch({
  shape,
  tone,
  external = false,
  size = 20,
  className,
}: DiagramShapeSwatchProps) {
  const box = { width: Math.round(size * ASPECT[shape]), height: size }
  const paths = shapePaths(shape, box)
  return (
    <svg
      className={cn(
        "sk-diagram-node-swatch",
        `sk-diagram-node-swatch--${shape}`,
        tone === undefined || tone === "neutral" ? undefined : `sk-diagram-node--${tone}`,
        external && "is-external",
        className,
      )}
      data-slot="diagram-shape-swatch"
      width={box.width}
      height={box.height}
      viewBox={`0 0 ${String(box.width)} ${String(box.height)}`}
      aria-hidden="true"
    >
      {paths.back.map((d) => (
        <path key={d} className="sk-diagram-node__back" d={d} />
      ))}
      {paths.body.map((d) => (
        <path key={d} className="sk-diagram-node__body" d={d} />
      ))}
      {paths.detail.map((d) => (
        <path key={d} className="sk-diagram-node__detail" d={d} />
      ))}
      {(paths.marks ?? []).map((d) => (
        <path key={d} className="sk-diagram-node__mark" d={d} />
      ))}
    </svg>
  )
}
