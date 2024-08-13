import { EmptyObject } from "@/library/router/types/EmptyObject"

export type RoutePathParam<T = EmptyObject> = T extends EmptyObject ? { pathParams?: EmptyObject } : { pathParams: T }
