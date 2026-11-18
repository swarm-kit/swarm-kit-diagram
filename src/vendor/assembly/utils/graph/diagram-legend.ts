// What a diagram's key lists: each kind of node in use, and each distinct relationship style.
// Pure, so DiagramLegend and the caller building `lineLabels` agree on what a style is.

import type {
  DiagramEdgeData,
  DiagramEnd,
  DiagramKinds,
  DiagramNodeData,
  DiagramNodeKind,
  DiagramTone,
} from "../../types/diagram"

/** A relationship's look, with every default filled in. */
export type DiagramEdgeStyle = Readonly<{
  line: "solid" | "dashed" | "dotted"
  tone: DiagramTone
  start: DiagramEnd
  end: DiagramEnd
}>

/** An edge's look, defaults filled in as DiagramEdge draws it. */
export function edgeStyleOf(
  edge: Pick<DiagramEdgeData, "line" | "tone" | "start" | "end">,
): DiagramEdgeStyle {
  return {
    line: edge.line ?? "solid",
    tone: edge.tone ?? "neutral",
    start: edge.start ?? "none",
    end: edge.end ?? "arrow",
  }
}

/**
 * The key a relationship style is labelled by in `lineLabels`: `line/tone/start/end`, such as
 * `dashed/neutral/none/arrow` for an asynchronous call.
 */
export function edgeStyleKey(
  edge: Pick<DiagramEdgeData, "line" | "tone" | "start" | "end">,
): string {
  const style = edgeStyleOf(edge)
  return `${style.line}/${style.tone}/${style.start}/${style.end}`
}

export type LegendKind = Readonly<{ key: string; kind: DiagramNodeKind }>
export type LegendStyle = Readonly<{ key: string; style: DiagramEdgeStyle }>

/**
 * The kinds to list, in the order they first appear among `nodes` (every kind, in `kinds`
 * order, when no nodes are given), and the distinct edge styles, in order of first use.
 */
export function legendEntries(
  kinds: DiagramKinds,
  nodes?: readonly Pick<DiagramNodeData, "kind">[],
  edges: readonly Pick<DiagramEdgeData, "line" | "tone" | "start" | "end">[] = [],
): Readonly<{ kinds: readonly LegendKind[]; styles: readonly LegendStyle[] }> {
  const kindKeys = [...new Set(nodes === undefined ? Object.keys(kinds) : nodes.map((n) => n.kind))]
  const listed = kindKeys.flatMap((key) => {
    const kind = kinds[key]
    return kind === undefined ? [] : [{ key, kind }]
  })
  const styles = [...new Map(edges.map((e) => [edgeStyleKey(e), edgeStyleOf(e)])).entries()].map(
    ([key, style]) => ({ key, style }),
  )
  return { kinds: listed, styles }
}
