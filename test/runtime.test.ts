import { existsSync, readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import type { Browser } from "playwright-core"
import { afterAll, beforeAll, describe, expect, it } from "vitest"
import { jsonForScript, toDocument } from "../src/embed/document.ts"
import { chromePath, launch } from "../src/render/browser.ts"
import { bigBank, figure } from "./helpers.ts"

const runtimeFile = path.join(path.dirname(fileURLToPath(import.meta.url)), "../dist/assembly-diagram.js")

/** The web component, from the built runtime; needs `bun run build` and a Chrome. */
describe.skipIf(chromePath() === undefined || !existsSync(runtimeFile))("the <assembly-diagram> element", () => {
  let browser: Browser
  let runtime: string
  let element: string
  beforeAll(async () => {
    browser = await launch()
    runtime = readFileSync(runtimeFile, "utf8").replaceAll("</script", "<\\/script")
    const doc = toDocument(await figure(bigBank(), "SystemContext"))
    element = `<assembly-diagram theme="light" height="500"><script type="application/json">${jsonForScript(doc)}</script></assembly-diagram>`
  })
  afterAll(async () => {
    await browser.close()
  })

  /** What the element shows: its error, or how many nodes it drew. */
  const outcome = async (body: string, after?: string): Promise<string> => {
    const page = await browser.newPage()
    try {
      await page.setContent(`<!doctype html><html><head><meta charset="utf-8"></head><body>${body}</body></html>`)
      if (after !== undefined) await page.evaluate(after)
      await page.waitForFunction("document.querySelector('assembly-diagram')?.shadowRoot?.querySelector('.adg-error, .sk-diagram-node') != null")
      return await page.evaluate<string>(
        "(() => { const r = document.querySelector('assembly-diagram').shadowRoot; return r.querySelector('.adg-error')?.textContent ?? `${r.querySelectorAll('.sk-diagram-node').length} nodes` })()",
      )
    } finally {
      await page.close()
    }
  }

  it("draws when the script runs in <head>, before the element's data is parsed", async () => {
    expect(await outcome(`<script>${runtime}</script>${element}`)).toBe("4 nodes")
  })

  it("draws when the script runs after the element", async () => {
    expect(await outcome(`${element}<script>${runtime}</script>`)).toBe("4 nodes")
  })

  it("draws an element inserted later", async () => {
    expect(await outcome(`<script>${runtime}</script><div id="host"></div>`, `document.getElementById("host").innerHTML = ${JSON.stringify(element)}`)).toBe("4 nodes")
  })

  it("says what is missing when there is no data", async () => {
    expect(await outcome(`<script>${runtime}</script><assembly-diagram></assembly-diagram>`)).toMatch(/no diagram data: give the element a src attribute/)
  })
})
