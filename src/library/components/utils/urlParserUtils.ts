/**
 * Converts value from query string params to a number. If value cannot be parsed, defaults to undefined
 * @param value any value
 * @returns {number} finite number or undefined if parsing fails
 */
export function parseQueryStringNumber(value: string | number | string[] | undefined | null): number | undefined {
  if (value === undefined || value === null) return undefined
  if (Array.isArray(value)) return parseQueryStringNumber(value[0])

  try {
    const meanResult = parseInt(value as unknown as string)
    return isFinite(meanResult) ? meanResult : undefined
  } catch (err) {
    console.error(`Error parsing query string param. Setting value to undefined: `, err)
    return undefined
  }
}

/**
 * Used to parse timestamp from url params to "yyyy-MM-ddThh:mm:ss.SSS" format which is usable for input of type datetime-local
 * @param value
 * @returns {string | null}
 */
export function parseQueryStringTimestamp(value: string | undefined | null | number) {
  if (value === undefined || value === null) return null
  try {
    const number = typeof value === "number" ? value : parseInt(value)
    if (!isFinite(number)) {
      return null
    }
    const result = new Date(number).toISOString().replace("Z", "")
    return result
  } catch (err) {
    console.error("Error parsing query timestamp param. Setting value to null", err)
    return null
  }
}

/**
 * Used to convert input of type datetime-local to timestamp
 * @param input
 * @returns {undefined | number}
 */
export function parseDatetimeLocalToTimestamp(input: string | undefined | null) {
  if (!input) return undefined

  return new Date(input + "Z").getTime()
}

/**
 * Attention: If T is union, there is no way to check in runtime if value conforms to the set of values.
 * In such case, handle the check in the component
 * @param value value from query params
 */
export function parseQueryArray<T extends string = string>(value: unknown | undefined): T[] {
  if (!value) return []
  if (Array.isArray(value)) return value
  if (typeof value !== "string") return []
  return value.split(",") as T[]
}
