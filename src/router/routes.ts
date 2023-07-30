import { Route } from "router/router"

/**
 * Implementation of the route system
 */
const routes = {
  home: {
    path: "/",
  },
  playground: {
    path: "/playground",
  },
} satisfies { [key: string]: Route }

export default routes
