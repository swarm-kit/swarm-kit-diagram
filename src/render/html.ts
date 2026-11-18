/**
 * The HTML outputs, one per way of putting a diagram on someone else's page:
 *
 *   fragment   a <div> to paste into a page: static, no script. Styles under a scope class with a
 *              reset (see styles.ts), inline or in one shared stylesheet. Needs the host to allow
 *              inline styles; isolation from the host's CSS is strong but not total.
 *   page       a complete document for an <iframe>: interactive (the web component, inline) with
 *              the static diagram as its no-script fallback, so it still shows in a frame sandboxed
 *              without scripts. Fully isolated; reports its height to the parent by postMessage.
 *   component  the <assembly-diagram> web component: one shared script, the diagram as JSON (a
 *              file or inline); shadow DOM isolates it both ways. The snippet is generated here.
 *
 * Every output is self-contained (no network), and every piece of workspace text is escaped:
 * React escapes the markup, and JSON inside <script> is escaped against early termination.
 */
import type { DiagramFigure } from "../core/types.ts"
import { jsonForScript, toDocument } from "../embed/document.ts"
import { readRuntime } from "./assets.ts"
import { escapeHtml } from "./image.ts"
import { renderStatic } from "./static-markup.tsx"
import type { LegendPlacement } from "./static.tsx"
import { diagramCss, FRAGMENT_CLASS, type Fonts, type Theme } from "./styles.ts"

export type HtmlOptions = Readonly<{
  theme: Theme
  fonts: Fonts
  legend: LegendPlacement
  caption: boolean
  background: boolean
}>

/** The stylesheet every fragment shares, for `--fragment-css external`. */
export const fragmentStylesheet = (fonts: Fonts): string =>
  `/* swarm-kit-diagram: styles for HTML fragments (class "${FRAGMENT_CLASS}"). */\n${diagramCss({ scope: "fragment", fonts })}\n`

export type FragmentOptions = HtmlOptions &
  Readonly<{
    /** `inline` puts the styles in the fragment; a href links the shared stylesheet instead;
     * `none` leaves them to the page (which includes `fragmentStylesheet` once). */
    css: "inline" | "none" | Readonly<{ href: string }>
  }>

export const renderFragment = (figure: DiagramFigure, options: FragmentOptions): string => {
  const markup = renderStatic(figure, {
    theme: options.theme,
    legend: options.legend,
    caption: options.caption,
    background: options.background,
    padding: 16,
  })
  const styles =
    options.css === "none"
      ? ""
      : options.css === "inline"
        ? `<style>${diagramCss({ scope: "fragment", fonts: options.fonts })}</style>`
        : `<link rel="stylesheet" href="${escapeHtml(options.css.href)}">`
  return [
    `<!-- assembly-diagram: ${escapeHtml(figure.caption).replaceAll("--", "- -")} (view ${escapeHtml(figure.key)}). Static HTML; paste inside <body>. -->`,
    // The scope root: it carries the theme and the tokens, and scrolls a diagram wider than the
    // column it is pasted into.
    `<div class="${FRAGMENT_CLASS}" data-theme="${options.theme}">`,
    ...(styles === "" ? [] : [styles]),
    markup,
    "</div>",
    "",
  ].join("\n")
}

export type PageOptions = HtmlOptions &
  Readonly<{
    /** `interactive` draws the pannable canvas; `static` the picture, scaled to the frame. */
    mode: "interactive" | "static"
    /** `inline` makes the page one file; a src loads the shared runtime instead. */
    runtime: "inline" | Readonly<{ src: string }>
  }>

/**
 * A page for an <iframe>. The interactive canvas fills the frame (the embedding page decides the
 * frame's size; the aspect ratio in the snippet is the diagram's own); the static picture is laid
 * out at its natural height and reports it, so the frame can be sized to fit.
 */
export const renderPage = (figure: DiagramFigure, options: PageOptions): string => {
  const fallback = renderStatic(figure, {
    theme: options.theme,
    legend: options.legend,
    caption: options.caption,
    background: options.background,
    padding: 16,
  })
  const runtime =
    options.runtime === "inline"
      ? `<script>${readRuntime(options.fonts === "embed" ? "nofonts" : "full").replaceAll("</script", "<\\/script")}</script>`
      : `<script src="${escapeHtml(options.runtime.src)}"></script>`
  const attributes = [
    `theme="${options.theme}"`,
    `mode="${options.mode}"`,
    `data-key="${escapeHtml(figure.key)}"`,
    options.mode === "interactive" ? 'height="100vh" caption="false"' : `caption="${String(options.caption)}"`,
    options.legend === "none" ? 'legend="false"' : "",
  ].filter((a) => a !== "")
  return [
    "<!doctype html>",
    `<html lang="en" data-theme="${options.theme}" data-assembly-diagram-page>`,
    "<head>",
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    '<meta name="color-scheme" content="light dark">',
    `<title>${escapeHtml(figure.caption)}</title>`,
    `<style>${diagramCss({ scope: "page", fonts: options.fonts })}</style>`,
    `<style>html,body{margin:0;${options.background ? "" : "background:transparent"}}${options.mode === "interactive" ? "html,body{height:100%;overflow:hidden}" : ""}</style>`,
    "</head>",
    "<body>",
    `<assembly-diagram ${attributes.join(" ")}>`,
    `<script type="application/json">${jsonForScript(toDocument(figure))}</script>`,
    fallback,
    "</assembly-diagram>",
    runtime,
    "</body>",
    "</html>",
    "",
  ].join("\n")
}

/** The canvas size of a diagram, for snippets that keep its aspect ratio. */
export const naturalSize = (figure: DiagramFigure): Readonly<{ width: number; height: number }> => ({
  width: Math.ceil(figure.diagram.bounds.width + 40),
  height: Math.ceil(figure.diagram.bounds.height + 40),
})

export type Snippets = Readonly<{
  iframe: string
  iframeAutoHeight: string
  component: string
  componentInline: string
  img: string
}>

/**
 * Ready-to-paste snippets for a view, given the names its files are written under. Paths are
 * relative to wherever the host serves the output folder.
 */
export const snippets = (
  figure: DiagramFigure,
  files: Readonly<{ page?: string; json?: string; svg?: string; png?: string; runtime: string }>,
): Snippets => {
  const { width, height } = naturalSize(figure)
  const title = escapeHtml(figure.caption)
  const image = files.svg ?? files.png
  const fallback = image === undefined ? "" : `\n  <img src="${escapeHtml(image)}" alt="${title}" style="max-width:100%">\n`
  return {
    iframe:
      `<iframe src="${escapeHtml(files.page ?? "")}" title="${title}" loading="lazy"\n` +
      `  sandbox="allow-scripts" referrerpolicy="no-referrer"\n` +
      `  style="width:100%;aspect-ratio:${String(width)}/${String(height)};max-height:80vh;border:0"></iframe>`,
    iframeAutoHeight: [
      `<iframe id="adg-${escapeHtml(figure.key)}" src="${escapeHtml(files.page ?? "")}" title="${title}" loading="lazy"`,
      `  sandbox="allow-scripts" referrerpolicy="no-referrer" style="width:100%;height:480px;border:0"></iframe>`,
      "<script>",
      "  // Sizes the frame to its content. Only messages from this frame's own window are used.",
      "  addEventListener(\"message\", (event) => {",
      `    const frame = document.getElementById(${JSON.stringify(`adg-${figure.key}`)})`,
      "    if (event.source !== frame.contentWindow || event.data?.type !== \"assembly-diagram:resize\") return",
      "    const height = Number(event.data.height)",
      "    if (Number.isFinite(height) && height > 0) frame.style.height = `${Math.min(height, 4000)}px`",
      "  })",
      "</script>",
    ].join("\n"),
    component:
      `<script src="${escapeHtml(files.runtime)}" defer></script>\n` +
      `<assembly-diagram src="${escapeHtml(files.json ?? "")}" theme="auto">${fallback}</assembly-diagram>`,
    componentInline:
      `<script src="${escapeHtml(files.runtime)}" defer></script>\n` +
      `<assembly-diagram theme="auto">\n  <script type="application/json">${jsonForScript(toDocument(figure))}</script>${fallback}</assembly-diagram>`,
    img: image === undefined ? "" : `<img src="${escapeHtml(image)}" alt="${title}" width="${String(width)}" style="max-width:100%;height:auto">`,
  }
}
