import { EmptyObject } from "@/library/router/types/EmptyObject"
import { Permission } from "auth/Permission"

/**
 * <p>
 * Route type that is going to be used primarily for routing purposes.
 * </p>
 * <p>
 *   Although nextjs registers routes using physical file path system, this type will offer autocompletion when using
 * </p>
 * <pre>
 *   router.push(...)
 * </pre>
 * or links
 * <pre>
 *   <Link href={urlTo(routes.homeRoute, variables, searchParams)}>my link</Link>
 * </pre>
 * <p>Example:</p>
 * <pre>
 *   const homeRoute: Route<
 *    {param1: string, param2: number},
 *    {id: number, name: string}
 *    > = {
 *      path: "/home/:id/details/:name/edit"
 *    }
 * </pre>
 * <p>Results in path: "http:localhost:3000/home/123/details/johndoe/edit"</p>
 */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export type Route<TQueryParams = EmptyObject, TPathParams = EmptyObject, TParallelRoutes = EmptyObject> = {
  path: string
  permissions: Permission[]
  name: string
  description: string
}

export function isRoute(obj: object): obj is Route {
  const o = obj as Route
  return o.path !== undefined && o.permissions !== undefined
}
