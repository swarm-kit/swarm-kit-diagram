// Geometry for diagram nodes: each shape's default size, its outline as SVG paths, the inset that
// keeps text clear of the outline, and where a connection meets each side. Pure functions in
// canvas units, shared by DiagramNode (drawing), DiagramCanvas (layout), and edge routing.

import type {
  DiagramNodeData,
  DiagramNodeKind,
  DiagramShape,
  DiagramSide,
} from "../../types/diagram"
import type { Point, Size } from "../../types/graph"

const UNIT = 16
const roundUp = (value: number): number => Math.ceil(value / UNIT) * UNIT

// Content heights, matching the node's type scale in components.css.
const PADDING = 24
const HEADER = 20
const TITLE = 22
const TECHNOLOGY = 18
const DESCRIPTION = 58

/** How much room each shape's outline takes from its box, beyond the plain card. */
const EXTRA: Readonly<Record<DiagramShape, Size>> = {
  box: { width: 0, height: 0 },
  stack: { width: 16, height: 16 },
  cylinder: { width: 0, height: 32 },
  queue: { width: 48, height: 0 },
  hexagon: { width: 64, height: 0 },
  document: { width: 16, height: 16 },
  pill: { width: 48, height: 0 },
  person: { width: 0, height: 48 },
  browser: { width: 0, height: 32 },
  mobile: { width: 0, height: 48 },
  component: { width: 16, height: 0 },
  cloud: { width: 64, height: 48 },
  people: { width: 32, height: 48 },
  bot: { width: 16, height: 48 },
  shield: { width: 0, height: 48 },
  // diamond and circle size from their content instead: see proportionalSize
  diamond: { width: 0, height: 0 },
  circle: { width: 0, height: 0 },
  bucket: { width: 32, height: 32 },
  folder: { width: 0, height: 16 },
  timer: { width: 64, height: 0 },
  function: { width: 32, height: 0 },
  // UML
  class: { width: 0, height: 0 },
  object: { width: 0, height: 0 },
  actor: { width: 0, height: 0 },
  usecase: { width: 0, height: 0 },
  state: { width: 0, height: 0 },
  initial: { width: 0, height: 0 },
  final: { width: 0, height: 0 },
  bar: { width: 0, height: 0 },
  cube: { width: 16, height: 16 },
  package: { width: 0, height: 0 },
}

const BASE_WIDTH: Readonly<Record<DiagramShape, number>> = {
  box: 256,
  stack: 256,
  cylinder: 224,
  queue: 256,
  hexagon: 256,
  document: 240,
  pill: 240,
  person: 208,
  browser: 256,
  mobile: 192,
  component: 256,
  cloud: 256,
  people: 208,
  bot: 224,
  shield: 224,
  diamond: 288,
  circle: 176,
  bucket: 224,
  folder: 256,
  timer: 240,
  function: 240,
  // UML
  class: 256,
  object: 224,
  actor: 128,
  usecase: 224,
  state: 224,
  initial: 32,
  final: 32,
  bar: 128,
  cube: 256,
  package: 256,
}

/** The shape a node is drawn with: its kind's, or a box. */
export const shapeOf = (kind: DiagramNodeKind | undefined): DiagramShape => kind?.shape ?? "box"

// UML text metrics, matching the "Diagram: UML" block in components.css
const STEREOTYPE = 16
const LINE = 17
const HEAD = 16 + 20
const SECTION_PAD = 12
const SECTION_TITLE = 16
/** A cube's depth, and a package's tab height, in canvas units. */
export const CUBE_DEPTH = 16
export const PACKAGE_TAB = 28

type Sections = DiagramNodeData["sections"]

/** The height of a class's compartments: each a rule, padding, an optional heading, and lines. */
const compartmentsHeight = (sections: Sections): number =>
  (sections ?? []).reduce(
    (sum, section) =>
      sum +
      1 +
      SECTION_PAD +
      (section.title === undefined ? 0 : SECTION_TITLE) +
      LINE * Math.max(1, section.items.length),
    0,
  )

/** Every line a package lists, across its sections. */
const lineCount = (sections: Sections): number =>
  (sections ?? []).reduce((sum, section) => sum + section.items.length, 0)

type SizeInput = Pick<
  DiagramNodeData,
  "width" | "height" | "technology" | "description" | "stereotype" | "sections"
>

/** The size a shape wants for this node's content, before rounding to the grid. */
function naturalSize(shape: DiagramShape, node: SizeInput): Size {
  const stereotype = node.stereotype === undefined ? 0 : STEREOTYPE
  const text =
    TITLE +
    stereotype +
    (node.technology === undefined ? 0 : TECHNOLOGY) +
    (node.description === undefined ? 0 : DESCRIPTION)
  const width = BASE_WIDTH[shape] + EXTRA[shape].width
  switch (shape) {
    case "class":
    case "object":
    case "state":
      return { width, height: HEAD + stereotype + compartmentsHeight(node.sections) }
    case "actor":
      return { width, height: 144 }
    case "usecase":
      return { width, height: 96 + stereotype }
    case "initial":
    case "final":
      return { width, height: 32 }
    case "bar":
      return { width, height: 16 }
    case "cube":
      return { width, height: PADDING + text + EXTRA.cube.height }
    case "package":
      return {
        width,
        height: PACKAGE_TAB + Math.max(48, 20 + stereotype + LINE * lineCount(node.sections)),
      }
    default:
      // diamond and circle grow with their text, which sits in the box inscribed in the outline
      return (
        proportionalSize(shape, HEADER + text) ?? {
          width,
          height: PADDING + HEADER + text + EXTRA[shape].height,
        }
      )
  }
}

/**
 * A node's size in canvas units, multiples of 16: its own `width` and `height` when set, or the
 * shape's default, tall enough for the lines the node has (technology, description, a class's
 * compartments).
 */
export function diagramNodeSize(node: SizeInput, kind: DiagramNodeKind | undefined): Size {
  const natural = naturalSize(shapeOf(kind), node)
  return {
    width: node.width ?? roundUp(natural.width),
    height: node.height ?? roundUp(natural.height),
  }
}

/**
 * Shapes whose text sits in a fraction of the outline grow with their content: a diamond's
 * text box is the rectangle inscribed in it, half its width and height; a circle's is the square
 * inscribed in it, about 0.7 of its diameter.
 */
function proportionalSize(shape: DiagramShape, lines: number): Size | undefined {
  switch (shape) {
    case "diamond":
      return { width: roundUp(BASE_WIDTH.diamond), height: roundUp(lines * 2 + 24) }
    case "circle": {
      const diameter = roundUp(Math.max(BASE_WIDTH.circle, lines / 0.66 + 16))
      return { width: diameter, height: diameter }
    }
    default:
      return undefined
  }
}

/** Padding that keeps a shape's text clear of its outline: top, right, bottom, left. */
export type Insets = Readonly<{ top: number; right: number; bottom: number; left: number }>

// the proportions each outline is drawn with, so the inset and the path agree
const capOf = (size: Size) => Math.min(14, size.height * 0.12)
const endOf = (size: Size) => Math.min(14, size.width * 0.08)
const pointOf = (size: Size) => Math.min(size.height * 0.3, size.width * 0.2)
const headOf = (size: Size) => Math.min(size.height * 0.19, 26)
// the head rests on the shoulders: the body starts before the head's lowest point
const bodyTopOf = (size: Size) => headOf(size) * 1.6 + 1
const FOLD = 16
const OFFSET = 8
// the architecture shapes' proportions, capped so a full-size node keeps a quiet outline and a
// swatch still reads
// a browser's title bar: a fifth of the height, deeper on a small drawing (a legend swatch) so its
// dots still show
const barOf = (size: Size) => Math.min(26, size.height * (size.height < 48 ? 0.32 : 0.2))
const phoneRadiusOf = (size: Size) => Math.min(22, size.width * 0.2)
const plugOf = (size: Size) => ({
  width: Math.min(16, size.width * 0.12),
  height: Math.min(10, size.height * 0.16),
})
const crowdOf = (size: Size) => Math.min(28, size.width * 0.14)
const antennaOf = (size: Size) => Math.min(18, size.height * 0.2)
const earOf = (size: Size) => Math.min(8, size.width * 0.06)
const eyeRowOf = (size: Size) => Math.min(18, (size.height - antennaOf(size)) * 0.2)
const crestOf = (size: Size) => Math.min(14, size.height * 0.08)
const rimOf = (size: Size) => Math.min(12, size.height * 0.09)
const baseOf = (size: Size) => Math.min(10, size.height * 0.07)
const taperOf = (size: Size) => Math.min(20, size.width * 0.1)
const folderTabOf = (size: Size) => ({
  width: Math.min(96, size.width * 0.38),
  height: Math.min(14, size.height * 0.12),
})
const clockOf = (size: Size) => Math.min(64, size.height * 0.7)
const slantOf = (size: Size) => Math.min(24, size.height * 0.3)

// Small drawings (a legend swatch) scale these parts down; a node on the canvas uses them as set.
/** A cube's depth, in the shape's pixels. */
export const cubeDepth = (size: Size): number =>
  size.height < 40 ? size.height * 0.25 : CUBE_DEPTH
/** A package's tab height, in the shape's pixels. */
export const packageTab = (size: Size): number =>
  size.height < 64 ? size.height * 0.35 : PACKAGE_TAB

/** An actor's stick figure: how tall it is, and where its parts sit, in the shape's pixels. */
export function actorFigure(size: Size) {
  // a swatch is all figure; a node leaves room for the name under it
  const figure = size.height < 80 ? size.height : Math.max(40, size.height - 52)
  const head = figure * 0.14
  const neck = 2 + head * 2
  return {
    height: figure,
    cx: size.width / 2,
    head,
    headY: 2 + head,
    neck,
    arms: neck + figure * 0.14,
    armHalf: figure * 0.3,
    hip: neck + figure * 0.38,
    foot: figure - 2,
    footHalf: figure * 0.24,
  }
}

/** How wide a package's name tab is, in the shape's pixels. */
export const packageTabWidth = (size: Size): number =>
  size.width < 96 ? size.width * 0.5 : Math.max(96, Math.min(size.width - 32, size.width * 0.55))

export function shapeInsets(shape: DiagramShape, size: Size): Insets {
  const base = 12
  switch (shape) {
    case "box":
      return { top: base, right: 16, bottom: base, left: 16 }
    case "stack":
      return { top: base, right: 16 + OFFSET, bottom: base + OFFSET, left: 16 }
    case "cylinder":
      return { top: capOf(size) * 2 + 6, right: 16, bottom: capOf(size) + 8, left: 16 }
    case "queue":
      return { top: base, right: endOf(size) * 2 + 10, bottom: base, left: endOf(size) + 12 }
    case "hexagon":
      return { top: base, right: pointOf(size) + 8, bottom: base, left: pointOf(size) + 8 }
    case "document":
      return { top: base, right: FOLD + 8, bottom: base + 10, left: 16 }
    case "pill":
      return { top: base, right: size.height / 2, bottom: base, left: size.height / 2 }
    case "person":
      return { top: headOf(size) * 2 + 12, right: 16, bottom: base, left: 16 }
    // UML: compartment shapes lay out their own rows; the dots and the bar carry no text
    case "class":
    case "object":
    case "state":
    case "initial":
    case "final":
    case "bar":
      return { top: 0, right: 0, bottom: 0, left: 0 }
    case "actor":
      return { top: actorFigure(size).height + 4, right: 4, bottom: 4, left: 4 }
    case "usecase":
      return {
        top: size.height * 0.12,
        right: size.width * 0.16,
        bottom: size.height * 0.12,
        left: size.width * 0.16,
      }
    case "cube":
      return { top: cubeDepth(size) + 10, right: cubeDepth(size) + 14, bottom: 10, left: 14 }
    case "package":
      return { top: packageTab(size) + 8, right: 12, bottom: 8, left: 12 }
    case "browser":
      return { top: barOf(size) + 10, right: 16, bottom: base, left: 16 }
    case "mobile":
      return { top: 24, right: 14, bottom: 22, left: 14 }
    case "component":
      return { top: base, right: 16, bottom: base, left: plugOf(size).width + 12 }
    case "cloud":
      return {
        top: size.height * 0.24,
        right: size.width * 0.13,
        bottom: size.height * 0.08,
        left: size.width * 0.13,
      }
    case "people":
      return { top: headOf(size) * 2 + 12, right: 16 + crowdOf(size), bottom: base, left: 16 }
    case "bot":
      return {
        // clear of the visor round the eyes
        top: antennaOf(size) + eyeRowOf(size) + 20,
        right: earOf(size) + 14,
        bottom: base,
        left: earOf(size) + 14,
      }
    case "shield":
      return { top: base + 2, right: 20, bottom: size.height * 0.26, left: 20 }
    case "diamond":
      return {
        top: size.height / 4,
        right: size.width / 4,
        bottom: size.height / 4,
        left: size.width / 4,
      }
    case "circle": {
      // the square inscribed in the circle, a little inside it
      const x = size.width * 0.146 + 4
      const y = size.height * 0.146 + 4
      return { top: y, right: x, bottom: y, left: x }
    }
    case "bucket":
      return {
        top: rimOf(size) * 2 + 8,
        right: taperOf(size) + 12,
        bottom: baseOf(size) + 10,
        left: taperOf(size) + 12,
      }
    case "folder":
      return { top: folderTabOf(size).height + 12, right: 16, bottom: base, left: 16 }
    case "timer":
      return { top: base, right: 16, bottom: base, left: clockOf(size) + 16 }
    case "function":
      return { top: base, right: slantOf(size) + 12, bottom: base, left: slantOf(size) + 12 }
    default:
      // placeholder: shapes not drawn yet use the box's insets
      return { top: base, right: 16, bottom: base, left: 16 }
  }
}

/** A rounded rectangle as a path. */
function roundedRect(x: number, y: number, w: number, h: number, r: number): string {
  const rr = Math.min(r, w / 2, h / 2)
  return [
    `M${String(x + rr)},${String(y)}`,
    `H${String(x + w - rr)}`,
    `A${String(rr)},${String(rr)} 0 0 1 ${String(x + w)},${String(y + rr)}`,
    `V${String(y + h - rr)}`,
    `A${String(rr)},${String(rr)} 0 0 1 ${String(x + w - rr)},${String(y + h)}`,
    `H${String(x + rr)}`,
    `A${String(rr)},${String(rr)} 0 0 1 ${String(x)},${String(y + h - rr)}`,
    `V${String(y + rr)}`,
    `A${String(rr)},${String(rr)} 0 0 1 ${String(x + rr)},${String(y)}`,
    "Z",
  ].join(" ")
}

/** A circle as a path. */
function circlePath(cx: number, cy: number, r: number): string {
  const a = `A${String(r)},${String(r)} 0 1 1`
  return `M${String(cx - r)},${String(cy)} ${a} ${String(cx + r)},${String(cy)} ${a} ${String(cx - r)},${String(cy)} Z`
}

function ring(cx: number, cy: number, r: number): string {
  const s = (n: number) => String(n)
  return `M${s(cx - r)},${s(cy)} A${s(r)},${s(r)} 0 1 1 ${s(cx + r)},${s(cy)} A${s(r)},${s(r)} 0 1 1 ${s(cx - r)},${s(cy)} Z`
}

/** A four-pointed star with curved sides, the usual mark for AI, centred on (cx, cy). */
function sparkle(cx: number, cy: number, r: number): string {
  const s = (n: number) => String(n)
  const q = (x: number, y: number) => `Q${s(cx)},${s(cy)} ${s(x)},${s(y)}`
  return `M${s(cx)},${s(cy - r)} ${q(cx + r, cy)} ${q(cx, cy + r)} ${q(cx - r, cy)} ${q(cx, cy - r)} Z`
}

/** A horizontal stroke, such as a phone's speaker or a divider. */
function line(x0: number, y: number, x1: number): string {
  return `M${String(x0)},${String(y)} H${String(x1)}`
}

// The cloud: four elliptical bumps in proportions of the node's box, with the exact points where
// neighbouring bumps meet, so the outline closes cleanly at any size. Flat along the bottom.
const CLOUD = {
  start: [0.2, 0.94],
  bumps: [
    { rx: 0.17, ry: 0.3, large: 0, to: [0.1941, 0.3402] },
    { rx: 0.18, ry: 0.28, large: 0, to: [0.4191, 0.1306] },
    { rx: 0.21, ry: 0.31, large: 0, to: [0.789, 0.2999] },
    { rx: 0.18, ry: 0.32, large: 1, to: [0.8, 0.94] },
  ],
} as const

/**
 * A shape's outline, in its own pixels. `back` are layers drawn behind the body (a stack's
 * cards), `body` is the filled outline, and `detail` are strokes on top (a cylinder's rim, a
 * document's fold).
 */
export type ShapePaths = Readonly<{
  back: readonly string[]
  body: readonly string[]
  detail: readonly string[]
  /**
   * Small solid features, filled in the shape's ink rather than outlined, so they stay visible
   * at any size: a bot's eyes and sparkle, a browser's window dots.
   */
  marks?: readonly string[]
}>

export function shapePaths(shape: DiagramShape, size: Size): ShapePaths {
  const { width: w, height: h } = size
  const s = (n: number) => String(n)
  // a box's corners are 10 at full size, and shrink with a small drawing (a legend swatch, a
  // palette) so it still reads as a rectangle rather than a pill
  const corner = Math.min(10, h / 6)
  switch (shape) {
    case "box":
      return { back: [], body: [roundedRect(0.75, 0.75, w - 1.5, h - 1.5, corner)], detail: [] }
    case "pill":
      return { back: [], body: [roundedRect(0.75, 0.75, w - 1.5, h - 1.5, h / 2)], detail: [] }
    case "stack":
      return {
        back: [
          roundedRect(OFFSET, OFFSET, w - OFFSET - 0.75, h - OFFSET - 0.75, corner),
          roundedRect(OFFSET / 2, OFFSET / 2, w - OFFSET - 0.75, h - OFFSET - 0.75, corner),
        ],
        body: [roundedRect(0.75, 0.75, w - OFFSET - 1.5, h - OFFSET - 1.5, corner)],
        detail: [],
      }
    case "cylinder": {
      const e = capOf(size)
      const x0 = 0.75
      const x1 = w - 0.75
      return {
        back: [],
        body: [
          `M${s(x0)},${s(e)} A${s(w / 2)},${s(e)} 0 0 1 ${s(x1)},${s(e)} V${s(h - e)} A${s(w / 2)},${s(e)} 0 0 1 ${s(x0)},${s(h - e)} Z`,
        ],
        detail: [`M${s(x0)},${s(e)} A${s(w / 2)},${s(e)} 0 0 0 ${s(x1)},${s(e)}`],
      }
    }
    case "queue": {
      const e = endOf(size)
      const y0 = 0.75
      const y1 = h - 0.75
      return {
        back: [],
        body: [
          `M${s(e)},${s(y0)} H${s(w - e)} A${s(e)},${s(h / 2)} 0 0 1 ${s(w - e)},${s(y1)} H${s(e)} A${s(e)},${s(h / 2)} 0 0 1 ${s(e)},${s(y0)} Z`,
        ],
        detail: [`M${s(w - e)},${s(y0)} A${s(e)},${s(h / 2)} 0 0 0 ${s(w - e)},${s(y1)}`],
      }
    }
    case "hexagon": {
      const k = pointOf(size)
      return {
        back: [],
        body: [
          `M${s(k)},0.75 H${s(w - k)} L${s(w - 0.75)},${s(h / 2)} L${s(w - k)},${s(h - 0.75)} H${s(k)} L0.75,${s(h / 2)} Z`,
        ],
        detail: [],
      }
    }
    case "document": {
      const f = FOLD
      return {
        back: [],
        body: [
          `M0.75,0.75 H${s(w - f)} L${s(w - 0.75)},${s(f)} V${s(h - 10)} Q${s(w * 0.75)},${s(h - 20)} ${s(w / 2)},${s(h - 10)} T0.75,${s(h - 10)} Z`,
        ],
        detail: [`M${s(w - f)},0.75 V${s(f)} H${s(w - 0.75)}`],
      }
    }
    case "person": {
      const r = headOf(size)
      const top = bodyTopOf(size)
      return {
        back: [],
        // the body first, so the head is drawn over its top edge, resting on the shoulders
        body: [
          roundedRect(0.75, top, w - 1.5, h - top - 0.75, Math.min(28, w * 0.14)),
          `M${s(w / 2 - r)},${s(r + 1)} A${s(r)},${s(r)} 0 1 1 ${s(w / 2 + r)},${s(r + 1)} A${s(r)},${s(r)} 0 1 1 ${s(w / 2 - r)},${s(r + 1)} Z`,
        ],
        detail: [],
      }
    }
    // UML
    case "class":
      return { back: [], body: [roundedRect(0.75, 0.75, w - 1.5, h - 1.5, 4)], detail: [] }
    case "object":
      return { back: [], body: [roundedRect(0.75, 0.75, w - 1.5, h - 1.5, 2)], detail: [] }
    case "state":
      return {
        back: [],
        body: [roundedRect(0.75, 0.75, w - 1.5, h - 1.5, Math.min(16, h / 2))],
        detail: [],
      }
    case "usecase": {
      const rx = w / 2 - 0.75
      const ry = h / 2 - 0.75
      return {
        back: [],
        body: [
          `M0.75,${s(h / 2)} A${s(rx)},${s(ry)} 0 1 1 ${s(w - 0.75)},${s(h / 2)} A${s(rx)},${s(ry)} 0 1 1 0.75,${s(h / 2)} Z`,
        ],
        detail: [],
      }
    }
    case "initial":
      return { back: [], body: [circlePath(w / 2, h / 2, Math.min(w, h) / 2 - 1)], detail: [] }
    case "final": {
      const r = Math.min(w, h) / 2 - 1
      // the ring, then the dot inside it
      return {
        back: [],
        body: [circlePath(w / 2, h / 2, r), circlePath(w / 2, h / 2, r * 0.55)],
        detail: [],
      }
    }
    case "bar": {
      // a thin bar centred in its box, along the box's longer side
      const t = Math.min(8, w, h)
      const body =
        w >= h
          ? roundedRect(0.75, (h - t) / 2, w - 1.5, t, 2)
          : roundedRect((w - t) / 2, 0.75, t, h - 1.5, 2)
      return { back: [], body: [body], detail: [] }
    }
    case "actor": {
      const f = actorFigure(size)
      return {
        back: [],
        body: [circlePath(f.cx, f.headY, f.head)],
        detail: [
          `M${s(f.cx)},${s(f.neck)} V${s(f.hip)}`,
          `M${s(f.cx - f.armHalf)},${s(f.arms)} H${s(f.cx + f.armHalf)}`,
          `M${s(f.cx - f.footHalf)},${s(f.foot)} L${s(f.cx)},${s(f.hip)} L${s(f.cx + f.footHalf)},${s(f.foot)}`,
        ],
      }
    }
    case "cube": {
      const d = cubeDepth(size)
      return {
        // the top and side faces, behind the front face
        back: [
          `M0.75,${s(d)} L${s(d)},0.75 H${s(w - 0.75)} L${s(w - d)},${s(d)} Z`,
          `M${s(w - d)},${s(d)} L${s(w - 0.75)},0.75 V${s(h - d)} L${s(w - d)},${s(h - 0.75)} Z`,
        ],
        body: [`M0.75,${s(d)} H${s(w - d)} V${s(h - 0.75)} H0.75 Z`],
        detail: [],
      }
    }
    case "package": {
      const t = packageTab(size)
      return {
        back: [],
        body: [
          roundedRect(0.75, 0.75, packageTabWidth(size), t, 3),
          roundedRect(0.75, t, w - 1.5, h - t - 0.75, 3),
        ],
        detail: [],
      }
    }
    case "browser": {
      // a window: a title bar with three dots and, when there's room, an address field
      const bar = barOf(size)
      const dot = Math.max(0.9, Math.min(3, bar * 0.14))
      const step = dot * 3.2
      const first = Math.max(bar * 0.5, dot + 2.5)
      const field = first + step * 2 + dot + bar * 0.4
      return {
        back: [],
        body: [roundedRect(0.75, 0.75, w - 1.5, h - 1.5, Math.min(10, h * 0.2))],
        detail: [
          line(0.75, bar, w - 0.75),
          ...(w > 120
            ? [roundedRect(field, bar * 0.27, w - field - bar * 0.5, bar * 0.46, bar * 0.23)]
            : []),
        ],
        // solid window dots, so they read even at legend size
        marks: [0, 1, 2].map((i) => ring(first + step * i, bar / 2, dot)),
      }
    }
    case "mobile": {
      // a phone: rounded corners, a speaker slot at the top, a home bar at the bottom
      const edge = Math.max(2, Math.min(11, h * 0.05))
      return {
        back: [],
        body: [roundedRect(0.75, 0.75, w - 1.5, h - 1.5, phoneRadiusOf(size))],
        detail: [line(w * 0.4, edge, w * 0.6), line(w * 0.35, h - edge, w * 0.65)],
      }
    }
    case "component": {
      // the UML component mark: two small tabs across the left edge, and the mark in the corner
      const plug = plugOf(size)
      const tab = (y: number) =>
        roundedRect(
          0.75,
          y - plug.height / 2,
          plug.width,
          plug.height,
          Math.min(2, plug.height / 3),
        )
      const glyph = w > 120 && h > 60
      const gx = w - 30
      const gy = 12
      return {
        back: [],
        body: [
          roundedRect(
            plug.width / 2,
            0.75,
            w - plug.width / 2 - 0.75,
            h - 1.5,
            Math.min(8, h * 0.2),
          ),
          tab(h * 0.3),
          tab(h * 0.7),
        ],
        detail: glyph
          ? [
              roundedRect(gx + 4, gy, 14, 14, 2),
              roundedRect(gx, gy + 3, 8, 3, 1),
              roundedRect(gx, gy + 8, 8, 3, 1),
            ]
          : [],
      }
    }
    case "cloud": {
      const at = ([x, y]: readonly [number, number]) => `${s(x * w)},${s(y * h)}`
      return {
        back: [],
        body: [
          [
            `M${at(CLOUD.start)}`,
            ...CLOUD.bumps.map(
              (b) => `A${s(b.rx * w)},${s(b.ry * h)} 0 ${s(b.large)} 1 ${at(b.to)}`,
            ),
            "Z",
          ].join(" "),
        ],
        detail: [],
      }
    }
    case "people": {
      // two people: one in front, one behind and to the right, on the same shoulders
      const r = headOf(size)
      const top = bodyTopOf(size)
      const o = crowdOf(size)
      const front = w - o
      const radius = Math.min(28, front * 0.14)
      return {
        back: [
          roundedRect(o, top, w - o - 0.75, h - top - 0.75, radius),
          ring(front / 2 + o, r + 1, r),
        ],
        body: [
          roundedRect(0.75, top, front - 0.75, h - top - 0.75, radius),
          ring(front / 2, r + 1, r),
        ],
        detail: [],
      }
    }
    case "bot": {
      // an AI agent: a robot's head with an antenna and a sparkle, ears at the sides, and a screen
      // visor across the face showing two capsule eyes
      const a = antennaOf(size)
      const e = earOf(size)
      const ball = Math.max(1, Math.min(4.5, a * 0.25))
      const face = h - a
      const mid = a + face / 2
      const ear = Math.min(26, face * 0.32)
      const eyeY = a + eyeRowOf(size)
      // capsule eyes: tall rounded pills, solid, with a floor so they stay visible when small
      const eyeW = Math.max(1.6, Math.min(7, face * 0.09))
      const eyeH = Math.max(2.6, Math.min(13, face * 0.17))
      const eyeGap = Math.max(eyeW * 1.6, Math.min(w * 0.12, 30))
      const eyeAt = (cx: number) =>
        roundedRect(cx - eyeW / 2, eyeY - eyeH / 2, eyeW, eyeH, eyeW / 2)
      // the AI sparkle: a four-pointed star beside the antenna ball
      const spark = Math.max(2, Math.min(8, a * 0.42))
      const sx = w / 2 + ball + spark * 1.5
      const sy = ball + 0.75
      // the visor, drawn only where there's room around the eyes (not on a legend swatch)
      const visorH = eyeH + Math.min(12, eyeH * 0.9)
      const visorW = eyeGap + eyeW + visorH * 1.3
      const visor =
        h < 48
          ? []
          : [roundedRect(w / 2 - visorW / 2, eyeY - visorH / 2, visorW, visorH, visorH / 2)]
      return {
        back: [],
        body: [
          roundedRect(0.75, mid - ear / 2, e + 2, ear, Math.min(3, e / 2)),
          roundedRect(w - e - 2.75, mid - ear / 2, e + 2, ear, Math.min(3, e / 2)),
          roundedRect(e, a, w - e * 2, face - 0.75, Math.min(22, face * 0.28)),
          ring(w / 2, ball + 0.75, ball),
        ],
        detail: [`M${s(w / 2)},${s(ball * 2 + 0.75)} V${s(a)}`, ...visor],
        marks: [
          ring(w / 2, ball + 0.75, ball),
          eyeAt(w / 2 - eyeGap / 2),
          eyeAt(w / 2 + eyeGap / 2),
          sparkle(sx, sy, spark),
        ],
      }
    }
    case "shield": {
      const k = crestOf(size)
      return {
        back: [],
        body: [
          `M0.75,${s(k)} Q${s(w * 0.25)},0.75 ${s(w / 2)},0.75 Q${s(w * 0.75)},0.75 ${s(w - 0.75)},${s(k)} V${s(h * 0.5)} C${s(w - 0.75)},${s(h * 0.8)} ${s(w * 0.72)},${s(h * 0.93)} ${s(w / 2)},${s(h - 0.75)} C${s(w * 0.28)},${s(h * 0.93)} 0.75,${s(h * 0.8)} 0.75,${s(h * 0.5)} Z`,
        ],
        detail: [],
      }
    }
    case "diamond":
      return {
        back: [],
        body: [
          `M${s(w / 2)},0.75 L${s(w - 0.75)},${s(h / 2)} L${s(w / 2)},${s(h - 0.75)} L0.75,${s(h / 2)} Z`,
        ],
        detail: [],
      }
    case "circle": {
      // four quarter arcs through the anchors: a half arc's endpoints are exactly a diameter
      // apart, which leaves its centre to rounding
      const arc = `A${s(w / 2 - 0.75)},${s(h / 2 - 0.75)} 0 0 1`
      return {
        back: [],
        body: [
          `M0.75,${s(h / 2)} ${arc} ${s(w / 2)},0.75 ${arc} ${s(w - 0.75)},${s(h / 2)} ${arc} ${s(w / 2)},${s(h - 0.75)} ${arc} 0.75,${s(h / 2)} Z`,
        ],
        detail: [],
      }
    }
    case "bucket": {
      // an open-topped container, wider at the rim: the back of the rim shows the opening
      const e = rimOf(size)
      const t = taperOf(size)
      const b = baseOf(size)
      const bottom = h - b - 0.75
      return {
        back: [],
        body: [
          `M0.75,${s(e)} L${s(t)},${s(bottom)} A${s(w / 2 - t)},${s(b)} 0 0 0 ${s(w - t)},${s(bottom)} L${s(w - 0.75)},${s(e)} A${s(w / 2 - 0.75)},${s(e)} 0 0 1 0.75,${s(e)} Z`,
        ],
        detail: [`M0.75,${s(e)} A${s(w / 2 - 0.75)},${s(e)} 0 0 1 ${s(w - 0.75)},${s(e)}`],
      }
    }
    case "folder": {
      const tab = folderTabOf(size)
      const r = Math.min(8, h * 0.15)
      return {
        back: [],
        body: [
          [
            `M0.75,${s(r + 0.75)}`,
            `A${s(r)},${s(r)} 0 0 1 ${s(r + 0.75)},0.75`,
            `H${s(tab.width - tab.height)}`,
            `L${s(tab.width)},${s(tab.height)}`,
            `H${s(w - 0.75 - r)}`,
            `A${s(r)},${s(r)} 0 0 1 ${s(w - 0.75)},${s(tab.height + r)}`,
            `V${s(h - 0.75 - r)}`,
            `A${s(r)},${s(r)} 0 0 1 ${s(w - 0.75 - r)},${s(h - 0.75)}`,
            `H${s(r + 0.75)}`,
            `A${s(r)},${s(r)} 0 0 1 0.75,${s(h - 0.75 - r)}`,
            "Z",
          ].join(" "),
        ],
        // the front flap's top edge
        detail: [line(0.75, tab.height * 2 + 2, w - 0.75)],
      }
    }
    case "timer": {
      // a clock face on the left edge of a card: the text sits beside it, clear of the hands
      const d = clockOf(size)
      const r = d / 2
      const cx = r + 0.75
      const cy = h / 2
      const tick = (angle: number) => {
        const a = (angle * Math.PI) / 180
        const x0 = cx + Math.cos(a) * r * 0.74
        const y0 = cy + Math.sin(a) * r * 0.74
        const x1 = cx + Math.cos(a) * r * 0.9
        const y1 = cy + Math.sin(a) * r * 0.9
        return `M${s(x0)},${s(y0)} L${s(x1)},${s(y1)}`
      }
      return {
        back: [],
        body: [roundedRect(r, 0.75, w - r - 0.75, h - 1.5, Math.min(10, h * 0.2)), ring(cx, cy, r)],
        detail: [
          ...[0, 90, 180, 270].map(tick),
          `M${s(cx)},${s(cy)} V${s(cy - r * 0.56)}`,
          `M${s(cx)},${s(cy)} L${s(cx + r * 0.38)},${s(cy + r * 0.12)}`,
        ],
      }
    }
    case "function": {
      const k = slantOf(size)
      return {
        back: [],
        body: [`M${s(k)},0.75 H${s(w - 0.75)} L${s(w - k)},${s(h - 0.75)} H0.75 Z`],
        detail: [],
      }
    }
    default:
      // placeholder: shapes not drawn yet use the box's outline
      return { back: [], body: [roundedRect(0.75, 0.75, w - 1.5, h - 1.5, 10)], detail: [] }
  }
}

/** Where a UML shape meets a side, when its outline isn't its box: an actor's arms, a cube's faces. */
function umlAnchor(shape: DiagramShape, size: Size, side: DiagramSide): Point | undefined {
  if (shape === "actor") {
    const f = actorFigure(size)
    if (side === "left") return { x: f.cx - f.armHalf, y: f.arms }
    if (side === "right") return { x: f.cx + f.armHalf, y: f.arms }
    // from above, the top of the head; from below, under the name
    return side === "top" ? { x: f.cx, y: f.headY - f.head } : { x: f.cx, y: size.height }
  }
  if (shape === "bar") {
    // the bar is thinner than its box: meet its long edges, not the box's
    const t = Math.min(8, size.width, size.height)
    const across = size.width >= size.height ? size.height : size.width
    const near = (across - t) / 2
    const far = (across + t) / 2
    const horizontal = size.width >= size.height
    if (side === "top") return { x: size.width / 2, y: horizontal ? near : 0 }
    if (side === "bottom") return { x: size.width / 2, y: horizontal ? far : size.height }
    if (side === "left") return { x: horizontal ? 0 : near, y: size.height / 2 }
    return { x: horizontal ? size.width : far, y: size.height / 2 }
  }
  // the tab only spans part of the top, so a connection from above meets the body
  if (shape === "package" && side === "top") return { x: size.width / 2, y: packageTab(size) }
  if (shape === "cube") {
    const d = cubeDepth(size)
    if (side === "top") return { x: size.width / 2, y: 0 }
    if (side === "bottom") return { x: (size.width - d) / 2, y: size.height }
    if (side === "left") return { x: 0, y: (size.height + d) / 2 }
    return { x: size.width, y: (size.height - d) / 2 }
  }
  return undefined
}

/**
 * Anchors for the architecture shapes whose outline doesn't meet a side at its middle: undefined
 * when the bounding box's midpoint is already on the outline.
 */
function architectureAnchor(shape: DiagramShape, size: Size, side: DiagramSide): Point | undefined {
  const { width: w, height: h } = size
  switch (shape) {
    case "component":
      // the body starts half a tab in from the left; the tabs sit clear of the middle
      return side === "left" ? { x: plugOf(size).width / 2, y: h / 2 } : undefined
    case "cloud":
      // the apexes of the top, left, and right bumps (their ellipses' extremes, solved from CLOUD's
      // arcs), and the middle of the flat base
      return {
        top: { x: w * 0.58, y: h * 0.0198 },
        right: { x: w * 0.9746, y: h * 0.62 },
        bottom: { x: w * 0.5, y: h * 0.94 },
        left: { x: w * 0.0303, y: h * 0.64 },
      }[side]
    case "people": {
      const top = bodyTopOf(size)
      const front = w - crowdOf(size)
      return {
        top: { x: front / 2, y: 0.75 },
        right: { x: w - 0.75, y: (top + h) / 2 },
        bottom: { x: w / 2, y: h - 0.75 },
        left: { x: 0.75, y: (top + h) / 2 },
      }[side]
    }
    case "bot": {
      // the ears, level with the middle of the face; the antenna's ball on top
      const mid = antennaOf(size) + (h - antennaOf(size)) / 2
      return side === "left"
        ? { x: 0.75, y: mid }
        : side === "right"
          ? { x: w - 0.75, y: mid }
          : undefined
    }
    case "shield": {
      // on the straight part of the sides, above where they curve in to the point
      const y = (crestOf(size) + h * 0.5) / 2
      return side === "left" ? { x: 0.75, y } : side === "right" ? { x: w - 0.75, y } : undefined
    }
    case "bucket": {
      // the sides lean in from the rim to the base
      const e = rimOf(size)
      const t = taperOf(size)
      const bottom = h - baseOf(size) - 0.75
      const x = 0.75 + ((t - 0.75) * (h / 2 - e)) / (bottom - e)
      return side === "left"
        ? { x, y: h / 2 }
        : side === "right"
          ? { x: w - x, y: h / 2 }
          : undefined
    }
    case "folder":
      // below the tab, on the folder's top edge
      return side === "top" ? { x: w / 2, y: folderTabOf(size).height } : undefined
    case "function": {
      // the slanted sides cross the middle height half a slant in
      const k = slantOf(size)
      return side === "left"
        ? { x: k / 2, y: h / 2 }
        : side === "right"
          ? { x: w - k / 2, y: h / 2 }
          : undefined
    }
    default:
      return undefined
  }
}

/** Where a connection meets a side, in the shape's own pixels. */
export function shapeAnchor(shape: DiagramShape, size: Size, side: DiagramSide): Point {
  const uml = umlAnchor(shape, size, side)
  if (uml !== undefined) return uml
  const custom = architectureAnchor(shape, size, side)
  if (custom !== undefined) return custom
  const { width: w, height: h } = size
  const stackW = shape === "stack" ? w - OFFSET : w
  const stackH = shape === "stack" ? h - OFFSET : h
  const bodyTop = shape === "person" ? bodyTopOf(size) : 0
  switch (side) {
    case "top":
      return { x: stackW / 2, y: 0 }
    case "bottom":
      return { x: stackW / 2, y: stackH }
    case "left":
      return { x: 0, y: (bodyTop + stackH) / 2 }
    case "right":
      return { x: stackW, y: (bodyTop + stackH) / 2 }
  }
}

/** Where a connection meets a node's side, in canvas coordinates. */
export function diagramNodeAnchor(
  node: Pick<
    DiagramNodeData,
    "x" | "y" | "width" | "height" | "technology" | "description" | "stereotype" | "sections"
  >,
  kind: DiagramNodeKind | undefined,
  side: DiagramSide,
): Point {
  const local = shapeAnchor(shapeOf(kind), diagramNodeSize(node, kind), side)
  return { x: node.x + local.x, y: node.y + local.y }
}
