/**
 * A diagram drawn once, with no interaction: the design system's own DiagramGroup, DiagramNode,
 * DiagramEdge, and DiagramLegend, composed the way DiagramCanvas composes them (boundaries
 * outermost first, then the elements, then the relationships over them), at the size of the
 * diagram rather than in a pannable viewport. It is the source of the HTML fragment, the PNG, and
 * the SVG, so all three show exactly the same thing.
 */
import { DiagramEdge, DiagramGroup, DiagramLegend, DiagramNode } from "../ds.ts"
import { attachRect } from "../core/geometry.ts"
import type { DiagramFigure, DiagramGroup as Group } from "../core/types.ts"
import { kindsFor, withKindKeys } from "./kinds.ts"
import type { Theme } from "./styles.ts"

export type LegendPlacement = "bottom" | "right" | "none"

export type StaticOptions = Readonly<{
  theme: Theme
  legend: LegendPlacement
  /** Draws the caption (the view's name) under the diagram. */
  caption: boolean
  /** Paints the surface colour behind the diagram; off leaves it transparent. */
  background: boolean
  /** Room around the diagram, in px. */
  padding: number
  /** Extra classes on the root, such as the fragment's scope class. */
  className?: string
}>

/** How deep a boundary sits, for its tint: one step per boundary around it. */
const depthOf = (group: Group, byId: ReadonlyMap<string, Group>): number => {
  const parent = group.parent === undefined ? undefined : byId.get(group.parent)
  return parent === undefined ? 0 : 1 + depthOf(parent, byId)
}

/**
 * The diagram's content box. ELK pads the graph by 40 on every side, so the routes and elements
 * start at 40; the bounds include that on the top and left but not on the right and bottom.
 */
const worldSize = (figure: DiagramFigure): Readonly<{ width: number; height: number }> => ({
  width: Math.ceil(figure.diagram.bounds.width + 40),
  height: Math.ceil(figure.diagram.bounds.height + 40),
})

export function StaticDiagram({ figure, options }: Readonly<{ figure: DiagramFigure; options: StaticOptions }>) {
  const diagram = withKindKeys(figure.diagram)
  const kinds = kindsFor(figure.diagram)
  const nodes = new Map(diagram.nodes.map((node) => [node.id, node]))
  const groups = new Map(diagram.groups.map((group) => [group.id, group]))
  const size = worldSize(figure)
  const legend =
    options.legend === "none" ? null : (
      <div className="adg-static__legend">
        <DiagramLegend
          kinds={kinds}
          nodes={diagram.nodes}
          edges={diagram.edges}
          {...(diagram.lineLabels === undefined ? {} : { lineLabels: diagram.lineLabels })}
        />
      </div>
    )

  return (
    <div
      className={[
        "adg-static",
        options.background ? "adg-static--surface" : "",
        options.className ?? "",
      ]
        .filter((c) => c !== "")
        .join(" ")}
      data-theme={options.theme}
      data-view={figure.key}
      role="img"
      aria-label={figure.caption}
      style={{ padding: options.padding, width: "max-content" }}
    >
      <div style={{ display: "flex", flexDirection: options.legend === "right" ? "row" : "column", gap: 24, alignItems: "flex-start" }}>
        <div
          // `sk-dcanvas is-readonly` is what hides the nodes' connection handles, as on the canvas.
          className="adg-static__world sk-dcanvas is-readonly"
          style={{ width: size.width, height: size.height }}
        >
          {diagram.groups
            .map((group) => ({ group, depth: depthOf(group, groups) }))
            .toSorted((p, q) => p.depth - q.depth)
            .map(({ group, depth }) => (
              <DiagramGroup key={group.id} group={group} depth={depth} />
            ))}
          {diagram.nodes
            .toSorted((p, q) => p.y - q.y || p.x - q.x)
            .map((node) => (
              <DiagramNode
                key={node.id}
                node={node}
                kind={kinds[node.kind]}
                className="sk-dcanvas__node"
                style={{ left: node.x, top: node.y }}
              />
            ))}
          <svg
            className="sk-canvas__edges sk-dcanvas__edges"
            width={size.width}
            height={size.height}
            style={{ width: size.width, height: size.height }}
          >
            {diagram.edges.flatMap((edge) => {
              const from = nodes.get(edge.from)
              const to = nodes.get(edge.to)
              if (from === undefined || to === undefined) return []
              return [
                <DiagramEdge
                  key={edge.id}
                  edge={edge}
                  from={attachRect(from)}
                  to={attachRect(to)}
                  fromLabel={from.title}
                  toLabel={to.title}
                  fromOffset={edge.fromOffset ?? 0}
                  toOffset={edge.toOffset ?? 0}
                />,
              ]
            })}
          </svg>
        </div>
        {legend}
      </div>
      {options.caption ? <p className="adg-static__caption">{figure.caption}</p> : null}
    </div>
  )
}
