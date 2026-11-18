import { DIAGRAM_KINDS, type DiagramNodeKind } from "../ds.ts"
import type { Diagram, DiagramNode } from "../core/types.ts"

/** The kind key a node draws with: the preset's, or one derived from it in the node's tone. */
export const kindKeyOf = (node: DiagramNode): string =>
  node.tone === undefined
    ? node.kind
    : `${node.kind}@${node.tone}${node.typeLabel === undefined ? "" : `:${node.typeLabel}`}`

/**
 * The kinds a diagram draws with: the design system's preset, plus one derived kind for every
 * node the workspace's styles colour differently — the same shape and icon, in that tone, named
 * after the tag that styled it so the key lists it.
 */
export const kindsFor = (diagram: Diagram): Readonly<Record<string, DiagramNodeKind>> => {
  const derived = diagram.nodes.flatMap((node) => {
    const base = DIAGRAM_KINDS[node.kind]
    if (node.tone === undefined || base === undefined) return []
    return [
      [
        kindKeyOf(node),
        { ...base, tone: node.tone, ...(node.typeLabel === undefined ? {} : { label: node.typeLabel }) },
      ] as const,
    ]
  })
  return { ...DIAGRAM_KINDS, ...Object.fromEntries(derived) }
}

/** The diagram with each node pointing at the kind it draws with, as DiagramCanvas expects. */
export const withKindKeys = (diagram: Diagram): Diagram => ({
  ...diagram,
  nodes: diagram.nodes.map((node) => ({ ...node, kind: kindKeyOf(node) })),
})
