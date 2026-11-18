import type { IconName } from "../components/ui/icon/icon"
import type { ReactNode } from "react"

// Neutral types for the node-graph editor: a canvas node's data, its edges, breadcrumb items,
// and the kind vocabulary a caller passes in.
//   kind        -> CanvasNode.kind: string, described by a NodeKinds map passed in by the caller
//   source      -> which system a node represents, if any
//   presence    -> who else is editing this node right now
//   state       -> the node's run/connection state
//   openable    -> a NodeKind flag for kinds that expand into a subflow

/** Visual treatment of a kind's icon tile, mapped to the component's modifier classes. */
export type NodeVariant = "accent" | "solid" | "stacked"

/** How one kind of node looks: its icon, its name, and its treatment. Supplied by the caller. */
export type NodeKind = Readonly<{
  icon: IconName
  label: string
  variant?: NodeVariant
  /** Double-click or Enter opens it (a nested graph). Drawn as a stacked card when `variant` is "stacked". */
  openable?: boolean
}>

export type NodeKinds = Readonly<Record<string, NodeKind>>

export type NodeState = "running" | "succeeded" | "failed" | "skipped" | "waiting"
export type NodeDiff = "added" | "changed" | "removed"
export type PersonColor = 1 | 2 | 3 | 4

export type CanvasNode = Readonly<{
  id: string
  /** Key into the NodeKinds map. */
  kind: string
  /** Verb and object, e.g. "Post matched invoice". */
  title: string
  /** Shown in the eyebrow after the kind label. */
  source?: string
  /** One line: configuration while editing, the result afterwards. */
  meta?: string
  /** Output labels. One unlabelled output by default. */
  outputs?: readonly string[]
  state?: NodeState
  disabled?: boolean
  /** Version-compare marking. */
  diff?: NodeDiff
  /** Comment count; shows a bubble on the card. */
  comments?: number
  /** Amber bubble while a thread is open. */
  unresolved?: boolean
  /** Someone else is editing this node: coloured outline and a name tag. */
  presence?: Readonly<{ name: string; color?: PersonColor }>
  /** Top-left position in canvas units (16-unit grid). */
  x: number
  y: number
}>

export type CanvasEdge = Readonly<{
  from: string
  fromPort?: number
  to: string
  label?: string
  /** Progress state of the connector. */
  state?: "active" | "done" | "skipped" | "failed"
  /** Version-compare marking. */
  diff?: "added" | "removed"
}>

// eslint-disable-next-line functional/no-mixed-types -- a breadcrumb is a label plus the action that goes back to it
export type Crumb = Readonly<{ label: ReactNode; icon?: IconName; onClick?: () => void }>

/** The canvas camera: pan offset in screen pixels and a zoom factor. */
export type View = Readonly<{ x: number; y: number; zoom: number }>
export type Point = Readonly<{ x: number; y: number }>
export type Size = Readonly<{ width: number; height: number }>
