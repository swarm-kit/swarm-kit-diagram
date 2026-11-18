#!/usr/bin/env node
// Copies the part of the Assembly design system the diagrams use into src/vendor/assembly, so this
// tool has no dependency on the design system package. It is a deliberate copy: re-run it to pull
// a newer design system, and review the diff.
//
//   node scripts/vendor.mjs [--from <path to the DS package root>]
//
// The default source is the design system repo's package (~/projects/swarmkit-assembly/packages/ui)
// when it exists, else the copy the documentation app installed.
//
// What is copied:
//   - every source file the diagram entry points reach (found by bundling them with a metafile),
//     at the same relative path, untouched;
//   - tokens.css, as is (colours for light and dark, spacing, fonts);
//   - the rules of components.css whose selectors use an sk-* class those files render, with the
//     keyframes they animate with, as diagram.css;
//   - the fonts the tokens load.
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import postcss from "postcss"

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(here, "..")
const out = path.join(root, "src/vendor/assembly")

const candidates = [
  path.join(os.homedir(), "projects/swarmkit-assembly/packages/ui"),
  path.join(os.homedir(), "projects/documentation/app/node_modules/@swarm-kit/assembly"),
]
const fromFlag = process.argv.indexOf("--from")
const from = fromFlag === -1 ? candidates.find((c) => existsSync(path.join(c, "package.json"))) : process.argv[fromFlag + 1]
if (from === undefined || !existsSync(path.join(from, "package.json"))) {
  console.error("vendor: no design system package found; pass --from <path>")
  process.exit(1)
}
const pkg = JSON.parse(readFileSync(path.join(from, "package.json"), "utf8"))
const src = path.join(from, "src")

/** The design system modules the diagrams import, by their package export. */
const ENTRIES = ["diagram-canvas", "diagram-kinds", "diagram-node-size", "diagram-routing", "diagram-legend-entries"]
const entryFiles = ENTRIES.map((name) => {
  const target = pkg.exports?.[`./${name}`]
  if (typeof target !== "string") throw new Error(`vendor: ${pkg.name} has no export ./${name}`)
  return path.join(from, target)
})

/**
 * Every file the entry points reach through relative imports, type-only imports included (a
 * bundler's metafile leaves those out), with the .d.ts beside a .js module so it still typechecks.
 */
const EXTENSIONS = ["", ".ts", ".tsx", ".js", "/index.ts", "/index.tsx", "/index.js"]
const resolveImport = (fromFile, spec) => {
  const base = path.resolve(path.dirname(fromFile), spec)
  const found = EXTENSIONS.map((ext) => base + ext).find((file) => existsSync(file) && !statSync(file).isDirectory())
  if (found === undefined) throw new Error(`vendor: cannot resolve ${spec} from ${fromFile}`)
  return found
}
const reachedSet = new Set()
const visit = (file) => {
  if (reachedSet.has(file)) return
  reachedSet.add(file)
  const declaration = file.replace(/\.js$/, ".d.ts")
  if (declaration !== file && existsSync(declaration)) reachedSet.add(declaration)
  const text = readFileSync(file, "utf8")
  for (const m of text.matchAll(/(?:from|import)\s*["'](\.{1,2}\/[^"']+)["']/g)) visit(resolveImport(file, m[1]))
}
for (const entry of entryFiles) visit(entry)
const reached = [...reachedSet].filter((file) => file.startsWith(src + path.sep)).sort()

rmSync(out, { recursive: true, force: true })
for (const file of reached) {
  const target = path.join(out, path.relative(src, file))
  mkdirSync(path.dirname(target), { recursive: true })
  cpSync(file, target)
}

// The classes those files render, and the CSS that styles them.
const sources = reached.map((file) => readFileSync(file, "utf8")).join("\n")
const classes = new Set([...sources.matchAll(/sk-[a-z0-9_-]+/g)].map((m) => m[0]))
// cn() joins modifiers built at runtime (`sk-diagram-node--${tone}`), so keep every class that
// extends a used block with -- or __ too.
const blocks = [...classes].filter((c) => c.endsWith("--") || c.endsWith("-") || c.endsWith("__"))
const used = (cls) => classes.has(cls) || blocks.some((prefix) => cls.startsWith(prefix))
const selectorUsed = (selector) => {
  const found = [...selector.matchAll(/\.(sk-[a-z0-9_-]+)/g)].map((m) => m[1])
  return found.length > 0 && found.every(used)
}

const components = postcss.parse(readFileSync(path.join(src, "styles/components.css"), "utf8"))
components.walkRules((rule) => {
  if (rule.parent?.type === "atrule" && /keyframes/i.test(rule.parent.name)) return
  const kept = rule.selectors.filter(selectorUsed)
  if (kept.length === 0) rule.remove()
  else rule.selectors = kept
})
// Keyframes only when something kept animates with them.
const animations = new Set()
components.walkDecls(/^animation(-name)?$/, (decl) => {
  for (const word of decl.value.split(/[\s,]+/)) animations.add(word)
})
components.walkAtRules(/keyframes$/i, (at) => {
  if (!animations.has(at.params)) at.remove()
})
// Drop at-rules left empty, innermost first.
const prune = (node) => {
  for (const child of node.nodes ?? []) prune(child)
  if (node.type === "atrule" && !/keyframes|font-face/i.test(node.name) && (node.nodes?.length ?? 1) === 0) node.remove()
}
prune(components)
// The source's comments describe rules that are mostly gone now; the source keeps them.
components.walkComments((comment) => {
  comment.remove()
})

mkdirSync(path.join(out, "styles"), { recursive: true })
writeFileSync(
  path.join(out, "styles/diagram.css"),
  `/* Vendored from ${pkg.name}@${pkg.version} components.css: only the rules the diagram components render. */\n` +
    components.toString().trim() +
    "\n",
)
cpSync(path.join(src, "styles/tokens.css"), path.join(out, "styles/tokens.css"))
cpSync(path.join(src, "assets/fonts"), path.join(out, "assets/fonts"), { recursive: true })
// The fonts are under the SIL Open Font License, which has to travel with them.
cpSync(path.join(here, "fonts-OFL.txt"), path.join(out, "assets/fonts/OFL.txt"))

writeFileSync(
  path.join(out, "VENDOR.md"),
  [
    "# Vendored design system",
    "",
    `Copied from \`${pkg.name}@${pkg.version}\` by \`scripts/vendor.mjs\`. Do not edit these files:`,
    "re-run the script against a newer design system and review the diff instead.",
    "",
    `- ${reached.length} source files, reached from: ${ENTRIES.join(", ")}`,
    `- styles/diagram.css: ${components.nodes.length} top-level rules of components.css`,
    "- styles/tokens.css and assets/fonts: as published, plus the fonts' license (assets/fonts/OFL.txt)",
    "",
  ].join("\n"),
)
console.log(`vendored ${pkg.name}@${pkg.version} from ${from}: ${reached.length} files, ${classes.size} classes`)
