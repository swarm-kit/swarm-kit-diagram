// A ready-made vocabulary for DiagramCanvas: C4's levels, common architecture building blocks, and
// UML, each a DiagramNodeKind with a label, icon, shape, and tone. Optional: a diagram can use it as
// is, extend it, or ignore it and pass its own kinds.
//
// Labels come from the messages, so they must be read in the locale current when a diagram draws,
// not once when this module loads. DIAGRAM_KINDS is therefore an object of getters: spreading it
// (`{ ...DIAGRAM_KINDS }`) or reading an entry builds that kind with the current locale.

import { m } from "../../../paraglide/messages"
import type {
  DiagramKinds,
  DiagramNodeKind,
  DiagramShape,
  DiagramTone,
} from "../../../types/diagram"
import type { IconName } from "../icon/icon"

// eslint-disable-next-line functional/no-mixed-types -- a spec pairs its label's message function with its look, so the label is read in the current locale
type KindSpec = Readonly<{
  label: () => string
  icon: IconName
  shape: DiagramShape
  tone: DiagramTone
  external?: true
}>

/** The preset's groups, in the order a gallery or palette shows them. */
export const DIAGRAM_KIND_GROUP_KEYS = [
  "c4",
  "data",
  "network",
  "compute",
  "clients",
  "other",
  "uml",
] as const
export type DiagramKindGroupKey = (typeof DIAGRAM_KIND_GROUP_KEYS)[number]

const SPECS: Readonly<Record<DiagramKindGroupKey, Readonly<Record<string, KindSpec>>>> = {
  c4: {
    person: { label: m.ui_diagram_kind_person, icon: "user", shape: "person", tone: "brand" },
    people: { label: m.ui_diagram_kind_people, icon: "users", shape: "people", tone: "brand" },
    system: { label: m.ui_diagram_kind_system, icon: "layers", shape: "box", tone: "info" },
    externalSystem: {
      label: m.ui_diagram_kind_external_system,
      icon: "building",
      shape: "box",
      tone: "neutral",
      external: true,
    },
    container: { label: m.ui_diagram_kind_container, icon: "box", shape: "box", tone: "info" },
    component: {
      label: m.ui_diagram_kind_component,
      icon: "component",
      shape: "component",
      tone: "info",
    },
  },
  data: {
    database: {
      label: m.ui_diagram_kind_database,
      icon: "database",
      shape: "cylinder",
      tone: "info",
    },
    cache: { label: m.ui_diagram_kind_cache, icon: "zap", shape: "cylinder", tone: "warn" },
    queue: { label: m.ui_diagram_kind_queue, icon: "inbox", shape: "queue", tone: "info" },
    stream: { label: m.ui_diagram_kind_stream, icon: "activity", shape: "queue", tone: "success" },
    objectStorage: {
      label: m.ui_diagram_kind_object_storage,
      icon: "archive",
      shape: "bucket",
      tone: "info",
    },
    fileStore: {
      label: m.ui_diagram_kind_file_store,
      icon: "folder",
      shape: "folder",
      tone: "info",
    },
  },
  network: {
    apiGateway: {
      label: m.ui_diagram_kind_api_gateway,
      icon: "route",
      shape: "hexagon",
      tone: "brand",
    },
    loadBalancer: {
      label: m.ui_diagram_kind_load_balancer,
      icon: "split",
      shape: "diamond",
      tone: "neutral",
    },
    cdn: { label: m.ui_diagram_kind_cdn, icon: "globe", shape: "cloud", tone: "info" },
    internet: {
      label: m.ui_diagram_kind_internet,
      icon: "globe",
      shape: "cloud",
      tone: "neutral",
      external: true,
    },
    router: { label: m.ui_diagram_kind_router, icon: "network", shape: "diamond", tone: "neutral" },
  },
  compute: {
    service: { label: m.ui_diagram_kind_service, icon: "server", shape: "box", tone: "info" },
    function: {
      label: m.ui_diagram_kind_function,
      icon: "braces",
      shape: "function",
      tone: "info",
    },
    scheduledJob: {
      label: m.ui_diagram_kind_scheduled_job,
      icon: "timer",
      shape: "timer",
      tone: "neutral",
    },
    worker: { label: m.ui_diagram_kind_worker, icon: "cpu", shape: "stack", tone: "info" },
    aiAgent: { label: m.ui_diagram_kind_ai_agent, icon: "bot", shape: "bot", tone: "brand" },
  },
  clients: {
    webApp: {
      label: m.ui_diagram_kind_web_app,
      icon: "app-window",
      shape: "browser",
      tone: "info",
    },
    mobileApp: {
      label: m.ui_diagram_kind_mobile_app,
      icon: "smartphone",
      shape: "mobile",
      tone: "info",
    },
    // a desktop app is a window too; the monitor icon tells it from a web app
    desktopApp: {
      label: m.ui_diagram_kind_desktop_app,
      icon: "monitor",
      shape: "browser",
      tone: "info",
    },
    cli: { label: m.ui_diagram_kind_cli, icon: "terminal", shape: "box", tone: "neutral" },
  },
  other: {
    identityProvider: {
      label: m.ui_diagram_kind_identity_provider,
      icon: "shield-check",
      shape: "shield",
      tone: "success",
    },
    email: { label: m.ui_diagram_kind_email, icon: "mail", shape: "box", tone: "neutral" },
    externalApi: {
      label: m.ui_diagram_kind_external_api,
      icon: "plug",
      shape: "cloud",
      tone: "neutral",
      external: true,
    },
    document: {
      label: m.ui_diagram_kind_document,
      icon: "file-text",
      shape: "document",
      tone: "neutral",
    },
  },
  uml: {
    // class, interface, and enum share the class shape; the node's stereotype («interface»,
    // «enumeration») is what tells them apart on the diagram
    class: { label: m.ui_diagram_kind_class, icon: "layout-list", shape: "class", tone: "neutral" },
    interface: {
      label: m.ui_diagram_kind_interface,
      icon: "link",
      shape: "class",
      tone: "neutral",
    },
    enum: { label: m.ui_diagram_kind_enum, icon: "list", shape: "class", tone: "neutral" },
    object: { label: m.ui_diagram_kind_object, icon: "square", shape: "object", tone: "neutral" },
    actor: { label: m.ui_diagram_kind_actor, icon: "user", shape: "actor", tone: "neutral" },
    useCase: {
      label: m.ui_diagram_kind_use_case,
      icon: "target",
      shape: "usecase",
      tone: "neutral",
    },
    state: { label: m.ui_diagram_kind_state, icon: "circle", shape: "state", tone: "neutral" },
    initialState: {
      label: m.ui_diagram_kind_initial_state,
      icon: "play",
      shape: "initial",
      tone: "neutral",
    },
    finalState: {
      label: m.ui_diagram_kind_final_state,
      icon: "circle-check",
      shape: "final",
      tone: "neutral",
    },
    forkJoin: {
      label: m.ui_diagram_kind_fork_join,
      icon: "git-branch",
      shape: "bar",
      tone: "neutral",
    },
    deploymentNode: {
      label: m.ui_diagram_kind_deployment_node,
      icon: "hard-drive",
      shape: "cube",
      tone: "neutral",
    },
    package: {
      label: m.ui_diagram_kind_package,
      icon: "package",
      shape: "package",
      tone: "neutral",
    },
  },
}

const GROUP_LABELS: Readonly<Record<DiagramKindGroupKey, () => string>> = {
  c4: m.ui_diagram_kind_group_c4,
  data: m.ui_diagram_kind_group_data,
  network: m.ui_diagram_kind_group_network,
  compute: m.ui_diagram_kind_group_compute,
  clients: m.ui_diagram_kind_group_clients,
  other: m.ui_diagram_kind_group_other,
  uml: m.ui_diagram_kind_group_uml,
}

const kindOf = (spec: KindSpec): DiagramNodeKind => ({
  label: spec.label(),
  icon: spec.icon,
  shape: spec.shape,
  tone: spec.tone,
  ...(spec.external === true ? { external: true } : {}),
})

const ENTRIES = DIAGRAM_KIND_GROUP_KEYS.flatMap((group) => Object.entries(SPECS[group]))

/**
 * Every preset kind, keyed as `person`, `database`, `apiGateway`, `class`… Each entry is a getter,
 * so its label is read in the current locale; spread it to extend: `{ ...DIAGRAM_KINDS, mine }`.
 */
export const DIAGRAM_KINDS: DiagramKinds = Object.defineProperties(
  {},
  Object.fromEntries(
    ENTRIES.map(([key, spec]) => [key, { enumerable: true, get: () => kindOf(spec) }]),
  ),
)

export type DiagramKindGroup = Readonly<{
  key: DiagramKindGroupKey
  /** Read in the current locale each time. */
  label: string
  /** Keys into DIAGRAM_KINDS. */
  kinds: readonly string[]
}>

/** The preset's groups, in order, each with its label and the keys of its kinds. */
export const DIAGRAM_KIND_GROUPS: readonly DiagramKindGroup[] = DIAGRAM_KIND_GROUP_KEYS.map(
  (key) => ({
    key,
    kinds: Object.keys(SPECS[key]),
    get label() {
      return GROUP_LABELS[key]()
    },
  }),
)
