import LoginForm from "app/auth/login/LoginForm"

import { ExtractRouteParams } from "@/library/router/types/ExtractRouteParams"
import { Metadata } from "next"
import { Routes } from "router/routes"

export const metadata: Metadata = {
  title: "Log in page",
}

export type Props = ExtractRouteParams<typeof Routes.public.login>
export default async function SignInPage(props: Props) {
  return (
    <main className={"px-page-default"}>
      <LoginForm callbackUrl={props.searchParams.callbackUrl} error={props.searchParams.error} />
    </main>
  )
}
