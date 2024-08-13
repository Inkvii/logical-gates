export type GenericReadonlyURLSearchParams<T> = {
  get: (name: keyof T, fallback?: string) => string | null
}
