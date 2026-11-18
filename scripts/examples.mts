/**
 * Renders every example in examples/<name>/workspace.dsl to examples/<name>/images/: a light and a
 * dark SVG per view (K.svg, K.dark.svg), which the READMEs show with <picture> so GitHub picks
 * the one that matches the reader's theme. Run after a change that alters how diagrams look:
 *
 *   bun run examples
 */
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { buildDiagrams } from "../src/core/build.ts"
import { readWorkspace } from "../src/core/structurizr.ts"
import { launch } from "../src/render/browser.ts"
import { renderSvg } from "../src/render/image.ts"

const examples = path.join(path.dirname(fileURLToPath(import.meta.url)), "../examples")
const browser = await launch()
try {
  for (const name of readdirSync(examples, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name).sort()) {
    const dir = path.join(examples, name)
    const figures = await buildDiagrams(readWorkspace({ file: path.join(dir, "workspace.dsl") }))
    const images = path.join(dir, "images")
    rmSync(images, { recursive: true, force: true })
    mkdirSync(images, { recursive: true })
    for (const figure of figures) {
      const base = { legend: "bottom", caption: true, background: true, padding: 24, fonts: "embed" } as const
      writeFileSync(path.join(images, `${figure.key}.svg`), await renderSvg(browser, figure, { ...base, theme: "light" }))
      writeFileSync(path.join(images, `${figure.key}.dark.svg`), await renderSvg(browser, figure, { ...base, theme: "dark" }))
    }
    console.log(`${name}: ${figures.map((f) => f.key).join(", ")}`)
  }
} finally {
  await browser.close()
}
