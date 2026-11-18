import { cn } from "../../../cn"
import { renderIcon } from "../icon/render-icon"
import { SpinnerRing } from "../spinner/spinner-ring"
import type { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonProps = Readonly<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    /** primary = amber, one per view · secondary (default) · quiet = no border · danger = destructive */
    variant?: "primary" | "secondary" | "quiet" | "danger" | undefined
    /** md 36px (default) · sm 28px */
    size?: "md" | "sm" | undefined
    /** Leading icon: an icon name (IconName) or any node. With no children the button becomes square: give it an aria-label. */
    icon?: ReactNode
    iconEnd?: ReactNode
    /** Shows a spinner, disables the button and sets aria-busy. */
    loading?: boolean | undefined
    children?: ReactNode
  }
>

const ICON_PX = { md: 16, sm: 14 } as const

/**
 * primary = amber, one per view · secondary (default) · quiet = no border · danger = destructive.
 * With no children and an icon, the button is square: give it an aria-label.
 */
export function Button({
  variant = "secondary",
  size = "md",
  icon,
  iconEnd,
  loading = false,
  disabled,
  className,
  children,
  type = "button",
  ...props
}: Readonly<ButtonProps>) {
  const hasLabel = children !== undefined && children !== null && children !== ""
  const iconOnly = icon !== undefined && !hasLabel

  return (
    <button
      {...props}
      type={type}
      disabled={disabled === true || loading}
      aria-busy={loading ? "true" : undefined}
      data-slot="button"
      className={cn(
        "sk-btn",
        `sk-btn--${variant}`,
        `sk-btn--${size}`,
        iconOnly && "sk-btn--icon",
        loading && "is-loading",
        className,
      )}
    >
      {loading ? <SpinnerRing /> : renderIcon(icon, ICON_PX[size])}
      {hasLabel ? (
        <span className="sk-btn__label" data-slot="button-label">
          {children}
        </span>
      ) : null}
      {loading ? null : renderIcon(iconEnd, ICON_PX[size])}
    </button>
  )
}
