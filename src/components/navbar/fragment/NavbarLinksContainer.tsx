"use client"
import { urlTo } from "@/library/router/urlTo"
import { useSession } from "next-auth/react"
import { Root } from "@radix-ui/react-navigation-menu"
import { NavbarContent } from "components/navbar/fragment"
import { Routes } from "router/routes"

export type Props = {
  className?: string
}

export default function NavbarLinksContainer(props: Props) {
  const session = useSession()

  if (!session.data) {
    return null
  }

  return (
    <Root className={props.className}>
      <NavbarContent.Root>
        <NavbarContent.Category.Root name={"Menu"}>
          <NavbarContent.Category.Item
            name={Routes.public.home.name}
            description={Routes.public.home.description}
            href={urlTo({ route: Routes.public.home })}
          />
          <NavbarContent.Category.Item
            name={Routes.private.playground.name}
            description={Routes.private.playground.description}
            href={urlTo({ route: Routes.private.playground })}
          />
        </NavbarContent.Category.Root>
        <NavbarContent.Viewport />
      </NavbarContent.Root>
    </Root>
  )
}
