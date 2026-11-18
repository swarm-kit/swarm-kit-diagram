/**
 * The design system, as this tool uses it: the one place that knows where the vendored copy
 * (src/vendor/assembly, refreshed by scripts/vendor.mjs) keeps each piece. Everything else imports
 * from here, so a re-vendor that moves a file changes only this module.
 */
export { DiagramCanvas } from "./vendor/assembly/components/ui/diagram-canvas/diagram-canvas.tsx"
export { DiagramEdge } from "./vendor/assembly/components/ui/diagram-edge/diagram-edge.tsx"
export { DiagramGroup } from "./vendor/assembly/components/ui/diagram-group/diagram-group.tsx"
export { DiagramLegend } from "./vendor/assembly/components/ui/diagram-legend/diagram-legend.tsx"
export { DiagramNode } from "./vendor/assembly/components/ui/diagram-node/diagram-node.tsx"
export { DIAGRAM_KINDS } from "./vendor/assembly/components/ui/diagram-kinds/kinds.ts"
export { edgeStyleKey } from "./vendor/assembly/utils/graph/diagram-legend.ts"
export {
  diagramNodeSize,
  shapeAnchor,
  shapeOf,
} from "./vendor/assembly/utils/graph/diagram-node-size.ts"
export { anchor, routeEdge } from "./vendor/assembly/utils/graph/diagram-routing.ts"
export type { DiagramNodeKind } from "./vendor/assembly/types/diagram.ts"

import { overwriteGetLocale } from "./vendor/assembly/paraglide/runtime.js"

/**
 * The design system's strings are English only, and its locale lookup reads `localStorage`, which
 * throws in a sandboxed iframe and would read the host page's own setting in an embed. The locale
 * is fixed instead, once, before anything renders.
 */
overwriteGetLocale(() => "en")
