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
        <NavbarContent.Category.Root name={"Schemas"}>
          <NavbarContent.Category.Item
            name={Routes.private.user.name}
            description={Routes.private.user.description}
            href={urlTo({ route: Routes.private.user })}
          />
          <NavbarContent.Category.Item
            name={"Create new schema"}
            description={"Creates blank schema"}
            href={urlTo({ route: Routes.private.userSchema, pathParams: { schema: "new" } })}
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
const placeholders = new Array<string>(4).fill("Hodor").map((name, index) => `${name} ${index}`)
