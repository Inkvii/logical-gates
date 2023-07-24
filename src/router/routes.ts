import { Route } from "router/router"

const home: Route = {
  path: "/",
}

/**
 * Implementation of the route system
 */
const routes = { home } as const

export default routes
