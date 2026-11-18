import { cn } from "../../../cn"
import { m } from "../../../paraglide/messages"
import { getLocale } from "../../../paraglide/runtime"
import {
  diagramNodeSize,
  packageTab,
  packageTabWidth,
  shapeAnchor,
  shapeInsets,
  shapeOf,
  shapePaths,
} from "../../../utils/graph/diagram-node-size"
import { pathBeam } from "../diagram-edge/path-beam"
import { Icon } from "../icon/icon"
import type {
  DiagramNodeData,
  DiagramNodeKind,
  DiagramShape,
  DiagramSide,
  DiagramTone,
} from "../../../types/diagram"
import type { Insets } from "../../../utils/graph/diagram-node-size"
import type {
  CSSProperties,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  PointerEvent,
  ReactNode,
  Ref,
} from "react"

// DiagramNode: one element of an architecture diagram, such as a person, a system, a container,
// or a data store, drawn as a shape with a type eyebrow, a title, a technology line, and a short
// description. UML shapes follow UML's notation instead: a stereotype in guillemets rather than
// the eyebrow, compartments for a class, a name tab for a package, and no text on the state
// machine's dots and bars. Presentational: DiagramCanvas positions it and drives selection,
// emphasis, and connections through its props.

const SIDES: readonly DiagramSide[] = ["top", "right", "bottom", "left"]

// UML names an element by stereotype, so these drop the kind's eyebrow and icon
const UML: ReadonlySet<DiagramShape> = new Set([
  "class",
  "object",
  "state",
  "actor",
  "usecase",
  "cube",
  "package",
  "initial",
  "final",
  "bar",
])
// a name, then compartments under rules
const COMPARTMENTS: ReadonlySet<DiagramShape> = new Set(["class", "object", "state"])
// a state machine's start, end, and fork or join: marks without text
const GLYPHS: ReadonlySet<DiagramShape> = new Set(["initial", "final", "bar"])
// UML shapes too small or too fixed for a technology line and a description
const TITLE_ONLY: ReadonlySet<DiagramShape> = new Set(["actor", "usecase"])

export type DiagramNodeProps = Readonly<{
  node: DiagramNodeData
  /** How this node's kind looks and is named. Without it, a neutral box named by `node.kind`. */
  kind?: DiagramNodeKind | undefined
  selected?: boolean | undefined
  /** Connected to the node being hovered or selected. */
  highlighted?: boolean | undefined
  /** Not connected while another node is emphasised; fades back. */
  dimmed?: boolean | undefined
  /** A beam breathes on its outline: the one element that was chosen, as against those lit up
   * for being connected to it. */
  beam?: boolean | undefined
  /** `compact` hides the technology and description, for a zoomed-out view. Default `full`. */
  detail?: "full" | "compact" | undefined
  /** A connection handle was pressed: start a connection from that side. */
  onHandlePointerDown?:
    ((side: DiagramSide, event: PointerEvent<HTMLSpanElement>) => void) | undefined
  onPointerDown?: ((event: PointerEvent<HTMLDivElement>) => void) | undefined
  onKeyDown?: ((event: KeyboardEvent<HTMLDivElement>) => void) | undefined
  onFocus?: ((event: FocusEvent<HTMLDivElement>) => void) | undefined
  onDoubleClick?: ((event: MouseEvent<HTMLDivElement>) => void) | undefined
  /** Positioning from the canvas, such as `position`, `left`, and `top`. */
  style?: CSSProperties | undefined
  className?: string | undefined
  ref?: Ref<HTMLDivElement> | undefined
}>

const stereotypeOf = (node: DiagramNodeData): string | null =>
  node.stereotype === undefined
    ? null
    : m.ui_diagram_node_stereotype({ stereotype: node.stereotype })

/** "Payments API, «service», Container, Go, gRPC, Degraded, selected", as one localised list. */
function accessibleName(
  node: DiagramNodeData,
  kind: DiagramNodeKind | undefined,
  selected: boolean,
): string {
  const parts = [
    node.title,
    stereotypeOf(node),
    kind?.label ?? node.kind,
    node.technology ?? null,
    node.status?.label ?? null,
    kind?.external === true ? m.ui_diagram_node_external() : null,
    selected ? m.ui_diagram_node_selected() : null,
  ].filter((part): part is string => part !== null)
  return new Intl.ListFormat(getLocale(), { type: "unit", style: "short" }).format(parts)
}

const toneClass = (tone: DiagramTone | undefined): string | undefined =>
  tone === undefined || tone === "neutral" ? undefined : `sk-diagram-node--${tone}`

const padding = (inset: Insets): string =>
  `${String(inset.top)}px ${String(inset.right)}px ${String(inset.bottom)}px ${String(inset.left)}px`

function Stereotype({ node }: Readonly<{ node: DiagramNodeData }>) {
  const text = stereotypeOf(node)
  return text === null ? null : (
    <span className="sk-diagram-node__stereotype" data-slot="diagram-node-stereotype">
      {text}
    </span>
  )
}

/** A compartment's lines; an empty one keeps its height, as UML draws an empty compartment. */
function Lines({ items }: Readonly<{ items: readonly string[] }>) {
  return items.length === 0 ? (
    <span className="sk-diagram-node__line" aria-hidden="true" />
  ) : (
    items.map((item, index) => (
      <span key={`${String(index)}-${item}`} className="sk-diagram-node__line">
        {item}
      </span>
    ))
  )
}

/** A class, object, or state: the name (with its stereotype), then one compartment per section. */
function Compartments({ node, shape }: Readonly<{ node: DiagramNodeData; shape: DiagramShape }>) {
  return (
    <div
      className="sk-diagram-node__content sk-diagram-node__content--compartments"
      data-slot="diagram-node-content"
    >
      <div className="sk-diagram-node__head" data-slot="diagram-node-head">
        <Stereotype node={node} />
        <span
          className={cn(
            "sk-diagram-node__title",
            shape === "object" && "sk-diagram-node__title--underlined",
          )}
          data-slot="diagram-node-title"
        >
          {node.title}
        </span>
      </div>
      {(node.sections ?? []).map((section, index) => (
        <div
          key={`${String(index)}-${section.title ?? ""}`}
          className="sk-diagram-node__section"
          data-slot="diagram-node-section"
        >
          {section.title === undefined ? null : (
            <span className="sk-diagram-node__section-title">{section.title}</span>
          )}
          <Lines items={section.items} />
        </div>
      ))}
    </div>
  )
}

/** A package: the name on its tab, the stereotype and what it contains in the body. */
function PackageContent({
  node,
  size,
  inset,
}: Readonly<{ node: DiagramNodeData; size: { width: number; height: number }; inset: Insets }>) {
  return (
    <>
      <span
        className="sk-diagram-node__tab"
        data-slot="diagram-node-tab"
        style={{ width: packageTabWidth(size), height: packageTab(size) }}
      >
        <span className="sk-diagram-node__title" data-slot="diagram-node-title">
          {node.title}
        </span>
      </span>
      <div
        className="sk-diagram-node__content sk-diagram-node__content--package"
        data-slot="diagram-node-content"
        style={{ padding: padding(inset) }}
      >
        <Stereotype node={node} />
        {(node.sections ?? []).flatMap((section) => section.items).length === 0 ? null : (
          <Lines items={(node.sections ?? []).flatMap((section) => section.items)} />
        )}
      </div>
    </>
  )
}

/** The eyebrow, stereotype, title, technology, and description, centred in the shape. */
function StandardContent({
  node,
  kind,
  shape,
  inset,
  full,
}: Readonly<{
  node: DiagramNodeData
  kind: DiagramNodeKind | undefined
  shape: DiagramShape
  inset: Insets
  full: boolean
}>) {
  const lines = full && !TITLE_ONLY.has(shape)
  return (
    <div
      className="sk-diagram-node__content"
      data-slot="diagram-node-content"
      style={{ padding: padding(inset) }}
    >
      {UML.has(shape) ? null : (
        <span className="sk-diagram-node__type" data-slot="diagram-node-type">
          {kind?.icon === undefined ? null : (
            <Icon name={kind.icon} size={12} className="sk-diagram-node__icon" />
          )}
          {kind?.label ?? node.kind}
        </span>
      )}
      <Stereotype node={node} />
      <span className="sk-diagram-node__title" data-slot="diagram-node-title">
        {node.title}
      </span>
      {lines && node.technology !== undefined ? (
        <span className="sk-diagram-node__technology" data-slot="diagram-node-technology">
          {m.ui_diagram_node_technology({ technology: node.technology })}
        </span>
      ) : null}
      {lines && node.description !== undefined ? (
        <span className="sk-diagram-node__description" data-slot="diagram-node-description">
          {node.description}
        </span>
      ) : null}
    </div>
  )
}

/** What's written inside a shape, laid out the way the shape's notation expects. */
function Content({
  node,
  kind,
  shape,
  full,
}: Readonly<{
  node: DiagramNodeData
  kind: DiagramNodeKind | undefined
  shape: DiagramShape
  full: boolean
}>): ReactNode {
  const size = diagramNodeSize(node, kind)
  const inset = shapeInsets(shape, size)
  return GLYPHS.has(shape) ? null : COMPARTMENTS.has(shape) ? (
    <Compartments node={node} shape={shape} />
  ) : shape === "package" ? (
    <PackageContent node={node} size={size} inset={inset} />
  ) : (
    <StandardContent node={node} kind={kind} shape={shape} inset={inset} full={full} />
  )
}

/** An element of an architecture diagram: a shape with its type, name, technology, and purpose. */
export function DiagramNode({
  node,
  kind,
  selected = false,
  highlighted = false,
  dimmed = false,
  beam = false,
  detail = "full",
  onHandlePointerDown,
  onPointerDown,
  onKeyDown,
  onFocus,
  onDoubleClick,
  style,
  className,
  ref,
}: DiagramNodeProps) {
  const shape = shapeOf(kind)
  const size = diagramNodeSize(node, kind)
  const paths = shapePaths(shape, size)
  const full = detail === "full"

  return (
    // A node is a focusable group inside DiagramCanvas's role="application", which gives it its
    // keyboard model (arrow keys move it, Enter selects it); jsx-a11y can't see that from here.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- keyboard-operated node inside the canvas
    <div
      ref={ref}
      className={cn(
        "sk-diagram-node",
        `sk-diagram-node--${shape}`,
        toneClass(kind?.tone),
        kind?.external === true && "is-external",
        selected && "is-selected",
        highlighted && "is-highlighted",
        dimmed && "is-dimmed",
        !full && "is-compact",
        className,
      )}
      data-slot="diagram-node"
      data-node={node.id}
      style={{ ...style, width: size.width, height: size.height }}
      role="group"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- nodes are reached with Tab and operated with the keyboard
      tabIndex={0}
      aria-label={accessibleName(node, kind, selected)}
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onDoubleClick={onDoubleClick}
    >
      <svg
        className="sk-diagram-node__shape"
        data-slot="diagram-node-shape"
        width={size.width}
        height={size.height}
        viewBox={`0 0 ${String(size.width)} ${String(size.height)}`}
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
        {/* the beam breathes on the main outline: a person's body, not its head; a stack's front card */}
        {beam && paths.body[0] !== undefined ? pathBeam(paths.body[0], "pulse") : null}
      </svg>

      <Content node={node} kind={kind} shape={shape} full={full} />

      {node.status === undefined ? null : (
        <span
          className={cn("sk-diagram-node__status", `sk-diagram-node__status--${node.status.tone}`)}
          data-slot="diagram-node-status"
          aria-hidden="true"
        >
          {node.status.label}
        </span>
      )}

      {SIDES.map((side) => {
        // where a connection meets this side of the shape: a person's body, a stack's front card
        const anchor = shapeAnchor(shape, size, side)
        return (
          <span
            key={side}
            className="sk-diagram-node__handle"
            data-slot="diagram-node-handle"
            data-side={side}
            aria-hidden="true"
            style={{ left: anchor.x, top: anchor.y }}
            onPointerDown={(event) => {
              // a handle starts a connection, not a drag of the node
              event.stopPropagation()
              onHandlePointerDown?.(side, event)
            }}
          />
        )
      })}
    </div>
  )
}
