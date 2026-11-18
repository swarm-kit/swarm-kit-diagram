/**
 * A diagram, laid out and ready to draw. The shape is exactly the design system's `DiagramData`
 * (plus `lineLabels` for the key and `bounds` for the initial view), so it passes straight to
 * DiagramCanvas. This is also the `json` output format: a host that already renders Assembly
 * diagrams can draw it directly.
 */
export type Diagram = Readonly<{
  nodes: readonly DiagramNode[]
  edges: readonly DiagramEdge[]
  groups: readonly DiagramGroup[]
  /** What each styled line means, for the key, by the design system's style key. */
  lineLabels?: Readonly<Record<string, string>>
  /** The whole diagram's size, in canvas units. */
  bounds: Readonly<{ width: number; height: number }>
}>

/** One view of a workspace, laid out. */
export type DiagramFigure = Readonly<{ key: string; caption: string; diagram: Diagram }>

/** The design system's tones, which a workspace's style colours are matched to. */
export type DiagramTone = "neutral" | "brand" | "info" | "success" | "warn" | "danger"

export type DiagramNode = Readonly<{
  id: string
  /** A key into the design system's kinds; `tone` and `typeLabel`, when set, derive a kind from it. */
  kind: string
  /** The nearest tone to the colour the workspace's styles give this element, when it differs
   * from the kind's own. */
  tone?: DiagramTone
  /** The tag that gave the element its style, shown as its type and in the key ("Bank Staff"). */
  typeLabel?: string
  title: string
  technology?: string
  description?: string
  x: number
  y: number
  width: number
  height: number
  group?: string
}>

export type DiagramEdge = Readonly<{
  id: string
  from: string
  to: string
  label?: string
  technology?: string
  /**
   * The route the layout engine chose, which steers around the elements in the way: the sides it
   * leaves and arrives on, where along them, its bends, and where its label sits. The canvas
   * draws it as given.
   */
  fromSide?: "top" | "right" | "bottom" | "left"
  toSide?: "top" | "right" | "bottom" | "left"
  fromOffset?: number
  toOffset?: number
  points?: readonly Readonly<{ x: number; y: number }>[]
  labelAt?: Readonly<{ x: number; y: number }>
  /** How the canvas draws it: an elbow, a diagonal, or a curve. */
  route?: "curved" | "straight" | "orthogonal"
  /** From the workspace's relationship styles; dashed for a response in a dynamic view. */
  line?: "solid" | "dashed" | "dotted"
  /** The nearest tone to the colour the workspace's styles give the relationship. */
  tone?: DiagramTone
  /** An arrowhead at the start too: the same relationship declared both ways, drawn once. */
  start?: "arrow"
}>

export type DiagramGroup = Readonly<{
  id: string
  label: string
  type?: string
  /** The group this one nests in: a boundary inside a model group, a deployment node in another. */
  parent?: string
  x: number
  y: number
  width: number
  height: number
}>
