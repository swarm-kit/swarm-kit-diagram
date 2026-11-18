import { getLocale } from "../../paraglide/runtime"

/**
 * Formats a ratio (0 to 1) as a whole percentage in the current locale.
 * @example formatPercent(0.847) // "85%"
 */
export function formatPercent(ratio: number): string {
  return new Intl.NumberFormat(getLocale(), { style: "percent", maximumFractionDigits: 0 }).format(
    ratio,
  )
}
