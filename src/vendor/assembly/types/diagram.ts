// The data contract for DiagramCanvas and its parts (DiagramNode, DiagramEdge, DiagramGroup,
// DiagramNote, DiagramLegend): free-form architecture diagrams, with C4's levels in mind
// (people, systems, containers, components, boundaries, labelled relationships) without being
// tied to it. The design system supplies shapes, line styles, and boundaries; the vocabulary
// ("Database", "Web app", "Payment provider") comes from the caller through `DiagramKinds`.
// Positions and sizes are in canvas units on the 16-unit grid (utils/graph/geometry.ts).

import type { Point } from "./graph"
import type { IconName } from "../components/ui/icon/icon"

/** A side of a node or group, where a connection attaches. */
export type DiagramSide = "top" | "right" | "bottom" | "left"

/** How a node is drawn. The shape carries meaning a reader learns once, from the legend. */
export type DiagramShape =
  | "box" // a system, a service, a component
  | "cylinder" // a data store
  | "stack" // several instances of the same thing
  | "pill" // an endpoint, an entry point
  | "person" // a user, a role
  | "hexagon" // a gateway, a router
  | "document" // a file, a report
  | "queue" // a queue, a topic, a stream
  | "browser" // a web app, a single-page app
  | "mobile" // a mobile app
  | "component" // a component (the UML component mark)
  | "cloud" // the internet, a third-party or SaaS service
  | "people" // a team, a group of users
  | "bot" // an AI agent, an automation
  | "shield" // auth, an identity provider, a firewall
  | "diamond" // a router, a switch, a decision
  | "circle" // an event, a trigger
  | "bucket" // object storage
  | "folder" // a file store, a shared drive
  | "timer" // a scheduler, a scheduled job
  | "function" // a serverless function, a job, a transform
  // UML
  | "class" // a class, interface, or enum: name, then `sections` (attributes, operations)
  | "object" // an instance: its name underlined
  | "actor" // a stick figure
  | "usecase" // an ellipse
  | "state" // a state in a state machine
  | "initial" // a state machine's start: a filled dot
  | "final" // a state machine's end: a ringed dot
  | "bar" // a fork or join bar
  | "cube" // a deployment node
  | "package" // a package: a box with the name on a tab

/** Colour, from the design system's tokens. `neutral` is the default. */
export type DiagramTone = "neutral" | "brand" | "info" | "success" | "warn" | "danger"

/** One kind of node, supplied by the caller: how every node of this kind looks and is named. */
export type DiagramNodeKind = Readonly<{
  /** Shown as the node's type eyebrow and in the legend: "Container", "Database". */
  label: string
  icon?: IconName | undefined
  /** Default `box`. */
  shape?: DiagramShape | undefined
  /** Default `neutral`. */
  tone?: DiagramTone | undefined
  /** Outside the system being described: drawn muted, as C4 draws external systems. */
  external?: boolean | undefined
}>

export type DiagramKinds = Readonly<Record<string, DiagramNodeKind>>

export type DiagramNodeData = Readonly<{
  id: string
  /** Key into DiagramKinds. */
  kind: string
  /** The node's name: "Payments API". */
  title: string
  /** The technology line: "Go, gRPC". */
  technology?: string | undefined
  /** One or two short sentences on what it does. Hidden when zoomed far out. */
  description?: string | undefined
  /** Top-left corner, in canvas units. */
  x: number
  y: number
  /** Default from the shape; in canvas units. */
  width?: number | undefined
  height?: number | undefined
  /** The id of the DiagramGroup it sits in, if any. */
  group?: string | undefined
  /** Shown in guillemets above the title: «interface», «enumeration», «external». */
  stereotype?: string | undefined
  /**
   * Compartments under the title, each an optional heading and lines: a class's attributes and
   * operations, an enum's values. Drawn by `class`; other shapes may list them compactly.
   */
  sections?:
    readonly Readonly<{ title?: string | undefined; items: readonly string[] }>[] | undefined
  /** A status shown on the node, as tone plus a label (rule 13): "Degraded". */
  status?: Readonly<{ tone: DiagramTone; label: string }> | undefined
}>

/**
 * What an end of a connection looks like. `triangle` is hollow (UML inheritance and
 * realization), `diamond` filled (composition), `diamond-open` hollow (aggregation).
 */
export type DiagramEnd = "none" | "arrow" | "open" | "dot" | "diamond" | "diamond-open" | "triangle"

export type DiagramEdgeData = Readonly<{
  id: string
  /** A node id. */
  from: string
  to: string
  /** Where it leaves and arrives; picked from the two nodes' positions when left out. */
  fromSide?: DiagramSide | undefined
  toSide?: DiagramSide | undefined
  /** What the relationship does: "Makes API calls to". */
  label?: string | undefined
  /** How: "JSON/HTTPS". Shown under the label. */
  technology?: string | undefined
  /** Small labels at each end, such as UML multiplicities ("1", "0..*") or roles. */
  startLabel?: string | undefined
  endLabel?: string | undefined
  /** Default `curved`. */
  route?: "curved" | "straight" | "orthogonal" | undefined
  /**
   * The bends of a route worked out by the caller, such as a layout engine's, in canvas units
   * and in order from `from` to `to`. The line runs from its start anchor through them to its end
   * anchor in straight legs with rounded corners, and `route` isn't used. Left out, the canvas
   * routes the relationship itself, directly between its two sides.
   */
  points?: readonly Point[] | undefined
  /**
   * Where the label's centre sits, in canvas units, when the caller places it: a layout engine's
   * position, clear of the elements and the other labels. Left out, it sits at the middle of the
   * line.
   */
  labelAt?: Point | undefined
  /**
   * Moves the start or the end anchor along its side, in canvas units, when the caller positions
   * the ends itself. Left out, the canvas spreads the ends that share a side along it.
   */
  fromOffset?: number | undefined
  toOffset?: number | undefined
  /** Default `solid`; `dashed` often means asynchronous. */
  line?: "solid" | "dashed" | "dotted" | undefined
  /** Default `none` at the start and `arrow` at the end; `arrow` at both is two-way. */
  start?: DiagramEnd | undefined
  end?: DiagramEnd | undefined
  /** Default `neutral`. */
  tone?: DiagramTone | undefined
  /** A moving dash along the line, showing traffic direction. Still under reduced motion. */
  animated?: boolean | undefined
}>

export type DiagramGroupData = Readonly<{
  id: string
  /** The boundary's name: "Internet Banking System". */
  label: string
  /** What kind of boundary, under the name: "Software system", "Container", "AWS region". */
  type?: string | undefined
  /** Top-left corner and size, in canvas units. */
  x: number
  y: number
  width: number
  height: number
  /** The id of the group it sits in, for nested boundaries. */
  parent?: string | undefined
  /** Default `dashed`. */
  line?: "dashed" | "solid" | undefined
  /** Default `neutral`. */
  tone?: DiagramTone | undefined
}>

export type DiagramNoteData = Readonly<{
  id: string
  text: string
  x: number
  y: number
  /** Default 224 canvas units. */
  width?: number | undefined
  /** A node or group id: a thin line points from the note to it. */
  target?: string | undefined
}>

/** Everything on a diagram. */
export type DiagramData = Readonly<{
  nodes: readonly DiagramNodeData[]
  edges: readonly DiagramEdgeData[]
  groups?: readonly DiagramGroupData[] | undefined
  notes?: readonly DiagramNoteData[] | undefined
}>
