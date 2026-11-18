import { renderToStaticMarkup } from "react-dom/server"
import type { DiagramFigure } from "../core/types.ts"
import { StaticDiagram, type StaticOptions } from "./static.tsx"

/**
 * The static diagram as markup. Nodes are focusable on the canvas (each is a tab stop there); a
 * static picture is not a control, so the tab stops are removed.
 */
export const renderStatic = (figure: DiagramFigure, options: StaticOptions): string =>
  renderToStaticMarkup(<StaticDiagram figure={figure} options={options} />).replaceAll(' tabindex="0"', "")
