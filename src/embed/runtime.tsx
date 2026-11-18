/**
 * The browser runtime: defines the <assembly-diagram> custom element, which draws one diagram
 * (the `json` output) with the design system's DiagramCanvas inside a shadow root, so the host
 * page's CSS cannot reach in and the diagram's cannot leak out. Built by scripts/build.mjs into a
 * single self-contained file, assembly-diagram.js, with React, the design system, its styles, and
 * its fonts inside: one <script> tag is the whole install.
 *
 *   <script src="assembly-diagram.js" defer></script>
 *   <assembly-diagram src="containers.json"></assembly-diagram>
 *
 * or with the data inline, which needs no second request:
 *
 *   <assembly-diagram>
 *     <script type="application/json">{ "format": "assembly-diagram", ... }</script>
 *   </assembly-diagram>
 *
 * Attributes (all optional):
 *   src       URL of the diagram's JSON (same origin, or CORS-enabled)
 *   theme     light | dark | auto (follows the reader's colour scheme; the default)
 *   mode      interactive (pan, zoom, select; the default) | static (a picture, scaled to fit)
 *   height    the canvas height in px, or any CSS length; the diagram's own aspect by default
 *   toolbar, minimap, legend   "false" hides that part of the interactive canvas
 *   caption   "false" hides the view's name under the diagram
 *
 * Anything else inside the element (an <img> of the SVG, say) is its fallback: shown until the
 * runtime loads, or if it never does, and hidden once the diagram draws.
 *
 * Events on the element: `assembly-diagram:ready` (detail: { key }) and `assembly-diagram:error`
 * (detail: { message }).
 */
import { createRoot, type Root } from "react-dom/client"
import { DiagramCanvas } from "../ds.ts"
import type { DiagramFigure } from "../core/types.ts"
import { kindsFor, withKindKeys } from "../render/kinds.ts"
import { StaticDiagram } from "../render/static.tsx"
import { isDiagramDocument, type DiagramDocument } from "./document.ts"

declare const __ADG_SHADOW_CSS__: string
declare const __ADG_FONTS_CSS__: string
// Read once: the build substitutes these at every use, and they are large.
const SHADOW_CSS: string = __ADG_SHADOW_CSS__
const FONTS_CSS: string = __ADG_FONTS_CSS__

const TAG = "assembly-diagram"
const FONTS_ID = "assembly-diagram-fonts"

/**
 * Fonts declared inside a shadow root are not loaded by browsers, so the @font-face rules go to
 * the document, once. The families are renamed ("Assembly Inter"), so they replace nothing of the
 * host's.
 */
let fontsInstalled = false
const installFonts = (): void => {
  if (fontsInstalled || FONTS_CSS === "" || document.getElementById(FONTS_ID) !== null) return
  fontsInstalled = true
  // A constructed stylesheet is CSSOM, which a strict Content-Security-Policy (no
  // 'unsafe-inline' styles) still allows; a <style> element is the fallback for old browsers.
  if (typeof CSSStyleSheet !== "undefined" && "replaceSync" in CSSStyleSheet.prototype && "adoptedStyleSheets" in document) {
    const fonts = new CSSStyleSheet()
    fonts.replaceSync(FONTS_CSS)
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, fonts]
    return
  }
  const style = document.createElement("style")
  style.id = FONTS_ID
  style.textContent = FONTS_CSS
  document.head.append(style)
}

/** One stylesheet shared by every element on the page, where the browser supports that. */
const sheet = (() => {
  let cached: CSSStyleSheet | undefined
  return (): CSSStyleSheet | undefined => {
    if (cached !== undefined) return cached
    if (typeof CSSStyleSheet === "undefined" || !("replaceSync" in CSSStyleSheet.prototype)) return undefined
    cached = new CSSStyleSheet()
    cached.replaceSync(SHADOW_CSS)
    return cached
  }
})()

/**
 * Inherited properties (letter-spacing, line-height, text-transform, …) still cross a shadow
 * boundary, so the root inside it starts from their initial values; the design system's tokens
 * and the root rule in SHADOW_CSS then set what it needs. This sheet comes first, so those win.
 */
const HOST_CSS =
  ":host{display:block;position:relative;max-width:100%}" +
  ":host([hidden]){display:none}" +
  ".adg-root{all:initial;display:block;font-family:var(--font-sans);color:var(--ink)}" +
  ".adg-root figure{margin:0;display:flex;flex-direction:column;gap:8px}" +
  ".adg-root figcaption{font-size:13px;line-height:18px;color:var(--ink-muted)}" +
  ".adg-static-fit{overflow:hidden}" +
  ".adg-static-fit>.adg-static{transform-origin:0 0}" +
  ".adg-error{font:13px/1.4 system-ui,sans-serif;padding:12px;border:1px solid #d33;border-radius:8px;color:#a11}"

const flag = (element: Element, name: string, fallback: boolean): boolean => {
  const value = element.getAttribute(name)
  return value === null ? fallback : value !== "false"
}

/** The theme attribute, checked: anything unknown is `auto`. */
const themeOf = (element: Element): "light" | "dark" | "auto" => {
  const value = element.getAttribute("theme")
  return value === "light" || value === "dark" ? value : "auto"
}

/** A canvas height from the attribute, else from the diagram's aspect at the element's width. */
const heightOf = (element: HTMLElement, figure: DiagramFigure): string => {
  const attribute = element.getAttribute("height")
  if (attribute !== null && attribute.trim() !== "") return /^\d+(\.\d+)?$/.test(attribute) ? `${attribute}px` : attribute
  const width = element.clientWidth || 800
  const natural = (figure.diagram.bounds.height + 40) * Math.min(1, width / (figure.diagram.bounds.width + 40))
  return `${String(Math.round(Math.max(320, Math.min(720, natural + 64))))}px`
}

function Interactive({ figure, element }: Readonly<{ figure: DiagramFigure; element: HTMLElement }>) {
  const diagram = withKindKeys(figure.diagram)
  const height = heightOf(element, figure)
  return (
    <figure>
      <div style={{ height }}>
        <DiagramCanvas
          data={{ nodes: diagram.nodes, edges: diagram.edges, groups: diagram.groups } as never}
          kinds={kindsFor(figure.diagram)}
          readOnly
          toolbar={flag(element, "toolbar", true)}
          minimap={flag(element, "minimap", true)}
          legend={flag(element, "legend", true)}
          {...(diagram.lineLabels === undefined ? {} : { lineLabels: diagram.lineLabels })}
          height={"100%" as never}
          fitOnMount
          label={figure.caption}
        />
      </div>
      {flag(element, "caption", true) ? <figcaption>{figure.caption}</figcaption> : null}
    </figure>
  )
}

/** The static picture, scaled down to the element's width (never up). */
function Static({ figure, element, theme }: Readonly<{ figure: DiagramFigure; element: HTMLElement; theme: "light" | "dark" | "auto" }>) {
  return (
    <div
      className="adg-static-fit"
      ref={(box) => {
        if (box === null) return
        const inner = box.firstElementChild as HTMLElement | null
        if (inner === null) return
        const fit = (): void => {
          const scale = Math.min(1, element.clientWidth / inner.scrollWidth)
          inner.style.transform = `scale(${String(scale)})`
          box.style.height = `${String(inner.scrollHeight * scale)}px`
        }
        fit()
        const observer = new ResizeObserver(fit)
        observer.observe(element)
        return () => {
          observer.disconnect()
        }
      }}
    >
      <StaticDiagram
        figure={figure}
        options={{
          theme,
          legend: flag(element, "legend", true) ? "bottom" : "none",
          caption: flag(element, "caption", true),
          background: false,
          padding: 0,
        }}
      />
    </div>
  )
}

class AssemblyDiagramElement extends HTMLElement {
  static observedAttributes = ["src", "theme", "mode", "height", "toolbar", "minimap", "legend", "caption"]

  #root: Root | undefined
  #mount: HTMLElement | undefined
  #figure: DiagramFigure | undefined
  #loading: string | undefined

  connectedCallback(): void {
    installFonts()
    if (this.shadowRoot === null) {
      const shadow = this.attachShadow({ mode: "open" })
      // Adopted sheets come after the shadow root's <style> elements in the cascade, so HOST_CSS
      // goes in a <style> and SHADOW_CSS after it, either adopted or as a second <style>.
      const host = document.createElement("style")
      host.textContent = HOST_CSS
      shadow.append(host)
      const shared = sheet()
      if (shared === undefined) {
        const style = document.createElement("style")
        style.textContent = SHADOW_CSS
        shadow.append(style)
      } else {
        shadow.adoptedStyleSheets = [shared]
      }
      this.#mount = document.createElement("div")
      this.#mount.className = "adg-root"
      shadow.append(this.#mount)
      this.#root = createRoot(this.#mount)
    }
    void this.#load()
  }

  disconnectedCallback(): void {
    // React is unmounted on the next frame unless the element was only moved.
    requestAnimationFrame(() => {
      if (!this.isConnected) {
        this.#root?.unmount()
        this.#root = undefined
        this.shadowRoot?.replaceChildren()
      }
    })
  }

  attributeChangedCallback(name: string, previous: string | null, next: string | null): void {
    if (previous === next || this.#root === undefined) return
    if (name === "src") void this.#load()
    else this.#render()
  }

  /** The diagram, from `src` or an inline JSON script. */
  async #load(): Promise<void> {
    const src = this.getAttribute("src")
    const key = src ?? "inline"
    if (this.#loading === key && this.#figure !== undefined) return this.#render()
    this.#loading = key
    try {
      const data: unknown =
        src === null
          ? await this.#inlineData()
          : await fetch(src).then((r) => {
              if (!r.ok) throw new Error(`HTTP ${String(r.status)} for ${src}`)
              return r.json() as Promise<unknown>
            })
      if (this.#loading !== key) return
      if (!isDiagramDocument(data)) throw new Error("not an assembly-diagram document (the CLI's json output)")
      const document_: DiagramDocument = data
      this.#figure = { key: document_.key, caption: document_.caption, diagram: document_.diagram }
      this.#render()
      this.dispatchEvent(new CustomEvent("assembly-diagram:ready", { detail: { key: document_.key }, bubbles: true, composed: true }))
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      this.#root?.render(<p className="adg-error">Diagram failed to load: {message}</p>)
      this.dispatchEvent(new CustomEvent("assembly-diagram:error", { detail: { message }, bubbles: true, composed: true }))
    }
  }

  /**
   * The JSON in the element's own <script type="application/json">. When the runtime loads before
   * the element's content is parsed (a plain <script> in <head>), the element is connected while
   * its children (or the rest of the JSON's text) are still to come, so while the document is
   * loading the read waits for it to finish parsing.
   */
  async #inlineData(): Promise<unknown> {
    const script = (): Element | null => this.querySelector(':scope > script[type="application/json"]')
    if (document.readyState === "loading") {
      await new Promise<void>((resolve) => {
        document.addEventListener("DOMContentLoaded", () => resolve(), { once: true })
      })
    }
    const found = script()
    if (found === null) {
      throw new Error('no diagram data: give the element a src attribute, or put the json output in a <script type="application/json"> inside it')
    }
    return JSON.parse(found.textContent ?? "") as unknown
  }

  #render(): void {
    const figure = this.#figure
    if (figure === undefined || this.#root === undefined || this.#mount === undefined) return
    const theme = themeOf(this)
    this.#mount.dataset["theme"] = theme
    this.#root.render(
      this.getAttribute("mode") === "static" ? (
        <Static figure={figure} element={this} theme={theme} />
      ) : (
        <Interactive figure={figure} element={this} />
      ),
    )
  }
}

if (customElements.get(TAG) === undefined) customElements.define(TAG, AssemblyDiagramElement)

/**
 * In the iframe page, tell the embedding page how tall the content wants to be, so it can size
 * the frame (see the page's own comment for the listener). Only a height is sent, never content.
 */
if (window.parent !== window && document.documentElement.hasAttribute("data-assembly-diagram-page")) {
  const post = (): void => {
    const element = document.querySelector(TAG)
    window.parent.postMessage(
      {
        type: "assembly-diagram:resize",
        key: element?.getAttribute("data-key") ?? "",
        height: Math.ceil(document.documentElement.scrollHeight),
      },
      "*",
    )
  }
  new ResizeObserver(post).observe(document.documentElement)
  window.addEventListener("load", post)
}
