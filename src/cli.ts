/**
 * swarm-kit-diagram: renders Structurizr workspaces with the Assembly design system.
 *
 *   swarm-kit-diagram render <workspace> [options]   images, HTML, and JSON for each view
 *   swarm-kit-diagram views <workspace>              the views a workspace defines
 *   swarm-kit-diagram check <workspace> [--view k]   layout problems a reader would hit
 *   swarm-kit-diagram runtime [-o dir]               the web component script, on its own
 *   swarm-kit-diagram setup [--browser]              fetch the Structurizr CLI (and Chromium)
 *   swarm-kit-diagram doctor                         what is installed, and what is missing
 *
 * <workspace> is a .dsl file, an exported workspace .json (no Java needed), or - for DSL on stdin.
 */
import { spawnSync } from "node:child_process"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { createRequire } from "node:module"
import path from "node:path"
import { parseArgs } from "node:util"
import type { Browser } from "playwright-core"
import { buildDiagrams } from "./core/build.ts"
import { checkDiagram, summarizeDiagram } from "./core/check.ts"
import { cliPath, installCli, javaVersion, STRUCTURIZR_VERSION } from "./core/structurizr-cli.ts"
import { readWorkspace, type Workspace } from "./core/structurizr.ts"
import type { DiagramFigure } from "./core/types.ts"
import { toDocument } from "./embed/document.ts"
import { readRuntime } from "./render/assets.ts"
import { chromePath, launch } from "./render/browser.ts"
import { fragmentStylesheet, renderFragment, renderPage } from "./render/html.ts"
import { renderPng, renderSvg } from "./render/image.ts"
import { renderIndex } from "./render/preview.ts"
import type { LegendPlacement } from "./render/static.tsx"
import type { Fonts, Theme } from "./render/styles.ts"

const VERSION = "0.1.0"
const RUNTIME_FILE = "assembly-diagram.js"
const FRAGMENT_CSS_FILE = "assembly-diagram.css"

const FORMATS = ["png", "svg", "html", "json"] as const
type Format = (typeof FORMATS)[number]
const HTML_MODES = ["page", "component", "fragment"] as const
type HtmlMode = (typeof HTML_MODES)[number]

class UsageError extends Error {}

const HELP = `swarm-kit-diagram ${VERSION}: Structurizr diagrams in the Assembly design system

Usage
  swarm-kit-diagram render <workspace> [options]
  swarm-kit-diagram views <workspace>
  swarm-kit-diagram check <workspace> [--view <key>]...
  swarm-kit-diagram runtime [--out <dir>]
  swarm-kit-diagram setup [--browser]
  swarm-kit-diagram doctor

<workspace> is a Structurizr DSL file, a workspace exported as JSON, or - (DSL on stdin).

Render options
  -o, --out <dir>            where files go (default: ./diagrams)
  -f, --format <list>        any of png,svg,html,json (default: all four)
      --html <list>          which HTML: page,component,fragment (default: all three)
  -v, --view <key>           only this view; repeat for more (default: every view)
      --theme <t>            light | dark | auto (default: auto; images use light for auto)
      --scale <n>            PNG pixel density (default: 2)
      --fonts <f>            embed | system | <base URL of the font files> (default: embed)
      --legend <where>       bottom | right | none (default: bottom)
      --no-caption           leave the view's name out
      --transparent          no background behind PNG, SVG, and HTML
      --page-mode <m>        the iframe page: interactive | static (default: interactive)
      --runtime <r>          the iframe page's script: inline | external (default: inline)
      --fragment-css <c>     the fragment's styles: inline | external (default: inline)
      --no-index             skip index.html, the preview of every output with its snippets
      --check                fail if a view has a layout problem (as \`check\` reports)
      --layout-options <json>  ELK option overrides, for tuning a layout

Files, per view key K: K.png, K.svg, K.json, K.html (iframe page), K.fragment.html,
plus ${RUNTIME_FILE} (web component), ${FRAGMENT_CSS_FILE} (with --fragment-css external),
and index.html.

Environment
  STRUCTURIZR_CLI            a structurizr.sh to use instead of the cached ${STRUCTURIZR_VERSION}
  SWARM_KIT_DIAGRAM_CHROME   a Chrome or Chromium for PNG and SVG
  SWARM_KIT_DIAGRAM_CACHE    where setup puts what it downloads
`

const list = <T extends string>(value: string, allowed: readonly T[], name: string): readonly T[] => {
  const items = value.split(",").map((item) => item.trim()).filter((item) => item !== "")
  const bad = items.filter((item) => !(allowed as readonly string[]).includes(item))
  if (bad.length > 0) throw new UsageError(`--${name}: unknown ${bad.join(", ")} (use ${allowed.join(", ")})`)
  return items as T[]
}

const oneOf = <T extends string>(value: string, allowed: readonly T[], name: string): T => {
  if (!(allowed as readonly string[]).includes(value)) throw new UsageError(`--${name}: '${value}' is not one of ${allowed.join(", ")}`)
  return value as T
}

/** A file-system-safe name for a view key. */
const fileKey = (key: string): string => key.replace(/[^A-Za-z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || "view"

const readInput = (input: string | undefined): Workspace => {
  if (input === undefined) throw new UsageError("missing <workspace> (a .dsl or .json file, or - for stdin)")
  if (input === "-") return readWorkspace({ dsl: readFileSync(0, "utf8") })
  if (!existsSync(input)) throw new UsageError(`no such file: ${input}`)
  return readWorkspace({ file: input })
}

const parseLayoutOptions = (value: string | undefined): Readonly<Record<string, string>> | undefined => {
  if (value === undefined) return undefined
  try {
    const parsed = JSON.parse(value) as unknown
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) throw new Error("not an object")
    return Object.fromEntries(Object.entries(parsed).map(([k, v]) => [k, String(v)]))
  } catch (error) {
    throw new UsageError(`--layout-options: ${(error as Error).message}`)
  }
}

const parseFonts = (value: string): Fonts =>
  value === "embed" || value === "system" ? value : /^(https?:)?\/\/|^\.{0,2}\//.test(value) ? { baseUrl: value } : (() => {
    throw new UsageError("--fonts: use embed, system, or a URL (https://…, //…, /…, ./…)")
  })()

/** Reports each view's problems; returns how many there were. */
const report = (figures: readonly DiagramFigure[]): number => {
  const problems = figures.flatMap((figure) => {
    console.log(summarizeDiagram(figure.diagram, figure.key))
    return checkDiagram(figure.diagram, figure.key)
  })
  for (const problem of problems) console.log(`  ${problem}`)
  console.log(problems.length === 0 ? "clean: no collisions, crossings, or short bends" : `${String(problems.length)} problem(s)`)
  return problems.length
}

const render = async (argv: readonly string[]): Promise<number> => {
  const { values, positionals } = parseArgs({
    args: [...argv],
    allowPositionals: true,
    options: {
      out: { type: "string", short: "o", default: "diagrams" },
      format: { type: "string", short: "f", default: FORMATS.join(",") },
      html: { type: "string", default: HTML_MODES.join(",") },
      view: { type: "string", short: "v", multiple: true },
      theme: { type: "string", default: "auto" },
      scale: { type: "string", default: "2" },
      fonts: { type: "string", default: "embed" },
      legend: { type: "string", default: "bottom" },
      "no-caption": { type: "boolean", default: false },
      transparent: { type: "boolean", default: false },
      "page-mode": { type: "string", default: "interactive" },
      runtime: { type: "string", default: "inline" },
      "fragment-css": { type: "string", default: "inline" },
      "no-index": { type: "boolean", default: false },
      check: { type: "boolean", default: false },
      "layout-options": { type: "string" },
    },
  })
  const formats = new Set(list(values.format, FORMATS, "format"))
  const htmlModes = new Set(list(values.html, HTML_MODES, "html"))
  const theme = oneOf(values.theme, ["light", "dark", "auto"] as const, "theme") satisfies Theme
  const legend = oneOf(values.legend, ["bottom", "right", "none"] as const, "legend") satisfies LegendPlacement
  const pageMode = oneOf(values["page-mode"], ["interactive", "static"] as const, "page-mode")
  const runtimeMode = oneOf(values.runtime, ["inline", "external"] as const, "runtime")
  const fragmentCss = oneOf(values["fragment-css"], ["inline", "external"] as const, "fragment-css")
  const scale = Number(values.scale)
  if (!Number.isFinite(scale) || scale <= 0 || scale > 8) throw new UsageError("--scale: a number between 0 and 8")
  const fonts = parseFonts(values.fonts)
  const caption = !values["no-caption"]
  const background = !values.transparent
  const out = path.resolve(values.out)

  const workspace = readInput(positionals[0])
  const layoutOptions = parseLayoutOptions(values["layout-options"])
  const figures = await buildDiagrams(workspace, {
    ...(values.view === undefined ? {} : { views: values.view }),
    ...(layoutOptions === undefined ? {} : { layoutOptions }),
  })
  if (values.check && report(figures) > 0) return 1

  mkdirSync(out, { recursive: true })
  const written: string[] = []
  const write = (name: string, content: string | Buffer): void => {
    writeFileSync(path.join(out, name), content)
    written.push(name)
  }

  const html = formats.has("html")
  const needsRuntime = html && (htmlModes.has("component") || (htmlModes.has("page") && runtimeMode === "external"))
  if (needsRuntime || (html && !values["no-index"])) write(RUNTIME_FILE, readRuntime())
  if (html && htmlModes.has("fragment") && fragmentCss === "external") write(FRAGMENT_CSS_FILE, fragmentStylesheet(fonts))

  // Images have no reader preference to follow, so `auto` draws them light.
  const imageTheme: Theme = theme === "auto" ? "light" : theme
  const browser: Browser | undefined = formats.has("png") || formats.has("svg") ? await launch() : undefined
  try {
    for (const figure of figures) {
      const key = fileKey(figure.key)
      const base = { legend, caption, background } as const
      if (formats.has("json") || (html && htmlModes.has("component"))) write(`${key}.json`, `${JSON.stringify(toDocument(figure), null, 2)}\n`)
      if (browser !== undefined && formats.has("png")) {
        write(`${key}.png`, await renderPng(browser, figure, { ...base, theme: imageTheme, padding: 24, scale }))
      }
      if (browser !== undefined && formats.has("svg")) {
        write(`${key}.svg`, await renderSvg(browser, figure, { ...base, theme: imageTheme, padding: 24, fonts }))
      }
      if (html && htmlModes.has("page")) {
        write(
          `${key}.html`,
          renderPage(figure, { ...base, theme, fonts, mode: pageMode, runtime: runtimeMode === "inline" ? "inline" : { src: RUNTIME_FILE } }),
        )
      }
      if (html && htmlModes.has("fragment")) {
        write(
          `${key}.fragment.html`,
          renderFragment(figure, { ...base, theme, fonts, css: fragmentCss === "inline" ? "inline" : { href: FRAGMENT_CSS_FILE } }),
        )
      }
    }
  } finally {
    await browser?.close()
  }

  if (!values["no-index"]) {
    write(
      "index.html",
      renderIndex(figures, {
        title: workspace.name,
        formats,
        htmlModes: html ? htmlModes : new Set<HtmlMode>(),
        fileKey,
        runtime: RUNTIME_FILE,
      }),
    )
  }
  console.log(`${String(figures.length)} view(s) -> ${path.relative(process.cwd(), out) || "."}/`)
  for (const name of written) console.log(`  ${name}`)
  return 0
}

const views = (argv: readonly string[]): number => {
  const { positionals } = parseArgs({ args: [...argv], allowPositionals: true, options: {} })
  const workspace = readInput(positionals[0])
  for (const view of workspace.views) console.log(`${view.key}\t${view.type}\t${view.name}`)
  return 0
}

const check = async (argv: readonly string[]): Promise<number> => {
  const { values, positionals } = parseArgs({
    args: [...argv],
    allowPositionals: true,
    options: { view: { type: "string", short: "v", multiple: true }, "layout-options": { type: "string" } },
  })
  const layoutOptions = parseLayoutOptions(values["layout-options"])
  const figures = await buildDiagrams(readInput(positionals[0]), {
    ...(values.view === undefined ? {} : { views: values.view }),
    ...(layoutOptions === undefined ? {} : { layoutOptions }),
  })
  return report(figures) === 0 ? 0 : 1
}

const runtime = (argv: readonly string[]): number => {
  const { values } = parseArgs({ args: [...argv], options: { out: { type: "string", short: "o", default: "." } } })
  mkdirSync(values.out, { recursive: true })
  const file = path.join(values.out, RUNTIME_FILE)
  writeFileSync(file, readRuntime())
  console.log(file)
  return 0
}

/** Installs the Chromium build playwright-core expects, with playwright-core's own installer. */
const installBrowser = (): void => {
  const require = createRequire(import.meta.url)
  const cli = path.join(path.dirname(require.resolve("playwright-core/package.json")), "cli.js")
  const result = spawnSync(process.execPath, [cli, "install", "chromium-headless-shell"], { stdio: "inherit" })
  if (result.status !== 0) throw new Error("Chromium install failed (see above)")
}

const setup = async (argv: readonly string[]): Promise<number> => {
  const { values } = parseArgs({ args: [...argv], options: { browser: { type: "boolean", default: false } } })
  if (javaVersion() === undefined) console.warn("warning: Java is not on PATH; the Structurizr CLI needs Java 17+ to parse DSL")
  console.log(`Structurizr CLI: ${await installCli()}`)
  if (values.browser) installBrowser()
  return 0
}

const doctor = (): number => {
  const java = javaVersion()
  const cli = cliPath()
  const chrome = chromePath()
  const rows: readonly (readonly [string, boolean, string])[] = [
    ["Java (DSL input)", java !== undefined, java ?? "not found: install Java 17+, or render exported workspace JSON"],
    ["Structurizr CLI", existsSync(cli), existsSync(cli) ? cli : `not found at ${cli}: run \`swarm-kit-diagram setup\``],
    ["Chromium (PNG, SVG)", chrome !== undefined, chrome ?? "not found: run `swarm-kit-diagram setup --browser`"],
  ]
  for (const [name, ok, detail] of rows) console.log(`${ok ? "ok  " : "MISS"} ${name}: ${detail}`)
  return rows.every(([, ok]) => ok) ? 0 : 1
}

const main = async (argv: readonly string[]): Promise<number> => {
  const [command, ...rest] = argv
  // `render --help` and the like: the one help text covers every command.
  if (rest.includes("--help") || rest.includes("-h")) {
    console.log(HELP)
    return 0
  }
  switch (command) {
    case "render":
      return render(rest)
    case "views":
      return views(rest)
    case "check":
      return check(rest)
    case "runtime":
      return runtime(rest)
    case "setup":
      return setup(rest)
    case "doctor":
      return doctor()
    case "--version":
    case "-V":
      console.log(VERSION)
      return 0
    case undefined:
    case "help":
    case "--help":
    case "-h":
      console.log(HELP)
      return command === undefined ? 1 : 0
    default:
      throw new UsageError(`unknown command '${command}' (try --help)`)
  }
}

main(process.argv.slice(2)).then(
  (code) => {
    process.exitCode = code
  },
  (error: unknown) => {
    const message = error instanceof Error ? error.message : String(error)
    // node:util parseArgs reports an unknown or malformed flag with an ERR_PARSE_ARGS_* code.
    const code = (error as { code?: unknown }).code
    const usage = error instanceof UsageError || (typeof code === "string" && code.startsWith("ERR_PARSE_ARGS"))
    console.error(`swarm-kit-diagram: ${usage && !(error instanceof UsageError) ? `${message.split(". ")[0]} (try --help)` : message}`)
    process.exitCode = usage ? 2 : 1
  },
)
