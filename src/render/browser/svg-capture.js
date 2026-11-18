// Converts a rendered static diagram (render/static.tsx) into plain SVG, inside the page that
// rendered it, so every position, line break, and colour is the browser's own:
//
//   - SVG the design system already draws (node shapes, relationships, icons, key swatches) is
//     copied with its computed paint inlined as attributes;
//   - an HTML box (a label pill, a boundary, a header chip, the key) becomes a rect with its
//     background, border, radius, and shadow;
//   - text becomes <text> lines with one x per character, measured from the layout, so wrapping,
//     letter spacing, centring, and the ellipsis of clamped text come out exactly as drawn.
//
// Colours are resolved to rgb plus an opacity (the CSS gives oklab and color-mix(), which most SVG
// viewers do not read). The output uses no CSS, no foreignObject, and no scripts.
//
// Plain JavaScript on purpose: it is injected as a script tag, so it must not depend on a bundler.
;(() => {
  const SVG_NS = "http://www.w3.org/2000/svg"
  const GEOMETRY = ["d", "cx", "cy", "r", "rx", "ry", "x", "y", "x1", "y1", "x2", "y2", "width", "height", "points", "viewBox", "transform", "text-anchor", "dominant-baseline"]
  const SHAPES = new Set(["path", "circle", "ellipse", "rect", "line", "polyline", "polygon"])

  const escapeText = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  const escapeAttr = (text) => escapeText(text).replaceAll('"', "&quot;")
  const num = (n) => String(Math.round(n * 100) / 100)

  // --- colours: whatever CSS resolved, as rgb() and an opacity
  const canvas = document.createElement("canvas")
  canvas.width = 1
  canvas.height = 1
  const ctx = canvas.getContext("2d", { willReadFrequently: true })
  const colours = new Map()
  const SENTINEL = "#010203"
  /** { rgb, alpha } for a CSS colour, or null when it paints nothing. */
  const colour = (value) => {
    if (value === undefined || value === null || value === "" || value === "none" || value === "transparent") return null
    if (colours.has(value)) return colours.get(value)
    ctx.fillStyle = SENTINEL
    ctx.fillStyle = value
    const parsed = ctx.fillStyle
    let result = null
    if (parsed !== SENTINEL || value.toLowerCase() === SENTINEL) {
      ctx.clearRect(0, 0, 1, 1)
      ctx.fillRect(0, 0, 1, 1)
      const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data
      result = a === 0 ? null : { rgb: `rgb(${r},${g},${b})`, alpha: Math.round((a / 255) * 1000) / 1000 }
    }
    colours.set(value, result)
    return result
  }
  /** fill="…" fill-opacity="…" (or stroke), or fill="none". */
  const paint = (prop, value) => {
    if (typeof value === "string" && value.startsWith("url(")) return ` ${prop}="none"`
    const c = colour(value)
    if (c === null) return ` ${prop}="none"`
    return ` ${prop}="${c.rgb}"${c.alpha < 1 ? ` ${prop}-opacity="${num(c.alpha)}"` : ""}`
  }

  // --- shadows: CSS drop-shadow() and box-shadow as SVG filters
  const defs = []
  let filterCount = 0
  const filters = new Map()
  // Ids are unique per diagram, so several SVGs inlined in one page do not share a filter.
  let idPrefix = "adg"
  /** The first shadow in a computed `filter` or `box-shadow` value: colour, dx, dy, blur. */
  const parseShadow = (value) => {
    if (value === undefined || value === "none" || value === "") return null
    const match = /(rgba?\([^)]*\)|color\([^)]*\)|oklab\([^)]*\)|#[0-9a-f]+)\s+(-?[\d.]+)px\s+(-?[\d.]+)px\s+([\d.]+)px/i.exec(value)
    if (match === null || /inset/.test(value)) return null
    return { colour: colour(match[1]), dx: Number(match[2]), dy: Number(match[3]), blur: Number(match[4]) }
  }
  const shadowFilter = (value) => {
    const shadow = parseShadow(value)
    if (shadow === null || shadow.colour === null) return ""
    const key = JSON.stringify(shadow)
    if (!filters.has(key)) {
      const id = `${idPrefix}-shadow-${++filterCount}`
      filters.set(key, id)
      defs.push(
        `<filter id="${id}" x="-20%" y="-20%" width="140%" height="140%">` +
          `<feDropShadow dx="${num(shadow.dx)}" dy="${num(shadow.dy)}" stdDeviation="${num(shadow.blur / 2)}" ` +
          `flood-color="${shadow.colour.rgb}" flood-opacity="${num(shadow.colour.alpha)}"/></filter>`,
      )
    }
    return ` filter="url(#${filters.get(key)})"`
  }

  const visible = (style) => style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) > 0

  /** Children in paint order: by z-index where it is set, otherwise as in the document. */
  const paintOrder = (element) =>
    [...element.childNodes]
      .map((node, index) => {
        const z = node.nodeType === 1 ? Number.parseInt(getComputedStyle(node).zIndex, 10) : 0
        return { node, index, z: Number.isNaN(z) ? 0 : z }
      })
      .sort((a, b) => a.z - b.z || a.index - b.index)
      .map((entry) => entry.node)

  // --- SVG the design system draws: copied, with paint inlined
  const PAINT_PROPS = ["stroke-width", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "fill-rule"]
  const copySvgChild = (element, out, base) => {
    const tag = element.tagName.toLowerCase()
    if (tag === "foreignobject") {
      // A label pill: HTML inside the SVG, drawn in this SVG's own coordinates.
      for (const child of paintOrder(element)) walkHtml(child, out, base)
      return
    }
    if (tag === "title" || tag === "desc" || tag === "defs") return
    const style = getComputedStyle(element)
    if (!visible(style)) return
    const geometry = GEOMETRY.flatMap((name) => {
      const value = element.getAttribute(name)
      return value === null ? [] : [` ${name}="${escapeAttr(value)}"`]
    }).join("")
    const opacity = Number(style.opacity) < 1 ? ` opacity="${num(Number(style.opacity))}"` : ""
    if (tag === "g" || tag === "svg") {
      const inner = []
      for (const child of paintOrder(element)) if (child.nodeType === 1) copySvgChild(child, inner, base)
      if (inner.length === 0) return
      const filter = shadowFilter(style.filter)
      out.push(`<g${tag === "g" ? geometry : ""}${opacity}${filter}>${inner.join("")}</g>`)
      return
    }
    if (tag === "text") {
      const fill = paint("fill", style.fill)
      out.push(
        `<text${geometry}${fill}${opacity} font-family="${escapeAttr(style.fontFamily)}" font-size="${style.fontSize}" ` +
          `font-weight="${style.fontWeight}">${escapeText(element.textContent ?? "")}</text>`,
      )
      return
    }
    if (!SHAPES.has(tag)) return
    const fill = paint("fill", style.fill)
    const stroke = paint("stroke", style.stroke)
    if (fill === ' fill="none"' && stroke === ' stroke="none"') return
    // The computed `d` wins over the attribute: CSS can set a path's geometry.
    const d = tag === "path" && style.d && style.d !== "none" && element.getAttribute("d") === null ? ` d="${escapeAttr(style.d.replace(/^path\("(.*)"\)$/, "$1"))}"` : ""
    const extra = PAINT_PROPS.flatMap((prop) => {
      const value = style.getPropertyValue(prop)
      if (value === "" || value === "none" || (prop === "stroke-dashoffset" && value === "0px")) return []
      return [` ${prop}="${escapeAttr(value.replaceAll("px", ""))}"`]
    }).join("")
    const filter = shadowFilter(style.filter)
    out.push(`<${tag}${geometry}${d}${fill}${stroke}${extra}${opacity}${filter}/>`)
  }

  /** An <svg> inside the HTML: placed where it sits, with its own coordinate system. */
  const placeSvg = (svg, out, base) => {
    const rect = svg.getBoundingClientRect()
    const style = getComputedStyle(svg)
    if (!visible(style)) return
    const viewBox = svg.getAttribute("viewBox")
    const inner = []
    const own = { x: rect.left, y: rect.top }
    for (const child of paintOrder(svg)) if (child.nodeType === 1) copySvgChild(child, inner, own)
    if (inner.length === 0) return
    const filter = shadowFilter(style.filter)
    // `color` drives currentColor in the copied paint; it is already resolved, so only the box matters.
    out.push(
      `<svg x="${num(rect.left - base.x)}" y="${num(rect.top - base.y)}" width="${num(rect.width)}" height="${num(rect.height)}"` +
        `${viewBox === null ? "" : ` viewBox="${escapeAttr(viewBox)}"`} overflow="visible"${filter}>${inner.join("")}</svg>`,
    )
  }

  // --- HTML boxes
  const radius = (style) => Number.parseFloat(style.borderTopLeftRadius) || 0

  const drawBox = (element, style, out, base) => {
    const rect = element.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return
    const x = rect.left - base.x
    const y = rect.top - base.y
    const r = Math.min(radius(style), rect.width / 2, rect.height / 2)
    const background = colour(style.backgroundColor)
    const shadow = shadowFilter(style.boxShadow)
    if (background !== null || shadow !== "") {
      out.push(
        `<rect x="${num(x)}" y="${num(y)}" width="${num(rect.width)}" height="${num(rect.height)}"${r > 0 ? ` rx="${num(r)}"` : ""}` +
          `${paint("fill", style.backgroundColor)}${shadow}/>`,
      )
    }
    const sides = ["Top", "Right", "Bottom", "Left"].map((side) => ({
      side,
      width: Number.parseFloat(style[`border${side}Width`]) || 0,
      style: style[`border${side}Style`],
      colour: style[`border${side}Color`],
    }))
    const drawn = sides.filter((s) => s.width > 0 && s.style !== "none" && s.style !== "hidden" && colour(s.colour) !== null)
    if (drawn.length === 0) return
    const dashes = (s) => (s.style === "dashed" ? ` stroke-dasharray="${num(s.width * 3)} ${num(s.width * 2)}"` : s.style === "dotted" ? ` stroke-dasharray="${num(s.width)} ${num(s.width)}" stroke-linecap="round"` : "")
    const uniform = drawn.length === 4 && drawn.every((s) => s.width === drawn[0].width && s.style === drawn[0].style && s.colour === drawn[0].colour)
    if (uniform) {
      const w = drawn[0].width
      out.push(
        `<rect x="${num(x + w / 2)}" y="${num(y + w / 2)}" width="${num(rect.width - w)}" height="${num(rect.height - w)}"` +
          `${r > 0 ? ` rx="${num(Math.max(0, r - w / 2))}"` : ""} fill="none"${paint("stroke", drawn[0].colour)} stroke-width="${num(w)}"${dashes(drawn[0])}/>`,
      )
      return
    }
    for (const s of drawn) {
      const half = s.width / 2
      const line =
        s.side === "Top" ? [x, y + half, x + rect.width, y + half]
        : s.side === "Bottom" ? [x, y + rect.height - half, x + rect.width, y + rect.height - half]
        : s.side === "Left" ? [x + half, y, x + half, y + rect.height]
        : [x + rect.width - half, y, x + rect.width - half, y + rect.height]
      out.push(`<line x1="${num(line[0])}" y1="${num(line[1])}" x2="${num(line[2])}" y2="${num(line[3])}"${paint("stroke", s.colour)} stroke-width="${num(s.width)}"${dashes(s)}/>`)
    }
  }

  // --- text, a character at a time
  const metrics = new Map()
  const fontOf = (style) => `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`
  const ascentOf = (style) => {
    const font = fontOf(style)
    if (!metrics.has(font)) {
      ctx.font = font
      const m = ctx.measureText("Hg")
      metrics.set(font, { ascent: m.fontBoundingBoxAscent, ellipsis: ctx.measureText("…").width })
    }
    return metrics.get(font)
  }

  /** The box text is cut to: the nearest ancestor that hides its overflow. */
  const clipBox = (element) => {
    for (let at = element; at !== null && at !== document.body; at = at.parentElement) {
      const style = getComputedStyle(at)
      if (style.overflow !== "visible" || style.overflowX !== "visible" || style.overflowY !== "visible") {
        return { box: at.getBoundingClientRect(), style }
      }
    }
    return null
  }

  const transform = (text, mode) =>
    mode === "uppercase" ? text.toUpperCase() : mode === "lowercase" ? text.toLowerCase() : text

  const drawText = (node, out, base) => {
    const parent = node.parentElement
    if (parent === null) return
    const style = getComputedStyle(parent)
    if (!visible(style)) return
    const text = node.textContent ?? ""
    const clip = clipBox(parent)
    const range = document.createRange()
    const chars = []
    for (let i = 0; i < text.length; i++) {
      range.setStart(node, i)
      range.setEnd(node, i + 1)
      const rects = range.getClientRects()
      const rect = rects[0]
      if (rect === undefined || rect.width === 0) continue
      const hidden = clip !== null && (rect.left + rect.width / 2 > clip.box.right || rect.top + rect.height / 2 > clip.box.bottom)
      chars.push({ char: transform(text[i], style.textTransform), left: rect.left, right: rect.right, top: rect.top, hidden })
    }
    if (chars.length === 0) return
    const lines = []
    for (const c of chars) {
      if (c.hidden) continue
      const line = lines.find((l) => Math.abs(l.top - c.top) < 2)
      if (line === undefined) lines.push({ top: c.top, chars: [c] })
      else line.chars.push(c)
    }
    const truncated = chars.some((c) => c.hidden)
    const { ascent, ellipsis } = ascentOf(style)
    const cutsWithEllipsis = style.textOverflow === "ellipsis" || (style.webkitLineClamp !== undefined && style.webkitLineClamp !== "none")
    if (truncated && cutsWithEllipsis && lines.length > 0 && clip !== null) {
      const last = lines[lines.length - 1]
      while (last.chars.length > 0 && last.chars[last.chars.length - 1].right + ellipsis > clip.box.right) last.chars.pop()
      while (last.chars.length > 0 && last.chars[last.chars.length - 1].char === " ") last.chars.pop()
      const end = last.chars.length === 0 ? clip.box.left : last.chars[last.chars.length - 1].right
      last.chars.push({ char: "…", left: end, right: end + ellipsis, top: last.top, hidden: false })
    }
    const fill = paint("fill", style.color)
    const attrs =
      ` font-family="${escapeAttr(style.fontFamily)}" font-size="${style.fontSize}" font-weight="${style.fontWeight}"` +
      `${style.fontStyle === "normal" ? "" : ` font-style="${style.fontStyle}"`}${fill}`
    for (const line of lines) {
      const xs = line.chars.map((c) => num(c.left - base.x)).join(" ")
      const y = line.top - base.y + ascent
      const content = escapeText(line.chars.map((c) => c.char).join(""))
      out.push(`<text xml:space="preserve" x="${xs}" y="${num(y)}"${attrs}>${content}</text>`)
      if (style.textDecorationLine.includes("underline")) {
        const first = line.chars[0]
        const last = line.chars[line.chars.length - 1]
        out.push(`<line x1="${num(first.left - base.x)}" y1="${num(y + 2)}" x2="${num(last.right - base.x)}" y2="${num(y + 2)}"${paint("stroke", style.color)} stroke-width="1"/>`)
      }
    }
  }

  // --- the walk
  const walkHtml = (node, out, base) => {
    if (node.nodeType === 3) {
      if ((node.textContent ?? "").trim() !== "") drawText(node, out, base)
      return
    }
    if (node.nodeType !== 1) return
    if (node instanceof SVGSVGElement) {
      placeSvg(node, out, base)
      return
    }
    const style = getComputedStyle(node)
    if (!visible(style)) return
    const inner = []
    drawBox(node, style, inner, base)
    for (const child of paintOrder(node)) walkHtml(child, inner, base)
    if (inner.length === 0) return
    const opacity = Number(style.opacity)
    out.push(opacity < 1 ? `<g opacity="${num(opacity)}">${inner.join("")}</g>` : inner.join(""))
  }

  /**
   * ::before and ::after are not in the document, so the walk would miss them (a boundary's type
   * is "[Container]" only through them). Each one is replaced by a real span with the pseudo
   * element's computed look, and the pseudo element is switched off, so the layout is unchanged.
   */
  const PSEUDO_PROPS = [
    "display", "position", "top", "right", "bottom", "left", "width", "height", "margin", "padding",
    "color", "background-color", "border", "border-radius", "font-family", "font-size", "font-weight",
    "font-style", "letter-spacing", "text-transform", "line-height", "vertical-align", "flex", "align-self",
  ]
  const materializePseudos = (root) => {
    const style = document.createElement("style")
    style.textContent = "[data-adg-pseudo]::before,[data-adg-pseudo]::after{content:none!important}"
    document.head.append(style)
    for (const element of [root, ...root.querySelectorAll("*")]) {
      if (element instanceof SVGElement) continue
      const made = ["before", "after"].flatMap((which) => {
        const pseudo = getComputedStyle(element, `::${which}`)
        const content = pseudo.content
        if (content === "none" || content === "normal" || pseudo.display === "none") return []
        const span = document.createElement("span")
        const text = /^"(.*)"$/.exec(content)
        span.textContent = text === null ? "" : text[1].replace(/\\"/g, '"')
        span.style.cssText = PSEUDO_PROPS.map((prop) => `${prop}:${pseudo.getPropertyValue(prop)}`).join(";")
        return [{ which, span }]
      })
      if (made.length === 0) continue
      element.setAttribute("data-adg-pseudo", "")
      for (const { which, span } of made) {
        if (which === "before") element.prepend(span)
        else element.append(span)
      }
    }
  }

  window.__assemblyDiagramCapture = (root, prefix) => {
    if (typeof prefix === "string" && prefix !== "") idPrefix = prefix
    materializePseudos(root)
    const rect = root.getBoundingClientRect()
    const out = []
    walkHtml(root, out, { x: rect.left, y: rect.top })
    return { width: Math.ceil(rect.width), height: Math.ceil(rect.height), defs: defs.join(""), body: out.join("") }
  }
  void SVG_NS
})()
