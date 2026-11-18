import postcss from "postcss"
import { describe, expect, it } from "vitest"
import { isDiagramDocument, jsonForScript, toDocument } from "../src/embed/document.ts"
import { renderFragment, renderPage, snippets } from "../src/render/html.ts"
import { diagramCss, FRAGMENT_CLASS } from "../src/render/styles.ts"
import { bigBank, bigBankRenamed, figure } from "./helpers.ts"

const HOSTILE = '</script><img src=x onerror="alert(1)"><!--'

describe("escaping workspace text", () => {
  it("keeps JSON inside a <script> from ending it", () => {
    const json = jsonForScript({ title: HOSTILE, sep: " " })
    expect(json).not.toContain("</script")
    expect(json).not.toContain("<")
    expect(JSON.parse(json)).toEqual({ title: HOSTILE, sep: " " })
  })

  it("escapes element names in the fragment and the iframe page", async () => {
    const hostile = await figure(bigBankRenamed("Personal Banking Customer", HOSTILE), "SystemContext")
    const base = { theme: "auto", fonts: "system", legend: "bottom", caption: true, background: true } as const
    const fragment = renderFragment(hostile, { ...base, css: "none" })
    const page = renderPage(hostile, { ...base, mode: "interactive", runtime: { src: "assembly-diagram.js" } })
    for (const html of [fragment, page]) {
      expect(html).not.toContain("<img src=x")
      expect(html.match(/<\/script>/g)?.length ?? 0).toBe(html.match(/<script/g)?.length ?? 0)
    }
    expect(fragment).toContain("&lt;/script&gt;&lt;img src=x")
  })

  it("escapes names and paths in the snippets", async () => {
    const hostile = await figure(bigBankRenamed("Personal Banking Customer", HOSTILE), "SystemContext")
    const s = snippets(hostile, { runtime: "a.js", page: 'p".html', json: "x.json", svg: "x.svg" })
    expect(s.iframe).toContain('src="p&quot;.html"')
    expect(s.componentInline).not.toContain("<img src=x onerror")
  })
})

describe("the json document", () => {
  it("round-trips and is recognised", async () => {
    const doc = toDocument(await figure(bigBank(), "Containers"))
    expect(isDiagramDocument(JSON.parse(JSON.stringify(doc)))).toBe(true)
    expect(isDiagramDocument({ ...doc, version: 2 })).toBe(false)
    expect(isDiagramDocument({ nodes: [] })).toBe(false)
  })
})

describe("scoped styles", () => {
  const selectors = (css: string): readonly string[] => {
    const found: string[] = []
    postcss.parse(css).walkRules((rule) => {
      if (rule.parent?.type === "atrule" && /keyframes$/i.test((rule.parent as postcss.AtRule).name)) return
      found.push(...rule.selectors)
    })
    return found
  }

  it("puts every fragment rule under the doubled scope class", () => {
    const scope = `.${FRAGMENT_CLASS}.${FRAGMENT_CLASS}`
    const all = selectors(diagramCss({ scope: "fragment", fonts: "system" }))
    expect(all.length).toBeGreaterThan(100)
    expect(all.filter((s) => !s.startsWith(scope))).toEqual([])
  })

  it("renames the fragment's keyframes and font families", () => {
    const css = diagramCss({ scope: "fragment", fonts: "embed" })
    const keyframes = [...css.matchAll(/@keyframes\s+([\w-]+)/g)].map((m) => m[1])
    expect(keyframes.length).toBeGreaterThan(0)
    for (const name of keyframes) expect(name).toMatch(/^assembly-diagram-/)
    expect(css).toContain('font-family:"Assembly Inter"')
    expect(css).not.toMatch(/font-family:\s*"Inter"/)
  })

  it("keeps the shadow root's tokens off :root and :host", () => {
    const css = diagramCss({ scope: "shadow", fonts: "system" })
    expect(css).not.toContain(":root")
    expect(css).toContain('.adg-root[data-theme="dark"]')
    expect(css).toMatch(/@media \(prefers-color-scheme: dark\)\{\.adg-root\[data-theme="auto"\]/)
  })
})
