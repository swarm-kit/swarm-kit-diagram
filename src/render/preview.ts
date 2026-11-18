/**
 * index.html in the output folder: every view in every format that was rendered, each beside the
 * snippet that embeds it. It is a preview and a cheat sheet, and it embeds the outputs exactly as
 * a host page would, so it doubles as a check that they embed.
 *
 * Opened from disk (file://), a browser will not fetch the JSON a `src` attribute names, so the
 * live web component here carries its data inline; the snippet shown uses `src`, for a server.
 */
import type { DiagramFigure } from "../core/types.ts"
import { fragmentStylesheet, renderFragment, snippets } from "./html.ts"
import { escapeHtml } from "./image.ts"

export type IndexOptions = Readonly<{
  /** The workspace's name, which the page is named after. */
  title: string
  formats: ReadonlySet<"png" | "svg" | "html" | "json">
  htmlModes: ReadonlySet<"page" | "component" | "fragment">
  fileKey: (key: string) => string
  runtime: string
}>

// A plain reading page around the outputs: the design system's own surfaces and ink, so the
// diagrams sit on the ground they were designed for. Light and dark follow the reader's setting,
// and an explicit data-theme on <html> wins either way.
const CSS = `
:root{--bg:#faf8f4;--fg:#1b1a17;--muted:#5e5a52;--line:#e3ded4;--code:#f1eee7;--link:#8a5a00;color-scheme:light}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#16161a;--fg:#ece9e2;--muted:#a8a294;--line:#2e2e35;--code:#1f1f25;--link:#f2a516;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#16161a;--fg:#ece9e2;--muted:#a8a294;--line:#2e2e35;--code:#1f1f25;--link:#f2a516;color-scheme:dark}
body{margin:0;background:var(--bg);color:var(--fg);font:15px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif}
main{max-width:1200px;margin:0 auto;padding-block:32px 64px;padding-inline:16px}
a{color:var(--link)}
h1{font-size:26px;line-height:1.2;margin:0 0 4px;text-wrap:balance}
h2{font-size:20px;line-height:1.3;margin:48px 0 4px;padding-top:24px;border-top:1px solid var(--line);text-wrap:balance}
h3{font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin:28px 0 8px}
p.muted{color:var(--muted);margin:0 0 12px;max-width:70ch}
nav{display:flex;flex-wrap:wrap;gap:4px 16px;margin-top:12px}
code{font:13px ui-monospace,"SF Mono",Menlo,monospace}
.demo{border:1px solid var(--line);border-radius:8px;padding:12px;overflow:auto;min-width:0}
.demo img{max-width:100%;height:auto;display:block}
iframe{max-width:100%}
details{margin-top:8px}summary{cursor:pointer;color:var(--muted)}
pre{background:var(--code);border-radius:6px;padding:12px;overflow:auto;font:12px/1.5 ui-monospace,"SF Mono",Menlo,monospace;white-space:pre-wrap;word-break:break-all;max-height:320px}
`

export const renderIndex = (figures: readonly DiagramFigure[], options: IndexOptions): string => {
  const has = (format: "png" | "svg" | "html" | "json"): boolean => options.formats.has(format)
  const sections = figures.map((figure) => {
    const key = options.fileKey(figure.key)
    const files = {
      runtime: options.runtime,
      ...(has("html") && options.htmlModes.has("page") ? { page: `${key}.html` } : {}),
      ...(has("json") || options.htmlModes.has("component") ? { json: `${key}.json` } : {}),
      ...(has("svg") ? { svg: `${key}.svg` } : {}),
      ...(has("png") ? { png: `${key}.png` } : {}),
    }
    const snip = snippets(figure, files)
    const code = (text: string): string => `<details><summary>Snippet</summary><pre><code>${escapeHtml(text)}</code></pre></details>`
    const parts: string[] = [`<h2 id="${escapeHtml(key)}">${escapeHtml(figure.caption)}</h2>`, `<p class="muted">View <code>${escapeHtml(figure.key)}</code></p>`]
    if (has("svg")) parts.push("<h3>SVG image</h3>", `<div class="demo"><img src="${escapeHtml(`${key}.svg`)}" alt="${escapeHtml(figure.caption)}"></div>`, code(snip.img))
    if (has("png")) parts.push("<h3>PNG image</h3>", `<div class="demo"><img src="${escapeHtml(`${key}.png`)}" alt="${escapeHtml(figure.caption)}"></div>`)
    if (has("html") && options.htmlModes.has("page")) {
      parts.push("<h3>iframe</h3>", `<p class="muted">Fully isolated; works with <code>sandbox="allow-scripts"</code>, and shows the static picture with no scripts at all.</p>`)
      parts.push(snip.iframe, code(snip.iframe), `<details><summary>Snippet that sizes the frame to its content</summary><pre><code>${escapeHtml(snip.iframeAutoHeight)}</code></pre></details>`)
    }
    if (has("html") && options.htmlModes.has("component")) {
      parts.push("<h3>Web component</h3>", `<p class="muted">Shadow DOM: the host's CSS cannot reach in. One script serves every diagram on the page.</p>`)
      parts.push(`<div class="demo">${snip.componentInline.replace(/^<script[^>]*><\/script>\n/, "")}</div>`, code(snip.component), `<details><summary>Snippet with the data inline (no second request)</summary><pre><code>${escapeHtml(snip.componentInline)}</code></pre></details>`)
    }
    if (has("html") && options.htmlModes.has("fragment")) {
      parts.push("<h3>HTML fragment</h3>", `<p class="muted">Static markup pasted into this page, no script. File: <code>${escapeHtml(`${key}.fragment.html`)}</code>.</p>`)
      parts.push(
        `<div class="demo">${renderFragment(figure, {
          theme: "auto",
          fonts: "embed",
          legend: "bottom",
          caption: true,
          background: true,
          css: "none",
        })}</div>`,
      )
    }
    return parts.join("\n")
  })
  return [
    "<!doctype html>",
    '<html lang="en">',
    "<head>",
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    `<title>${escapeHtml(options.title)} diagrams</title>`,
    `<style>${CSS}</style>`,
    // The fragments below share one copy of their stylesheet, as a page with several would.
    has("html") && options.htmlModes.has("fragment") ? `<style>${fragmentStylesheet("embed")}</style>` : "",
    has("html") && options.htmlModes.has("component") ? `<script src="${escapeHtml(options.runtime)}" defer></script>` : "",
    "</head>",
    "<body><main>",
    `<h1>${escapeHtml(options.title)}</h1>`,
    `<p class="muted">Every view, in every format swarm-kit-diagram rendered, embedded the way its snippet shows.</p>`,
    `<nav>${figures.map((f) => `<a href="#${escapeHtml(options.fileKey(f.key))}">${escapeHtml(f.caption)}</a>`).join("")}</nav>`,
    ...sections,
    "</main></body>",
    "</html>",
    "",
  ].join("\n")
}
