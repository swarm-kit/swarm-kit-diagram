/**
 * The `json` output: one laid-out view, self-describing, which the web component reads and which
 * any host that renders Assembly diagrams can draw directly (`diagram` is the design system's
 * DiagramData).
 */
import type { Diagram, DiagramFigure } from "../core/types.ts"

export const DOCUMENT_FORMAT = "assembly-diagram"
export const DOCUMENT_VERSION = 1

export type DiagramDocument = Readonly<{
  format: typeof DOCUMENT_FORMAT
  version: typeof DOCUMENT_VERSION
  /** The view's key in the workspace. */
  key: string
  /** The view's name. */
  caption: string
  diagram: Diagram
}>

export const toDocument = (figure: DiagramFigure): DiagramDocument => ({
  format: DOCUMENT_FORMAT,
  version: DOCUMENT_VERSION,
  key: figure.key,
  caption: figure.caption,
  diagram: figure.diagram,
})

/** A shallow check, enough to give a clear error for the wrong file. */
export const isDiagramDocument = (value: unknown): value is DiagramDocument => {
  if (typeof value !== "object" || value === null) return false
  const v = value as Record<string, unknown>
  const diagram = v["diagram"] as Record<string, unknown> | undefined
  return (
    v["format"] === DOCUMENT_FORMAT &&
    v["version"] === DOCUMENT_VERSION &&
    typeof v["key"] === "string" &&
    typeof diagram === "object" &&
    Array.isArray(diagram["nodes"]) &&
    Array.isArray(diagram["edges"])
  )
}

/**
 * JSON safe inside an HTML <script> element: `<`, `>`, `&` and the line separators escaped, so a
 * title like "</script><script>…" cannot end the element and run as code.
 */
export const jsonForScript = (value: unknown): string =>
  JSON.stringify(value)
    .replaceAll("<", "\\u003c")
    .replaceAll(">", "\\u003e")
    .replaceAll("&", "\\u0026")
    .replaceAll(" ", "\\u2028")
    .replaceAll(" ", "\\u2029")
