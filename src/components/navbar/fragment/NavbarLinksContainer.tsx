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
        <NavbarContent.Link href={urlTo({ route: Routes.public.home })}>Home</NavbarContent.Link>
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
          {placeholders.map((name) => (
            <NavbarContent.Category.Item
              key={name}
              name={name}
              description={"Just a placeholder item"}
              href={urlTo({ route: Routes.public.home })}
              disabled={true}
            />
          ))}
        </NavbarContent.Category.Root>
        <NavbarContent.Viewport />
      </NavbarContent.Root>
    </Root>
  )
}
const placeholders = new Array<string>(10).fill("Hodor").map((name, index) => `${name} ${index}`)
