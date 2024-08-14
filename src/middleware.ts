import { NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { JWT } from "next-auth/jwt"

type RequestWithToken = Omit<NextRequestWithAuth, "nextauth"> & {
  nextauth: {
    token: JWT
  }
}

export const config = {
  matcher: ["/users/:path*"],
}

export default withAuth((baseReq) => {
  const request = baseReq as RequestWithToken
  console.log(
    `> MIDDLEWARE REQUEST`,
    JSON.stringify({
      user: request.nextauth.token.email,
      method: request.method,
      pathname: request.nextUrl.pathname,
      search: request.nextUrl.search,
    }),
  )
})
