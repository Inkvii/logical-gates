import { GenericReadonlyURLSearchParams } from "@/library/router/types/GenericReadonlyURLSearchParams"

/**
 * Converts request to url params and removes keys where value is undefined or empty array.
 * @param request request that is going to be converted to url params
 * @param previousUrlSearchParams optional url search params of previous state if merging with old values is needed
 * @returns {URLSearchParams} url params ready to be injected to the request
 */
export function convertToUrlParams<T extends object>(
  request: T,
  previousUrlSearchParams?: URLSearchParams | (Omit<URLSearchParams, "get"> & GenericReadonlyURLSearchParams<T>)
): URLSearchParams {
  const params = new URLSearchParams(previousUrlSearchParams as URLSearchParams)
  Object.entries(request)
    .filter((entry) => entry[1] !== undefined && entry[1] !== "")
    .forEach((entry) => {
      if (Array.isArray(entry[1]) && entry[1].length === 0) {
        params.delete(entry[0])
      } else {
        params.set(entry[0], entry[1])
      }
    })
  return params
}
