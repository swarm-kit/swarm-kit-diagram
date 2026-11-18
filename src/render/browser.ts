/**
 * The headless Chromium the PNG and SVG outputs are captured in. Text is laid out by a real
 * browser engine, with the design system's own CSS and fonts, so the picture is what a reader of
 * the HTML sees. One browser serves a whole run; each diagram gets its own page.
 *
 * Which Chromium: SWARM_KIT_DIAGRAM_CHROME if set; else the one `swarm-kit-diagram setup` installs
 * for playwright-core; else an installed Chrome or Chromium.
 */
import { existsSync } from "node:fs"
import { chromium, type Browser, type Page } from "playwright-core"

const SYSTEM_CHROMES: readonly string[] = [
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
]

export class BrowserUnavailableError extends Error {
  constructor() {
    super(
      "PNG and SVG output need Chromium. Run `swarm-kit-diagram setup --browser`, or set " +
        "SWARM_KIT_DIAGRAM_CHROME to a Chrome or Chromium executable.",
    )
    this.name = "BrowserUnavailableError"
  }
}

/** The executable to launch, or undefined when there is none. */
export const chromePath = (): string | undefined => {
  const override = process.env["SWARM_KIT_DIAGRAM_CHROME"]
  if (override !== undefined) return override
  const bundled = (() => {
    try {
      return chromium.executablePath()
    } catch {
      return undefined
    }
  })()
  return [bundled, ...SYSTEM_CHROMES].find((candidate) => candidate !== undefined && existsSync(candidate))
}

export const launch = async (): Promise<Browser> => {
  const executablePath = chromePath()
  if (executablePath === undefined) throw new BrowserUnavailableError()
  return chromium.launch({ executablePath, headless: true })
}

/**
 * A page holding one document, at a scale, ready to measure: fonts loaded, layout settled. The
 * document is self-contained (styles and fonts inline), so nothing is fetched.
 */
export const openDocument = async (browser: Browser, html: string, scale: number): Promise<Page> => {
  const page = await browser.newPage({ deviceScaleFactor: scale, viewport: { width: 800, height: 600 } })
  // No network: everything the document needs is in it.
  await page.route("**/*", (route) => (route.request().url().startsWith("data:") ? route.continue() : route.abort()))
  await page.setContent(html, { waitUntil: "load" })
  await page.evaluate(() => document.fonts.ready.then(() => undefined))
  return page
}
