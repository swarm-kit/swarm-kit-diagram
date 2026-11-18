/**
 * PNG and SVG: the static diagram (render/static.tsx) captured in headless Chromium. The PNG is a
 * screenshot of it; the SVG is the same page converted element by element into plain SVG
 * (render/browser/svg-capture.js), so both match the HTML exactly.
 */
import { createHash } from "node:crypto"
import type { Browser } from "playwright-core"
import type { DiagramFigure } from "../core/types.ts"
import { readCapture } from "./assets.ts"
import { openDocument } from "./browser.ts"
import { renderStatic } from "./static-markup.tsx"
import type { StaticOptions } from "./static.tsx"
import { diagramCss, fontFaceCss, type Fonts } from "./styles.ts"

/** A document holding just the static diagram, with the design system's styles and fonts inline. */
export const staticDocument = (figure: DiagramFigure, options: StaticOptions, fonts: Fonts = "embed"): string =>
  [
    "<!doctype html>",
    `<html lang="en" data-theme="${options.theme}">`,
    "<head>",
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    `<title>${escapeHtml(figure.caption)}</title>`,
    `<style>${diagramCss({ scope: "page", fonts })}</style>`,
    // The capture measures the diagram's own box, so the page around it must add nothing.
    "<style>body{background:transparent}</style>",
    "</head>",
    `<body>${renderStatic(figure, options)}</body>`,
    "</html>",
  ].join("\n")

export const escapeHtml = (text: string): string =>
  text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;")

export type ImageOptions = StaticOptions & Readonly<{ scale: number }>

export const renderPng = async (browser: Browser, figure: DiagramFigure, options: ImageOptions): Promise<Buffer> => {
  const page = await openDocument(browser, staticDocument(figure, options), options.scale)
  try {
    const root = page.locator(".adg-static")
    const box = await root.boundingBox()
    if (box !== null) await page.setViewportSize({ width: Math.ceil(box.width), height: Math.ceil(box.height) })
    return await root.screenshot({ omitBackground: !options.background, animations: "disabled" })
  } finally {
    await page.close()
  }
}

export type SvgOptions = StaticOptions &
  Readonly<{
    /** Fonts inside the SVG: `embed` makes it self-contained; `system` keeps it small and relies on
     * the viewer having Inter and JetBrains Mono, else the fallback stacks. */
    fonts: Fonts
  }>

/** A prefix for the SVG's ids: the view's key and a hash of the diagram, so two never clash. */
const idPrefix = (figure: DiagramFigure): string => {
  const hash = createHash("sha1").update(JSON.stringify(figure.diagram)).digest("hex").slice(0, 8)
  return `adg-${figure.key.replace(/[^A-Za-z0-9_-]/g, "-")}-${hash}`
}

/** What the capture script returns: the SVG's inner markup and its size. */
type Captured = Readonly<{ width: number; height: number; defs: string; body: string }>

export const renderSvg = async (browser: Browser, figure: DiagramFigure, options: SvgOptions): Promise<string> => {
  const page = await openDocument(browser, staticDocument(figure, options), 1)
  try {
    await page.addScriptTag({ content: readCapture() })
    const captured = await page.evaluate<Captured>(
      `window.__assemblyDiagramCapture(document.querySelector('.adg-static'), ${JSON.stringify(idPrefix(figure))})`,
    )
    const fontCss = fontFaceCss(options.fonts)
    // Without embedded fonts, name the design system's families as a viewer would have them installed.
    const body = options.fonts === "system" ? captured.body.replaceAll("Assembly ", "") : captured.body
    return [
      `<svg xmlns="http://www.w3.org/2000/svg" width="${String(captured.width)}" height="${String(captured.height)}"`,
      ` viewBox="0 0 ${String(captured.width)} ${String(captured.height)}" role="img">`,
      `<title>${escapeHtml(figure.caption)}</title>`,
      "<defs>",
      fontCss === "" ? "" : `<style>${fontCss}</style>`,
      captured.defs,
      "</defs>",
      body,
      "</svg>",
      "",
    ].join("")
  } finally {
    await page.close()
  }
}
