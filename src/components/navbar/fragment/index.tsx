import { NavigationTopLink } from "@/library/navigation/radix/NavigationTopLink"
import NavbarCategory from "components/navbar/fragment/NavbarCategory"
import { NavigationListItem } from "@/library/navigation/radix/category/NavigationListItem"
import { ReactNode } from "react"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { twMerge } from "tailwind-merge"

export const NavbarContent = {
  Root: NavbarRoot,
  Link: NavigationTopLink,
  Category: {
    Root: NavbarCategory,
    Item: NavigationListItem,
  },
  Viewport: ViewportWrapper,
}

function NavbarRoot(props: { children: ReactNode }) {
  return <NavigationMenu.List className={"flex flex-wrap gap-2 relative z-20"}>{props.children}</NavigationMenu.List>
}

function ViewportWrapper() {
  return (
    <div className="absolute top-full left-0 flex w-full">
      <NavigationMenu.Viewport
        className={twMerge(
          "w-full max-w-5xl",
          "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut",
          "relative mt-2 ",
          "h-[var(--radix-navigation-menu-viewport-height)] origin-[top_center]",
          "overflow-hidden",
          "bg-neutral-50 dark:bg-neutral-700",
          "border rounded border-neutral-100 dark:border-neutral-600",
          "shadow-lg dark:shadow-neutral-700",
          "duration-300"
        )}
      />
    </div>
  )
}
