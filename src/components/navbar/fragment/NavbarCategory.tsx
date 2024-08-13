import { NavigationListCategory, Props } from "@/library/navigation/radix/category/NavigationListCategory"
import { twMerge } from "tailwind-merge"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"

export default function NavbarCategory({ children, ...props }: Props) {
  return (
    <NavigationListCategory {...props}>
      <NavigationMenu.List className={twMerge("p-4", "grid lg:grid-cols-2 grid-cols-1 gap-2")}>
        {children}
      </NavigationMenu.List>
    </NavigationListCategory>
  )
}
