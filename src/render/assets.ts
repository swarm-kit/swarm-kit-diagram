/**
 * The design system's styles and fonts, and the embed runtime, read from disk. In the source tree
 * they are under src/vendor/assembly and dist/; in the published package the build copies them to
 * dist/assets beside the CLI, so both places are tried.
 */
import { existsSync, readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const here = path.dirname(fileURLToPath(import.meta.url))

/** The folder holding styles/ and assets/fonts/, first match wins. */
const vendorRoot = (): string => {
  const candidates = [path.join(here, "assets"), path.join(here, "../vendor/assembly"), path.join(here, "../../src/vendor/assembly")]
  const found = candidates.find((dir) => existsSync(path.join(dir, "styles/diagram.css")))
  if (found === undefined) throw new Error(`swarm-kit-diagram: design system styles not found (looked in ${candidates.join(", ")})`)
  return found
}

export const readStyle = (name: "diagram.css" | "tokens.css"): string =>
  readFileSync(path.join(vendorRoot(), "styles", name), "utf8")

export const readFont = (file: string): Buffer => readFileSync(path.join(vendorRoot(), "assets/fonts", file))

/** The script the SVG capture runs inside the page (render/browser/svg-capture.js). */
export const readCapture = (): string => {
  const candidates = [path.join(here, "svg-capture.js"), path.join(here, "browser/svg-capture.js")]
  const found = candidates.find((file) => existsSync(file))
  if (found === undefined) throw new Error(`swarm-kit-diagram: svg-capture.js not found (looked in ${candidates.join(", ")})`)
  return readFileSync(found, "utf8")
}

/**
 * The browser runtime the interactive embeds load (the web component and the iframe page): built
 * by scripts/build.mts into dist/. `nofonts` leaves the fonts out, for a page that declares them.
 * Missing in a source checkout until `bun run build` has run.
 */
export const readRuntime = (variant: "full" | "nofonts" = "full"): string => {
  const file = variant === "full" ? "assembly-diagram.js" : "runtime-nofonts.js"
  const candidates = [path.join(here, file), path.join(here, "../../dist", file)]
  const found = candidates.find((file) => existsSync(file))
  if (found === undefined) {
    throw new Error("swarm-kit-diagram: the embed runtime is not built; run `bun run build` first")
  }
  return readFileSync(found, "utf8")
}
