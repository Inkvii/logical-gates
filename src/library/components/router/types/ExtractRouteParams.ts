import { Route } from "@/library/router/types/Route"
import { ReactNode } from "react"

/**
 * Type used for extracting generic parameters from Route.
 *
 * Resulting type is compatible with app router`s page
 */
export type ExtractRouteParams<TRoute> =
  TRoute extends Route<infer TSearchParams, infer TVariables, infer TParallelRoutes>
    ? { params: TVariables; searchParams: TSearchParams; children?: ReactNode } & TParallelRoutes
    : never
export type ExtractRouteParamsOnly<TRoute> =
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  TRoute extends Route<infer TSearchParams, infer TVaritables, infer TParallelRoutes> ? TVaritables : never
