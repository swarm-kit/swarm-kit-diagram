/**
 * Builds the package into dist/:
 *
 *   dist/assembly-diagram.js   the browser runtime (web component), self-contained: React, the
 *                              design system, its styles for a shadow root, and its fonts
 *   dist/cli.js                the CLI, one ESM file for Node (playwright-core stays a dependency)
 *   dist/svg-capture.js        the script the SVG capture injects into the page
 *   dist/assets/               the vendored styles and fonts the CLI reads at run time
 *
 * Run with `bun run build` (it runs on tsx, so it can use the same style builder as the CLI).
 */
import { build } from "esbuild"
import { chmodSync, cpSync, mkdirSync, rmSync, statSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { diagramCss, fontFaceCss } from "../src/render/styles.ts"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const dist = path.join(root, "dist")
rmSync(dist, { recursive: true, force: true })
mkdirSync(dist, { recursive: true })

/**
 * Two builds of the runtime: assembly-diagram.js carries the fonts, for host pages; the iframe
 * page inlines runtime-nofonts.js, since the page's own stylesheet already declares them.
 */
for (const [file, fonts] of [
  ["assembly-diagram.js", fontFaceCss("embed")],
  ["runtime-nofonts.js", ""],
] as const) {
  await build({
    entryPoints: [path.join(root, "src/embed/runtime.tsx")],
    outfile: path.join(dist, file),
    bundle: true,
    minify: true,
    format: "iife",
    platform: "browser",
    target: ["es2022", "chrome111", "firefox113", "safari16.4"],
    jsx: "automatic",
    legalComments: "eof",
    define: {
      "process.env.NODE_ENV": '"production"',
      __ADG_SHADOW_CSS__: JSON.stringify(diagramCss({ scope: "shadow", fonts: "system" })),
      __ADG_FONTS_CSS__: JSON.stringify(fonts),
    },
  })
}

await build({
  entryPoints: [path.join(root, "src/cli.ts")],
  outfile: path.join(dist, "cli.js"),
  bundle: true,
  format: "esm",
  platform: "node",
  target: "node22",
  jsx: "automatic",
  external: ["playwright-core"],
  define: { "process.env.NODE_ENV": '"production"' },
  // Bundled CommonJS (elkjs, React) still calls require(); give the ESM bundle one.
  banner: {
    js: [
      "#!/usr/bin/env node",
      'import { createRequire as __adgCreateRequire } from "node:module";',
      "const require = __adgCreateRequire(import.meta.url);",
    ].join("\n"),
  },
})
chmodSync(path.join(dist, "cli.js"), 0o755)

cpSync(path.join(root, "src/render/browser/svg-capture.js"), path.join(dist, "svg-capture.js"))
mkdirSync(path.join(dist, "assets/styles"), { recursive: true })
for (const name of ["diagram.css", "tokens.css"]) {
  cpSync(path.join(root, "src/vendor/assembly/styles", name), path.join(dist, "assets/styles", name))
}
cpSync(path.join(root, "src/vendor/assembly/assets/fonts"), path.join(dist, "assets/assets/fonts"), { recursive: true })

const kb = (file: string): string => `${String(Math.round(statSync(path.join(dist, file)).size / 1024))} KB`
console.log(`dist/assembly-diagram.js ${kb("assembly-diagram.js")}, runtime-nofonts.js ${kb("runtime-nofonts.js")}, cli.js ${kb("cli.js")}`)
