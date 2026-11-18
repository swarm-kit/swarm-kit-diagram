/** The bare rotating ring. Decorative; used inside Button and Spinner, never on its own. */
export function SpinnerRing({ size, className }: Readonly<{ size?: number; className?: string }>) {
  const style =
    size === undefined
      ? undefined
      : { width: size, height: size, borderWidth: size >= 24 ? 2 : 1.5 }
  return (
    <span
      className={className === undefined ? "sk-spinner" : `sk-spinner ${className}`}
      data-slot="spinner-ring"
      style={style}
      aria-hidden="true"
    />
  )
}
