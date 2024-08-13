import { EmptyObject } from "@/library/router/types/EmptyObject"

export type RouteQueryParam<T = EmptyObject> = T extends EmptyObject
  ? { queryParams?: EmptyObject }
  : { queryParams: T }
