import { PrivateRoutes } from "router/PrivateRoutes"
import { PublicRoutes } from "router/PublicRoutes"

/**
 * Implementation of the route system
 */
export const Routes = {
  private: PrivateRoutes,
  public: PublicRoutes,
} as const
