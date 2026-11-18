/**
 * Maps a parsed Structurizr workspace, and one of its views, to the design system's `DiagramData`
 * shape. Two steps:
 *
 *   planView(workspace, view)  -> what the view draws: which elements are nodes, which are
 *                                 boundaries (groups), how those nest, and the edges;
 *   toDiagram(plan, ...)       -> the diagram, once the layout has placed and routed everything.
 *
 * It is deliberately C4-shaped: a person, a software system, a container, a component, a
 * deployment node with what runs on it, and a relationship, which is exactly what Structurizr's
 * model says. Kinds are keys into the design system's `DIAGRAM_KINDS` preset, so the shapes and
 * tones are the design system's.
 */
import { DIAGRAM_KINDS } from "../ds.ts"
import { edgeStyleKey } from "../ds.ts"
import type { Diagram, DiagramEdge, DiagramGroup, DiagramNode, DiagramTone } from "./types.ts"
import type { Element, Relationship, Style, View, Workspace } from "./structurizr.ts"

/**
 * Structurizr's shapes, as its styles name them, mapped to the design system kind that draws the
 * same thing. A shape with no counterpart falls through to the element's role.
 */
const SHAPE_KINDS: Readonly<Record<string, string>> = {
  person: "person",
  robot: "aiAgent",
  cylinder: "database",
  folder: "fileStore",
  webbrowser: "webApp",
  mobiledeviceportrait: "mobileApp",
  mobiledevicelandscape: "mobileApp",
  pipe: "queue",
  component: "component",
  bucket: "objectStorage",
  hexagon: "apiGateway",
}

/**
 * A better kind than the C4 role, from the element's name and technology, where the design system
 * has a shape for it: a database is a cylinder, a queue is a queue. Keeps the diagram readable
 * without asking the author to say so twice.
 */
const kindFromHints = (element: Element): string | undefined => {
  const haystack = `${element.name} ${element.technology ?? ""}`.toLowerCase()
  const hints: readonly Readonly<{ match: RegExp; kind: string }>[] = [
    { match: /\b(database|db|postgres|mysql|oracle|sql|mongo|dynamo|cassandra)\b/, kind: "database" },
    { match: /\b(cache|redis|memcached)\b/, kind: "cache" },
    { match: /\b(queue|kafka|sqs|rabbit|topic|stream|pubsub)\b/, kind: "stream" },
    { match: /\b(bucket|s3|blob|object storage|gcs)\b/, kind: "objectStorage" },
    { match: /\b(gateway|api gateway)\b/, kind: "apiGateway" },
    { match: /\b(load balancer|lb|nginx|haproxy)\b/, kind: "loadBalancer" },
    { match: /\b(cdn|cloudfront)\b/, kind: "cdn" },
    { match: /\b(dns|cname|domain)\b/, kind: "internet" },
    { match: /\b(bridge|direct connect|vpn|network|switch)\b/, kind: "router" },
    { match: /\b(browser|single-page|spa|web app|web application|frontend|front-end|ui)\b/, kind: "webApp" },
    { match: /\b(mobile|ios|android)\b/, kind: "mobileApp" },
    { match: /\b(identity|auth|idp|oauth|sso)\b/, kind: "identityProvider" },
    { match: /\b(email|e-mail|smtp|mail)\b/, kind: "email" },
    { match: /\b(external api|third.party)\b/, kind: "externalApi" },
  ]
  return hints.find((hint) => hint.match.test(haystack))?.kind
}

/** The shape the workspace's styles give an element: its last tag with a styled shape wins. */
const styledKind = (element: Element, workspace: Workspace): string | undefined => {
  const shapes = new Map(workspace.styles.map((style) => [style.tag, style.shape]))
  const shape = [...element.tags].reverse().map((tag) => shapes.get(tag)).find((s) => s !== undefined)
  return shape === undefined ? undefined : SHAPE_KINDS[shape.toLowerCase()]
}

/** The kind used for an element: its C4 role, sharpened by its style and by what it is. */
export const resolvedKind = (element: Element, workspace: Workspace): string => {
  switch (element.kind) {
    case "person":
      return "person"
    case "softwareSystem":
      // A software system outside the one being described draws muted, as C4 does.
      return element.tags.includes("External") ? "externalSystem" : "system"
    case "container":
      return styledKind(element, workspace) ?? kindFromHints(element) ?? "container"
    case "component":
      return styledKind(element, workspace) ?? kindFromHints(element) ?? "component"
    case "infrastructureNode":
      return styledKind(element, workspace) ?? kindFromHints(element) ?? "service"
    case "containerInstance":
    case "softwareSystemInstance": {
      const of = workspace.elements.find((e) => e.id === element.instanceOf)
      return of === undefined ? "container" : resolvedKind(of, workspace)
    }
    case "deploymentNode":
      return "deploymentNode"
  }
}

/**
 * The tones a workspace's colours are matched to, by hue. `brand` is left out: it is the site's
 * own accent, which the preset keeps for people, and it sits on the same hue as `warn`.
 */
const TONE_HUES: readonly Readonly<{ tone: DiagramTone; hue: number }>[] = [
  { tone: "danger", hue: 4 },
  { tone: "warn", hue: 38 },
  { tone: "success", hue: 150 },
  { tone: "info", hue: 215 },
]

/** The design system tone nearest a hex colour: by hue, or neutral for a grey, black, or white. */
export const nearestTone = (hex: string): DiagramTone | undefined => {
  const digits = hex.replace(/^#/, "")
  const full = digits.length === 3 ? [...digits].map((d) => d + d).join("") : digits
  if (!/^[0-9a-f]{6}$/i.test(full)) return undefined
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255) as [number, number, number]
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const light = (max + min) / 2
  const chroma = max - min
  const saturation = chroma === 0 ? 0 : chroma / (1 - Math.abs(2 * light - 1))
  if (saturation < 0.15 || light > 0.92 || light < 0.08) return "neutral"
  const hue =
    60 *
    (max === r ? ((g - b) / chroma + 6) % 6 : max === g ? (b - r) / chroma + 2 : (r - g) / chroma + 4)
  const distance = (a: number, b: number): number => Math.min(Math.abs(a - b), 360 - Math.abs(a - b))
  return TONE_HUES.reduce((best, next) => (distance(next.hue, hue) < distance(best.hue, hue) ? next : best)).tone
}

/** The colour a style paints an element with: its fill, else its border, else its text. */
const styleColour = (style: Style): string | undefined => style.background ?? style.stroke ?? style.color

/**
 * The tone the workspace's styles give an element, and the tag that gave it, when that tone is
 * not already the kind's own. The last of the element's tags with a coloured style wins, and the
 * tag names the entry in the key, both as Structurizr does; only a C4 role's own tag ("Person",
 * "Container") keeps the kind's label, since it says the same thing.
 */
const styledTone = (
  element: Element,
  kind: string,
  workspace: Workspace,
): Readonly<{ tone: DiagramTone; typeLabel?: string }> | undefined => {
  const styles = new Map(workspace.styles.map((style) => [style.tag, style]))
  const styled = [...element.tags]
    .reverse()
    .map((tag) => styles.get(tag))
    .find((style) => style !== undefined && styleColour(style) !== undefined)
  const colour = styled === undefined ? undefined : styleColour(styled)
  const tone = colour === undefined ? undefined : nearestTone(colour)
  if (styled === undefined || tone === undefined) return undefined
  const own = DIAGRAM_KINDS[kind]?.tone ?? "neutral"
  if (tone === own) return undefined
  const generic = ["Element", "Person", "Software System", "Container", "Component"]
  return { tone, ...(generic.includes(styled.tag) ? {} : { typeLabel: styled.tag }) }
}

/** What a boundary is, under its name: "Software system", "Container", "Docker Container". */
const boundaryType = (element: Element): string | undefined => {
  switch (element.kind) {
    case "softwareSystem":
      return "Software system"
    case "container":
      return "Container"
    case "component":
      return "Component"
    case "deploymentNode": {
      const parts = [
        element.technology ?? "Deployment node",
        ...(element.instances === undefined ? [] : [`${element.instances} instances`]),
      ]
      return parts.join(" · ")
    }
    default:
      return undefined
  }
}

/** A boundary the view draws, before layout: its label, and the boundary it nests in. */
export type PlannedGroup = Readonly<{ id: string; label: string; type?: string; parent?: string }>

/** An element the view draws as a node, before layout, and the boundary it sits in. */
export type PlannedNode = Readonly<{
  element: Element
  kind: string
  tone?: DiagramTone
  typeLabel?: string
  group?: string
}>

/** A relationship the view draws, before layout. */
export type PlannedEdge = Readonly<{
  id: string
  from: string
  to: string
  label?: string
  technology?: string
  line?: "solid" | "dashed" | "dotted"
  tone?: DiagramTone
  /** What the line style means, for the key: the tag that styled it, or "Response". */
  styleLabel?: string
  /** Drawn with an arrowhead at both ends: the same relationship declared both ways. */
  twoWay?: boolean
}>

/**
 * Two relationships that say the same thing in both directions ("Syncs stock with", both ways)
 * are one two-way relationship: drawn once, with an arrowhead at each end, so the data flows
 * both ways along one line. Anything else declared both ways stays two lines, since each says
 * something of its own.
 */
const mergeTwoWay = (edges: readonly PlannedEdge[]): readonly PlannedEdge[] =>
  edges.reduce<readonly PlannedEdge[]>((kept, edge) => {
    const twin = kept.find(
      (other) =>
        other.from === edge.to &&
        other.to === edge.from &&
        other.label === edge.label &&
        other.technology === edge.technology &&
        other.line === edge.line,
    )
    return twin === undefined
      ? [...kept, edge]
      : kept.map((other) => (other === twin ? { ...other, twoWay: true } : other))
  }, [])

/**
 * How the workspace's styles draw a relationship, and the tag that says why: the last of its tags
 * with a styled line or colour wins, as in Structurizr. Only what the style sets comes through,
 * so an unstyled relationship keeps the design system's solid neutral line rather than
 * Structurizr's dashed default; and the tag names the style in the key, unless it is the generic
 * "Relationship" every relationship carries.
 */
const styledLine = (
  rel: Relationship,
  workspace: Workspace,
): Readonly<{ line?: "solid" | "dashed" | "dotted"; tone?: DiagramTone; styleLabel?: string }> => {
  const styles = new Map(workspace.relationshipStyles.map((style) => [style.tag, style]))
  const styled = [...rel.tags]
    .reverse()
    .map((tag) => styles.get(tag))
    .find((style) => style !== undefined && (style.line !== undefined || style.color !== undefined))
  if (styled === undefined) return {}
  const tone = styled.color === undefined ? undefined : nearestTone(styled.color)
  return {
    ...(styled.line === undefined ? {} : { line: styled.line }),
    ...(tone === undefined || tone === "neutral" ? {} : { tone }),
    ...(styled.tag === "Relationship" ? {} : { styleLabel: styled.tag }),
  }
}

export type Plan = Readonly<{
  nodes: readonly PlannedNode[]
  groups: readonly PlannedGroup[]
  edges: readonly PlannedEdge[]
}>

/**
 * What a view draws. Boundaries come from three places: the element the view is about (a
 * container view's system, a component or dynamic view's container), the deployment nodes of a
 * deployment view, and the model's groups. A boundary nests in the boundary of the element that
 * holds it, and a group in the boundary its members share, so "Big Bank" can hold the Internet
 * Banking System's boundary, and "Cloud Object Storage" can hold "Static Content Store".
 */
export const planView = (workspace: Workspace, view: View): Plan => {
  const byId = new Map(workspace.elements.map((element) => [element.id, element]))
  const shown = view.elementIds.flatMap((id) => {
    const element = byId.get(id)
    return element === undefined ? [] : [element]
  })
  const boundary = view.boundaryId === undefined ? undefined : byId.get(view.boundaryId)

  /** Whether an element is drawn as a boundary in this view rather than as a node. */
  const isGroup = (element: Element): boolean =>
    element.id === boundary?.id || (view.type === "deployment" && element.kind === "deploymentNode")

  const groups = new Map<string, PlannedGroup>()
  const addGroup = (group: PlannedGroup): string => {
    if (!groups.has(group.id)) groups.set(group.id, group)
    return group.id
  }

  /**
   * The boundary an element sits in: the model group it was declared in, nested inside the
   * boundary of the element holding it. Groups are per holder, so two systems' "Web" groups stay
   * apart.
   */
  const containerOf = (element: Element): string | undefined => {
    const holder = element.parent === undefined ? undefined : byId.get(element.parent)
    const base = holder !== undefined && isGroup(holder) ? groupOf(holder) : undefined
    if (!view.showGroups || element.group === undefined) return base
    return element.group.reduce<string | undefined>((parent, name, index) => {
      const id = `${base ?? "root"}/group:${element.group?.slice(0, index + 1).join("/") ?? name}`
      return addGroup({ id, label: name, ...(parent === undefined ? {} : { parent }) })
    }, base)
  }

  /** The boundary drawn for an element, registered with its own place in the tree. */
  const groupOf = (element: Element): string => {
    const parent = containerOf(element)
    const type = boundaryType(element)
    return addGroup({
      id: element.id,
      label: element.name,
      ...(type === undefined ? {} : { type }),
      ...(parent === undefined ? {} : { parent }),
    })
  }

  // Register the boundaries first, outermost first, so nesting is in place before the nodes.
  if (boundary !== undefined) groupOf(boundary)
  for (const element of shown) if (isGroup(element)) groupOf(element)

  const nodes: PlannedNode[] = shown
    .filter((element) => !isGroup(element))
    .map((element) => {
      const group = containerOf(element)
      const kind = resolvedKind(element, workspace)
      // An instance is styled as the element it runs.
      const styled = workspace.elements.find((e) => e.id === element.instanceOf) ?? element
      return {
        element,
        kind,
        ...(styledTone(styled, kind, workspace) ?? {}),
        ...(group === undefined ? {} : { group }),
      }
    })
  const nodeIds = new Set(nodes.map((node) => node.element.id))

  /**
   * Where a relationship's end lands. A relationship to a deployment node (a boundary here) is
   * drawn to the one thing running on it, which is what the relationship means; one to a boundary
   * holding several, or to nothing drawn, is left out.
   */
  const endOf = (id: string): string | undefined => {
    if (nodeIds.has(id)) return id
    const inside = nodes.filter((node) => node.element.parent === id)
    return inside.length === 1 ? inside[0]?.element.id : undefined
  }

  const relationships = new Map(workspace.relationships.map((rel) => [rel.id, rel]))
  const edge = (
    id: string,
    rel: Relationship,
    overrides: Readonly<{ label?: string; reverse?: boolean; response?: boolean }> = {},
  ): readonly PlannedEdge[] => {
    const from = endOf(overrides.reverse === true ? rel.destinationId : rel.sourceId)
    const to = endOf(overrides.reverse === true ? rel.sourceId : rel.destinationId)
    if (from === undefined || to === undefined || from === to) return []
    const label = overrides.label ?? rel.description
    // A response in a dynamic view is dashed whatever its relationship's style says.
    const style =
      overrides.response === true
        ? { line: "dashed" as const, styleLabel: "Response" }
        : styledLine(rel, workspace)
    return [
      {
        id,
        from,
        to,
        ...(label === undefined ? {} : { label }),
        ...(rel.technology === undefined ? {} : { technology: rel.technology }),
        ...style,
      },
    ]
  }

  const edges: readonly PlannedEdge[] =
    view.steps === undefined
      ? mergeTwoWay(
          view.relationshipIds.flatMap((id) => {
            const rel = relationships.get(id)
            return rel === undefined ? [] : edge(id, rel)
          }),
        )
      : // A dynamic view numbers its steps, and draws a response back along the relationship.
        view.steps.flatMap((step) => {
          const rel = relationships.get(step.relationshipId)
          if (rel === undefined) return []
          const text = step.description ?? rel.description
          return edge(`${step.relationshipId}@${step.order}`, rel, {
            label: text === undefined ? step.order : `${step.order}. ${text}`,
            reverse: step.response,
            response: step.response,
          })
        })

  return { nodes, groups: [...groups.values()], edges }
}

/**
 * A relationship's route, in the canvas's terms: the sides it leaves and arrives on, how far along
 * them, its bends, and where its label sits. Everything the canvas needs to draw it as laid out.
 */
export type EdgeRoute = Readonly<{
  fromSide: "top" | "right" | "bottom" | "left"
  toSide: "top" | "right" | "bottom" | "left"
  fromOffset: number
  toOffset: number
  points: readonly Readonly<{ x: number; y: number }>[]
  labelAt?: Readonly<{ x: number; y: number }>
}>

type Box = Readonly<{ x: number; y: number; width: number; height: number }>

/**
 * Builds the diagram for a planned view: `nodes` are its elements, sized and placed; `boxes` the
 * boundaries' placed boxes; `routes` each relationship's route from the layout.
 */
export const toDiagram = (
  plan: Plan,
  nodes: readonly DiagramNode[],
  boxes: Readonly<Record<string, Box>>,
  routes: Readonly<Record<string, EdgeRoute>>,
): Diagram => {
  const groups: DiagramGroup[] = plan.groups.flatMap((group) => {
    const box = boxes[group.id]
    return box === undefined
      ? []
      : [
          {
            id: group.id,
            label: group.label,
            ...(group.type === undefined ? {} : { type: group.type }),
            ...(group.parent === undefined ? {} : { parent: group.parent }),
            x: box.x,
            y: box.y,
            width: box.width,
            height: box.height,
          },
        ]
  })

  const edges: DiagramEdge[] = plan.edges.map((edge) => {
    const route = routes[edge.id]
    const base: DiagramEdge = {
      id: edge.id,
      from: edge.from,
      to: edge.to,
      ...(edge.label === undefined ? {} : { label: edge.label }),
      ...(edge.technology === undefined ? {} : { technology: edge.technology }),
      ...(edge.line === undefined ? {} : { line: edge.line }),
      ...(edge.tone === undefined ? {} : { tone: edge.tone }),
      ...(edge.twoWay === true ? { start: "arrow" as const } : {}),
    }
    // The route the layout chose, so the canvas draws the relationship the same way: around the
    // elements in its path, its label where nothing else is.
    return route === undefined ? base : { ...base, ...route, route: "orthogonal" }
  })

  // What each styled line means, for the key, by the design system's own key for a style. The
  // first relationship to use a style names it, so a later tag with the same look does not
  // rename it.
  const lineLabels = Object.fromEntries(
    plan.edges
      .flatMap((edge) =>
        edge.styleLabel === undefined
          ? []
          : [
              [
                edgeStyleKey({
                  line: edge.line,
                  tone: edge.tone,
                  ...(edge.twoWay === true ? { start: "arrow" as const } : {}),
                }),
                edge.styleLabel,
              ] as const,
            ],
      )
      .reverse(),
  )

  // A route can run outside every element and boundary, round the side of a diagram, so the
  // bounds take the routes in too, with a little room for a label at their edge.
  const routed = edges.flatMap((e) => [
    ...(e.points ?? []).map((p) => ({ x: p.x - MARGIN, y: p.y - MARGIN, width: 2 * MARGIN, height: 2 * MARGIN })),
    ...(e.labelAt === undefined ? [] : [{ x: e.labelAt.x - 110, y: e.labelAt.y - 32, width: 220, height: 64 }]),
  ])
  return {
    nodes,
    edges,
    groups,
    ...(Object.keys(lineLabels).length === 0 ? {} : { lineLabels }),
    bounds: boundsOf([...nodes, ...groups, ...routed]),
  }
}

/** Room kept around a route's outermost bend. */
const MARGIN = 24

/** The box that holds every node and boundary, for the canvas's fit. */
const boundsOf = (items: readonly Box[]): Readonly<{ width: number; height: number }> => ({
  width: Math.max(0, ...items.map((item) => item.x + item.width)),
  height: Math.max(0, ...items.map((item) => item.y + item.height)),
})
