import { Icon, type IconName } from "./icon"
import { iconPaths } from "./icon-paths"
import type { ReactNode } from "react"

/** True when the value is a name in the icon set. */
export function isIconName(value: unknown): value is IconName {
  return typeof value === "string" && Object.hasOwn(iconPaths, value)
}

/** Renders an `IconName | ReactNode` prop: a name draws the icon, anything else renders as given. */
export function renderIcon(icon: ReactNode, size: number): ReactNode {
  if (icon === undefined || icon === null || icon === false) return null
  return isIconName(icon) ? <Icon name={icon} size={size} /> : icon
}
