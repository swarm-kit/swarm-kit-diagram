import type { Browser } from "playwright-core"
import { afterAll, beforeAll, describe, expect, it } from "vitest"
import { chromePath, launch } from "../src/render/browser.ts"
import { renderPng, renderSvg } from "../src/render/image.ts"
import { bigBank, figure } from "./helpers.ts"

describe.skipIf(chromePath() === undefined)("images", () => {
  let browser: Browser
  beforeAll(async () => {
    browser = await launch()
  })
  afterAll(async () => {
    await browser.close()
  })

  const options = { theme: "light", legend: "bottom", caption: true, background: true, padding: 24 } as const

  it("renders a PNG at the asked density", async () => {
    const view = await figure(bigBank(), "SystemContext")
    const png = await renderPng(browser, view, { ...options, scale: 2 })
    expect(png.subarray(1, 4).toString()).toBe("PNG")
    const width = png.readUInt32BE(16)
    expect(width).toBeGreaterThan(2 * view.diagram.bounds.width)
  })

  it("renders plain SVG: no CSS, no HTML, no colours a viewer cannot read", async () => {
    const view = await figure(bigBank(), "Containers")
    const svg = await renderSvg(browser, view, { ...options, fonts: "system" })
    expect(svg.startsWith('<svg xmlns="http://www.w3.org/2000/svg"')).toBe(true)
    for (const banned of ["<foreignObject", "class=", "<div", "<span", "oklab(", "color-mix(", "color(srgb", "var(--", "<script"]) {
      expect(svg, banned).not.toContain(banned)
    }
    // Every element and relationship label is there as text.
    for (const node of view.diagram.nodes) expect(svg).toContain(node.title.slice(0, 12))
    // A boundary's type is "[Software system]" only through CSS ::before and ::after.
    expect(svg).toContain(">[<")
    expect(svg).toContain(">Software system<")
  })

  it("gives each SVG its own ids, so several can be inlined in one page", async () => {
    const a = await renderSvg(browser, await figure(bigBank(), "Containers"), { ...options, fonts: "system" })
    const b = await renderSvg(browser, await figure(bigBank(), "SystemContext"), { ...options, fonts: "system" })
    const ids = (svg: string) => new Set([...svg.matchAll(/ id="([^"]+)"/g)].map((m) => m[1]))
    const shared = [...ids(a)].filter((id) => ids(b).has(id))
    expect(shared).toEqual([])
  })
})
