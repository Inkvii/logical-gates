import { ParsedUrlQueryInput } from "node:querystring"

/**
 * Converts query to structure that is accepted by
 * @param route
 */
export function queryToRouter<T>(route: T): ParsedUrlQueryInput {
  if (typeof route !== "object") throw new Error("Route must be object")

  return route as ParsedUrlQueryInput
}
