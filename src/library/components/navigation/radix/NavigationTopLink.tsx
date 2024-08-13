import { forwardRef, ReactNode, Ref } from "react"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { twMerge } from "tailwind-merge"
import Link from "next/link"
import { UrlObjectWithPath } from "@/library/router/types/UrlObjectWithPath"
import useNavigationButtonTheme from "@/theme/navigation/radix/category/useNavigationButtonTheme"

export type Props = { href: UrlObjectWithPath; children: ReactNode; className?: string }

function Component(props: Props, ref: Ref<HTMLAnchorElement>) {
  const theme = useNavigationButtonTheme()
  return (
    <NavigationMenu.Item asChild={true} className={twMerge(theme, props.className)}>
      <NavigationMenu.Link asChild={true}>
        <Link data-testid={"navigation-link"} href={props.href} ref={ref}>
          {props.children}
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  )
}

export const NavigationTopLink = forwardRef(Component)
