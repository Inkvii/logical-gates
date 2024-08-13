export function getSearchParams<TName>(name: keyof TName, urlSearchParams: URLSearchParams): string | null {
  return urlSearchParams.get(name as string)
}
