/**
 * The CSS a rendered diagram needs, built from the vendored design system for where it will live:
 *
 *   page      a document of its own (the iframe page, the PNG and SVG capture): tokens on :root,
 *             theme from `data-theme` on <html>;
 *   shadow    inside the web component's shadow root: tokens on its `.adg-root` element, theme
 *             from that element's `data-theme`, and nothing leaks either way;
 *   fragment  pasted into someone else's page: every rule under a doubled scope class so it
 *             outranks the host's ordinary rules, a reset of the HTML elements it renders, and
 *             renamed keyframes and font families so nothing collides with the host's own.
 *
 * Themes: `light`, `dark`, or `auto`, which follows the reader's `prefers-color-scheme`.
 * Fonts: `embed` inlines the woff2 files as data URIs (self-contained, ~150 KB), `system` uses the
 * fallback stacks the tokens name, or a base URL where the font files are served.
 */
import postcss, { type Root, type Rule } from "postcss"
import { readFont, readStyle } from "./assets.ts"

export type Theme = "light" | "dark" | "auto"
export type Fonts = "embed" | "system" | Readonly<{ baseUrl: string }>
export type Scope = "page" | "shadow" | "fragment"

/** The class every fragment carries; doubled in selectors for specificity (0,2,0). */
export const FRAGMENT_CLASS = "assembly-diagram"
const FRAGMENT = `.${FRAGMENT_CLASS}.${FRAGMENT_CLASS}`

/** The design system's families, renamed so a host's own "Inter" is neither used nor replaced. */
const FAMILIES: readonly Readonly<{ name: string; renamed: string; files: readonly Readonly<{ weight: number; file: string }>[] }>[] = [
  {
    name: "Inter",
    renamed: "Assembly Inter",
    files: [
      { weight: 400, file: "inter-latin-400-normal.woff2" },
      { weight: 500, file: "inter-latin-500-normal.woff2" },
      { weight: 600, file: "inter-latin-600-normal.woff2" },
    ],
  },
  {
    name: "JetBrains Mono",
    renamed: "Assembly JetBrains Mono",
    files: [
      { weight: 400, file: "jetbrains-mono-latin-400-normal.woff2" },
      { weight: 500, file: "jetbrains-mono-latin-500-normal.woff2" },
    ],
  },
  {
    name: "Space Grotesk",
    renamed: "Assembly Space Grotesk",
    files: [
      { weight: 500, file: "space-grotesk-latin-500-normal.woff2" },
      { weight: 600, file: "space-grotesk-latin-600-normal.woff2" },
    ],
  },
]

const renameFamilies = (value: string): string =>
  FAMILIES.reduce((text, family) => text.replaceAll(`"${family.name}"`, `"${family.renamed}"`), value)

/**
 * The @font-face rules for the renamed families. In a shadow root they have no effect (browsers
 * only load fonts declared in the document), so the web component adds these to the document.
 */
export const fontFaceCss = (fonts: Fonts): string => {
  if (fonts === "system") return ""
  return FAMILIES.flatMap((family) =>
    family.files.map(({ weight, file }) => {
      const src =
        fonts === "embed"
          ? `url("data:font/woff2;base64,${readFont(file).toString("base64")}") format("woff2")`
          : `url("${fonts.baseUrl.replace(/\/?$/, "/")}${file}") format("woff2")`
      return `@font-face{font-family:"${family.renamed}";font-weight:${String(weight)};font-style:normal;font-display:swap;src:${src}}`
    }),
  ).join("\n")
}

/** Where tokens and the theme attribute attach, per scope. */
const themeSelector = (scope: Scope, theme: Theme | undefined): string => {
  const attribute = theme === undefined ? "" : `[data-theme="${theme}"]`
  switch (scope) {
    case "page":
      return `:root${attribute}`
    case "shadow":
      // The web component's root element inside its shadow root carries the theme.
      return `.adg-root${attribute}`
    case "fragment":
      return `${FRAGMENT}${attribute}`
  }
}

/**
 * The tokens, scoped: the light colours as the default (and for `data-theme="light"`), the dark
 * ones for `data-theme="dark"` and, under `prefers-color-scheme: dark`, for `data-theme="auto"`.
 * The type-style classes tokens.css also defines are left out: they are global class names.
 */
const tokensCss = (scope: Scope): string => {
  const tokens = postcss.parse(readStyle("tokens.css"))
  const blocks = new Map<string, Rule>()
  tokens.walkRules((rule) => {
    const inMedia = rule.parent?.type === "atrule"
    const key = `${inMedia ? "media:" : ""}${rule.selector.replace(/\s+/g, " ")}`
    blocks.set(key, rule)
  })
  const declarations = (key: string): string => {
    const rule = blocks.get(key)
    if (rule === undefined) throw new Error(`swarm-kit-diagram: tokens.css has no '${key}' block`)
    return (rule.nodes ?? [])
      .flatMap((node) => (node.type === "decl" ? [`${node.prop}:${renameFamilies(node.value)}`] : []))
      .join(";")
  }
  const light = declarations(':root, [data-theme="light"]')
  const dark = declarations('[data-theme="dark"]')
  const base = declarations(":root")
  const reducedMotion = declarations("media::root")
  return [
    `${themeSelector(scope, undefined)},${themeSelector(scope, "light")}{${light}}`,
    `${themeSelector(scope, "dark")}{${dark}}`,
    `@media (prefers-color-scheme: dark){${themeSelector(scope, "auto")}{${dark}}}`,
    `${themeSelector(scope, undefined)}{${base}}`,
    `@media (prefers-reduced-motion: reduce){${themeSelector(scope, undefined)}{${reducedMotion}}}`,
  ].join("\n")
}

/** The component rules, scoped for a fragment: prefixed selectors, renamed keyframes. */
const componentsCss = (scope: Scope): string => {
  const css = readStyle("diagram.css")
  if (scope !== "fragment") return css
  const root: Root = postcss.parse(css)
  const renamed = (name: string): string => `assembly-diagram-${name}`
  const keyframes = new Set<string>()
  root.walkAtRules(/keyframes$/i, (at) => {
    keyframes.add(at.params)
    at.params = renamed(at.params)
  })
  root.walkRules((rule) => {
    if (rule.parent?.type === "atrule" && /keyframes$/i.test(rule.parent.name)) return
    rule.selectors = rule.selectors.map((selector) => `${FRAGMENT} ${selector}`)
  })
  root.walkDecls(/^animation(-name)?$/, (decl) => {
    decl.value = decl.value
      .split(/(\s+|,)/)
      .map((word) => (keyframes.has(word) ? renamed(word) : word))
      .join("")
  })
  return root.toString()
}

/**
 * A fragment shares the host's cascade, so the HTML elements it renders are reset to the
 * browser's defaults first (a host's `p { margin }` or `ul { padding }` no longer reaches in), at
 * a specificity the design system's own rules then outrank. SVG elements are not reverted (`all`
 * would also drop their geometry); their box and text properties are reset instead. What still
 * gets through: `!important` host rules, ID selectors, and paint set on bare SVG element
 * selectors (`path { stroke: … }`). The web component or the iframe page isolates completely.
 */
const FRAGMENT_RESET = [
  `${FRAGMENT},${FRAGMENT} :where(div,span,p,ul,ol,li,section,figure,figcaption,button){all:revert}`,
  // <svg> and <foreignObject> boxes take margins, padding, and text styles from a host's `*` or
  // `svg` rules; those are reset here, while their geometry (x, y, width, height, d) is left alone.
  `${FRAGMENT} :where(svg,foreignObject){margin:0;padding:0;border:0;max-width:none;max-height:none;min-width:0;min-height:0;` +
    "box-sizing:content-box;font:inherit;letter-spacing:inherit;word-spacing:inherit;line-height:inherit;" +
    "text-transform:inherit;text-align:inherit;text-indent:inherit;white-space:inherit}",
  // Inside an SVG (a relationship's <g> holds its label's foreignObject), text styles pass down.
  `${FRAGMENT} :where(svg *){letter-spacing:inherit;word-spacing:inherit;text-transform:inherit;text-indent:inherit}`,
  // An icon's paths take their paint from the icon's <svg>; a host's `svg path` rule must not win.
  `${FRAGMENT} .sk-icon *{fill:inherit;stroke:inherit;stroke-width:inherit;stroke-linecap:inherit;stroke-linejoin:inherit;opacity:1}`,
].join("\n")

/** The root box's own look: the font and text colour everything inherits, and the surface. */
const rootCss = (scope: Scope): string => {
  const selector = scope === "page" ? "body" : themeSelector(scope, undefined)
  return [
    `${selector}{font-family:var(--font-sans);color:var(--ink);-webkit-font-smoothing:antialiased;line-height:normal;text-align:left}`,
    // The fragment's root is a block in the host's flow that scrolls what does not fit.
    // Inherited properties: `all: revert` makes the root inherit them from the host, so they are
    // set here, to what the design system assumes.
    scope === "fragment"
      ? `${selector}{display:block;max-width:100%;overflow-x:auto;box-sizing:border-box;font-size:16px;font-weight:400;` +
        "font-style:normal;font-variant:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;" +
        "text-shadow:none;white-space:normal;direction:ltr;visibility:visible;cursor:auto;list-style:none}"
      : "",
    scope === "page" ? "body{margin:0;background:var(--surface)}" : "",
  ].join("\n")
}

export type CssOptions = Readonly<{ scope: Scope; fonts: Fonts }>

/** Every rule a diagram needs in that scope. Fonts are included except for the shadow scope. */
export const diagramCss = ({ scope, fonts }: CssOptions): string =>
  [
    scope === "shadow" ? "" : fontFaceCss(fonts),
    tokensCss(scope),
    scope === "fragment" ? FRAGMENT_RESET : "",
    rootCss(scope),
    componentsCss(scope),
    staticCss(scope),
  ]
    .filter((part) => part !== "")
    .join("\n")

/** The static renderer's own few rules (render/static.tsx), scoped like the rest. */
const staticCss = (scope: Scope): string => {
  const p = scope === "fragment" ? `${FRAGMENT} ` : ""
  return [
    `${p}.adg-static{position:relative;display:flex;flex-direction:column;gap:16px;box-sizing:border-box}`,
    `${p}.adg-static__world{position:relative;flex:none}`,
    `${p}.adg-static__legend{display:flex}`,
    `${p}.adg-static__legend .sk-diagram-legend{position:static}`,
    `${p}.adg-static__caption{font-size:13px;line-height:18px;color:var(--ink-muted);margin:0}`,
    `${p}.adg-static--surface{background:var(--surface)}`,
  ].join("\n")
}
