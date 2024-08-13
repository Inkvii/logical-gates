import { twMerge } from "tailwind-merge"

export default function parseReactAriaClassName<T>(
  renderProps: T,
  className: string | string[] | ((values: T) => string) | undefined
): string | undefined {
  if (typeof className === "function") {
    return className(renderProps)
  }
  if (Array.isArray(className)) {
    return twMerge(className)
  }
  return className
}
