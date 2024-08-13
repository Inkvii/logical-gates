/**
 * Use this type if you want to use string literal autocomplete with possibility of having any other string input
 * Example: type T = "A"|"B"|LooseTypedString will accept A, B, and won't throw error if you type ZZZ
 */
/* eslint-disable-next-line @typescript-eslint/ban-types */
export type LooseTypedString = string & {}

export type PaginatedMetadata = {
  limit?: number
  page?: number
}

export type Sortable<TData> = Omit<TData, "pageNumber" | "pageSize">

export type ErrorBoundaryProps = {
  error: Error & { digest?: string }
  reset: () => void
}
