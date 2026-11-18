// BorderBeam's glow on an SVG path, in two of its variants: `travel`, a bright head with a fading
// tail and a blurred halo moving along the path, which DiagramEdge runs along a relationship
// that data flows through, from its start to its end, and back as well on a two-way one; and
// `pulse`, the whole path breathing in place, which DiagramNode puts round the selected element's
// outline. Internal: no capitalised export, so generate-index keeps it out of the public API.
//
// A travelling beam is the same path four times with different dashes, all moved by one animated
// offset (components.css, `.sk-diagram-beam`). `pathLength` makes 100 units one full trip
// whatever the path's real length, so the tail is the same length and the loop the same time on
// any shape. A pulse is the path twice, a ring and its halo, breathing together.

const TRAVEL = ["glow", "tail", "mid", "head"] as const
const PULSE = ["pulse-glow", "pulse-ring"] as const

export type PathBeamVariant = "travel" | "pulse"
export type PathBeamDirection = "forward" | "back"

/** A beam on `d`, decorative: hidden from assistive technology, never takes the pointer. */
export function pathBeam(
  d: string,
  variant: PathBeamVariant = "travel",
  direction: PathBeamDirection = "forward",
) {
  const layers = variant === "pulse" ? PULSE : TRAVEL
  return (
    <g
      className={`sk-diagram-beam sk-diagram-beam--${variant}${direction === "back" ? " sk-diagram-beam--back" : ""}`}
      data-slot="diagram-beam"
      data-variant={variant}
      data-direction={direction}
      aria-hidden="true"
    >
      {layers.map((layer) => (
        <path key={layer} className={`sk-diagram-beam__${layer}`} d={d} pathLength={100} />
      ))}
    </g>
  )
}
