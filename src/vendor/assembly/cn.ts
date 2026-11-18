import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Joins class names and resolves Tailwind conflicts. The consumer's `className` goes last.
 * @example cn("sk-btn", variant === "primary" && "sk-btn--primary", className)
 */
export function cn(...inputs: readonly ClassValue[]): string {
  return twMerge(clsx(inputs))
}
