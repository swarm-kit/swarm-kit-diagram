import { iconPaths } from "./icon-paths"
import { cn } from "../../../cn"

/** Every icon name in the set. Add an icon by adding its paths to icon-paths.ts. */
export type IconName = keyof typeof iconPaths

export type IconProps = Readonly<{
  name: IconName
  /** Width and height in px. Default 16. */
  size?: number | undefined
  className?: string | undefined
}>

/**
 * An icon from the Assembly set: Lucide paths redrawn with a 1.5px square-cap stroke.
 * Decorative (aria-hidden); the control around it carries the accessible name.
 */
export function Icon({ name, size = 16, className }: IconProps) {
  const paths: readonly string[] = iconPaths[name]
  return (
    <svg
      className={cn("sk-icon", className)}
      data-slot="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
