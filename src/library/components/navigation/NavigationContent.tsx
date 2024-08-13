export { NavigationTopLink as Link } from "@/library/navigation/radix/NavigationTopLink"
import { NavigationListCategory } from "@/library/navigation/radix/category/NavigationListCategory"
import { NavigationListItem } from "@/library/navigation/radix/category/NavigationListItem"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"

export const Content = {
  Root: NavigationListCategory,
  List: {
    Root: NavigationMenu.List,
    Item: NavigationListItem,
  },
}
