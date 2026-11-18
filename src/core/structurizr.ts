/**
 * Reads a Structurizr workspace into the model the mapper works on. Two inputs:
 *
 *   - DSL, parsed by the official Structurizr CLI (Java), the only faithful parser: the JavaScript
 *     one on npm is partial (it fails on relationships declared inside a container block, and does
 *     not populate the view membership a renderer needs). `swarm-kit-diagram setup` fetches it.
 *   - A workspace already exported as JSON (`structurizr export -format json`, or a workspace
 *     downloaded from Structurizr), read directly: no Java needed.
 *
 * Everything above this file works on the returned `Workspace`, so a future JavaScript parser can
 * replace this without touching the mapper or the layout.
 */
import { execFileSync } from "node:child_process"
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { cliPath } from "./structurizr-cli.ts"

export class StructurizrUnavailableError extends Error {
  constructor(looked: string) {
    super(
      `The Structurizr CLI is not installed. Run \`swarm-kit-diagram setup\` (needs Java 17+), set ` +
        `STRUCTURIZR_CLI to its structurizr.sh, or pass a workspace exported as JSON. Looked in ${looked}.`,
    )
    this.name = "StructurizrUnavailableError"
  }
}

export class StructurizrParseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "StructurizrParseError"
  }
}

/** What an element is in the model, which decides how a view draws it. */
export type ElementKind =
  | "person"
  | "softwareSystem"
  | "container"
  | "component"
  | "deploymentNode"
  | "infrastructureNode"
  | "containerInstance"
  | "softwareSystemInstance"

/** One element of the model, static or deployment. */
export type Element = Readonly<{
  id: string
  name: string
  description?: string
  technology?: string
  tags: readonly string[]
  kind: ElementKind
  /** The model element this one sits inside, if any: a system, a container, a deployment node. */
  parent?: string
  /** The model group it was declared in, as a path: "Big Bank", or "Big Bank/Team A" when nested. */
  group?: readonly string[]
  /** For a container or software system instance: the element it is an instance of. */
  instanceOf?: string
  /** For a deployment node: how many run, "1..10"; left out when it is one. */
  instances?: string
}>

export type Relationship = Readonly<{
  id: string
  sourceId: string
  destinationId: string
  description?: string
  technology?: string
  tags: readonly string[]
}>

/** One step of a dynamic view: a relationship used in order, possibly as its response. */
export type Step = Readonly<{
  relationshipId: string
  order: string
  description?: string
  /** Drawn the other way, from the relationship's destination back to its source. */
  response: boolean
}>

export type ViewType =
  | "systemLandscape"
  | "systemContext"
  | "container"
  | "component"
  | "dynamic"
  | "deployment"

export type View = Readonly<{
  key: string
  name: string
  type: ViewType
  /** The ids of the elements this view shows. */
  elementIds: readonly string[]
  /** The ids of the relationships this view shows; a dynamic view lists them as steps instead. */
  relationshipIds: readonly string[]
  steps?: readonly Step[]
  /** The element drawn as a boundary around its children: the system of a container view, the
   * container of a component or dynamic view. */
  boundaryId?: string
  /** Whether the model's groups are drawn (the `structurizr.groups` view property). */
  showGroups: boolean
  direction: "DOWN" | "RIGHT"
}>

/**
 * What the workspace's styles give every element with a tag: a shape, as Structurizr names it,
 * and colours as hex, `background` for the fill, `stroke` for the border, `color` for the text.
 */
export type Style = Readonly<{
  tag: string
  shape?: string
  background?: string
  stroke?: string
  color?: string
}>

/**
 * What the workspace's styles give every relationship with a tag: how the line is drawn, and its
 * colour as hex. Only what the style sets is present, so a default stays the renderer's own.
 */
export type RelationshipStyle = Readonly<{
  tag: string
  line?: "solid" | "dashed" | "dotted"
  color?: string
}>

export type Workspace = Readonly<{
  name: string
  description?: string
  elements: readonly Element[]
  relationships: readonly Relationship[]
  /** In the order the workspace lists them. */
  views: readonly View[]
  styles: readonly Style[]
  relationshipStyles: readonly RelationshipStyle[]
}>

type RawRelationship = Readonly<{
  id?: string
  sourceId?: string
  destinationId?: string
  description?: string
  technology?: string
  tags?: string
}>

type RawElement = Readonly<{
  id?: string
  name?: string
  description?: string
  technology?: string
  tags?: string
  group?: string
  instances?: string
  containerId?: string
  softwareSystemId?: string
  relationships?: readonly RawRelationship[]
  containers?: readonly RawElement[]
  components?: readonly RawElement[]
  children?: readonly RawElement[]
  containerInstances?: readonly RawElement[]
  softwareSystemInstances?: readonly RawElement[]
  infrastructureNodes?: readonly RawElement[]
}>

type RawView = Readonly<{
  key?: string
  name?: string
  order?: number
  elements?: readonly Readonly<{ id?: string }>[]
  relationships?: readonly Readonly<{
    id?: string
    order?: string
    description?: string
    response?: boolean
  }>[]
  softwareSystemId?: string
  containerId?: string
  elementId?: string
  properties?: Readonly<Record<string, string>>
  automaticLayout?: Readonly<{ rankDirection?: string }>
}>

type RawDocument = Readonly<{
  name?: string
  description?: string
  model?: Readonly<{
    people?: readonly RawElement[]
    softwareSystems?: readonly RawElement[]
    deploymentNodes?: readonly RawElement[]
    properties?: Readonly<Record<string, string>>
  }>
  views?: Readonly<
    Record<string, readonly RawView[]> & {
      configuration?: Readonly<{
        styles?: Readonly<{
          elements?: readonly Readonly<{
            tag?: string
            shape?: string
            background?: string
            stroke?: string
            color?: string
          }>[]
          relationships?: readonly Readonly<{ tag?: string; style?: string; color?: string }>[]
        }>
      }>
    }
  >
}>

const toList = (tags: string | undefined): readonly string[] =>
  (tags ?? "")
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "")

/** The nested lists a raw element holds, and what each holds. */
const CHILDREN: readonly Readonly<{ list: keyof RawElement; kind: ElementKind }>[] = [
  { list: "containers", kind: "container" },
  { list: "components", kind: "component" },
  { list: "children", kind: "deploymentNode" },
  { list: "containerInstances", kind: "containerInstance" },
  { list: "softwareSystemInstances", kind: "softwareSystemInstance" },
  { list: "infrastructureNodes", kind: "infrastructureNode" },
]

/**
 * Flattens the nested model into elements, carrying each level's parent, and collects every
 * relationship, wherever Structurizr stored it (on its source element).
 */
const flatten = (
  raw: readonly RawElement[],
  kind: ElementKind,
  parent: string | undefined,
  separator: string | undefined,
  elements: Element[],
  relationships: Relationship[],
): void => {
  for (const element of raw) {
    if (element.id === undefined) continue
    const instanceOf = element.containerId ?? element.softwareSystemId
    const group =
      element.group === undefined
        ? undefined
        : separator === undefined
          ? [element.group]
          : element.group.split(separator)
    elements.push({
      id: element.id,
      name: element.name ?? element.id,
      ...(element.description === undefined ? {} : { description: element.description }),
      ...(element.technology === undefined ? {} : { technology: element.technology }),
      tags: toList(element.tags),
      kind,
      ...(parent === undefined ? {} : { parent }),
      ...(group === undefined ? {} : { group }),
      ...(instanceOf === undefined ? {} : { instanceOf }),
      ...(element.instances === undefined || element.instances === "1" ? {} : { instances: element.instances }),
    })
    for (const rel of element.relationships ?? []) {
      if (rel.id === undefined || rel.sourceId === undefined || rel.destinationId === undefined) continue
      relationships.push({
        id: rel.id,
        sourceId: rel.sourceId,
        destinationId: rel.destinationId,
        ...(rel.description === undefined ? {} : { description: rel.description }),
        ...(rel.technology === undefined ? {} : { technology: rel.technology }),
        tags: toList(rel.tags),
      })
    }
    for (const { list, kind: childKind } of CHILDREN) {
      const children = element[list]
      if (Array.isArray(children)) {
        flatten(children as readonly RawElement[], childKind, element.id, separator, elements, relationships)
      }
    }
  }
}

/**
 * An instance takes its name, description, and technology from the element it is an instance of:
 * the export leaves them out, and the diagram draws the instance as that element.
 */
const fillInstances = (elements: readonly Element[]): readonly Element[] => {
  const byId = new Map(elements.map((element) => [element.id, element]))
  return elements.map((element) => {
    const of = element.instanceOf === undefined ? undefined : byId.get(element.instanceOf)
    if (of === undefined) return element
    return {
      ...element,
      name: of.name,
      ...(of.description === undefined ? {} : { description: of.description }),
      ...(of.technology === undefined ? {} : { technology: of.technology }),
      tags: [...element.tags, ...of.tags],
    }
  })
}

const VIEW_TYPES: readonly Readonly<{ key: string; type: ViewType }>[] = [
  { key: "systemLandscapeViews", type: "systemLandscape" },
  { key: "systemContextViews", type: "systemContext" },
  { key: "containerViews", type: "container" },
  { key: "componentViews", type: "component" },
  { key: "dynamicViews", type: "dynamic" },
  { key: "deploymentViews", type: "deployment" },
]

/** The element a view draws as its boundary, by view type. */
const boundaryOf = (type: ViewType, view: RawView): string | undefined => {
  switch (type) {
    case "container":
      return view.softwareSystemId
    case "component":
      return view.containerId
    case "dynamic":
      // A dynamic view of a container or a system shows the inside of it; one of the whole
      // workspace has no element and no boundary.
      return view.elementId
    default:
      return undefined
  }
}

/**
 * Runs the CLI's JSON export on a DSL workspace. A file is exported where it is, so its
 * `!include`s and `!docs` resolve against its own folder; DSL text is written to a scratch folder.
 */
const exportJson = (input: Readonly<{ file: string } | { dsl: string }>, cli: string): string => {
  if (!existsSync(cli)) throw new StructurizrUnavailableError(cli)
  const dir = mkdtempSync(path.join(tmpdir(), "swarm-kit-diagram-"))
  try {
    const workspace = "file" in input ? path.resolve(input.file) : path.join(dir, "workspace.dsl")
    if ("dsl" in input) writeFileSync(workspace, input.dsl)
    try {
      execFileSync(cli, ["export", "-workspace", workspace, "-format", "json", "-output", path.join(dir, "out")], {
        cwd: path.dirname(workspace),
        stdio: "pipe",
      })
    } catch (error) {
      // The CLI prints the DSL error (with its line) on stdout or stderr; that is the useful part.
      const err = error as { stdout?: Buffer; stderr?: Buffer }
      const text = `${err.stderr?.toString() ?? ""}\n${err.stdout?.toString() ?? ""}`
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line !== "" && !line.startsWith("at "))
      throw new StructurizrParseError(`Structurizr could not parse the workspace: ${text.slice(-3).join(" ")}`)
    }
    const file = readdirSync(path.join(dir, "out")).find((entry) => entry.endsWith(".json"))
    if (file === undefined) throw new StructurizrParseError("Structurizr CLI produced no JSON")
    return readFileSync(path.join(dir, "out", file), "utf8")
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

/** The workspace a DSL file, DSL text, or exported JSON describes. */
export const readWorkspace = (
  input: Readonly<{ file: string } | { dsl: string } | { json: string }>,
  cli: string = cliPath(),
): Workspace => {
  const isJsonFile = "file" in input && input.file.toLowerCase().endsWith(".json")
  const json =
    "json" in input ? input.json : isJsonFile && "file" in input ? readFileSync(input.file, "utf8") : exportJson(input, cli)
  return fromDocument(JSON.parse(json) as RawDocument)
}

/** DSL text to a workspace: what a ```` ```structurizr ```` fence holds. */
export const parseStructurizr = (dsl: string, cli: string = cliPath()): Workspace => readWorkspace({ dsl }, cli)

/** The workspace an exported JSON document describes. */
const fromDocument = (document: RawDocument): Workspace => {

  const model = document.model ?? {}
  // Groups nest only when the workspace names a separator (`structurizr.groupSeparator`).
  const separator = model.properties?.["structurizr.groupSeparator"]
  const elements: Element[] = []
  const relationships: Relationship[] = []
  flatten(model.people ?? [], "person", undefined, separator, elements, relationships)
  flatten(model.softwareSystems ?? [], "softwareSystem", undefined, separator, elements, relationships)
  flatten(model.deploymentNodes ?? [], "deploymentNode", undefined, separator, elements, relationships)

  const views: View[] = VIEW_TYPES.flatMap(({ key, type }) =>
    (document.views?.[key] ?? []).map((view): View & { order: number } => {
      const boundaryId = boundaryOf(type, view)
      const steps =
        type !== "dynamic"
          ? undefined
          : (view.relationships ?? []).flatMap((r): readonly Step[] =>
              r.id === undefined
                ? []
                : [
                    {
                      relationshipId: r.id,
                      order: r.order ?? "",
                      ...(r.description === undefined ? {} : { description: r.description }),
                      response: r.response === true,
                    },
                  ],
            )
      return {
        key: view.key ?? "view",
        name: view.name ?? view.key ?? "View",
        type,
        order: view.order ?? 0,
        elementIds: (view.elements ?? []).flatMap((e) => (e.id === undefined ? [] : [e.id])),
        relationshipIds: [...new Set((view.relationships ?? []).flatMap((r) => (r.id === undefined ? [] : [r.id])))],
        ...(steps === undefined ? {} : { steps }),
        ...(boundaryId === undefined ? {} : { boundaryId }),
        showGroups: view.properties?.["structurizr.groups"] !== "false",
        direction: view.automaticLayout?.rankDirection === "LeftRight" ? "RIGHT" : "DOWN",
      }
    }),
  )
    .toSorted((a, b) => a.order - b.order)
    .map(({ order: _order, ...view }) => view)

  const styles: Style[] = (document.views?.configuration?.styles?.elements ?? []).flatMap((style) =>
    style.tag === undefined
      ? []
      : [
          {
            tag: style.tag,
            ...(style.shape === undefined ? {} : { shape: style.shape }),
            ...(style.background === undefined ? {} : { background: style.background }),
            ...(style.stroke === undefined ? {} : { stroke: style.stroke }),
            ...(style.color === undefined ? {} : { color: style.color }),
          },
        ],
  )

  const relationshipStyles: RelationshipStyle[] = (
    document.views?.configuration?.styles?.relationships ?? []
  ).flatMap((style) => {
    const line = style.style?.toLowerCase()
    return style.tag === undefined
      ? []
      : [
          {
            tag: style.tag,
            ...(line === "solid" || line === "dashed" || line === "dotted" ? { line } : {}),
            ...(style.color === undefined ? {} : { color: style.color }),
          },
        ]
  })

  return {
    name: document.name ?? "Workspace",
    ...(document.description === undefined ? {} : { description: document.description }),
    elements: fillInstances(elements),
    relationships,
    views,
    styles,
    relationshipStyles,
  }
}
