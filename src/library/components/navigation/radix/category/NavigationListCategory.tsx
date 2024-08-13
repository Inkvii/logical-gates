import { forwardRef, ReactNode, Ref } from "react"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { NavigationMenuListProps } from "@radix-ui/react-navigation-menu"
import { twMerge } from "tailwind-merge"
import { CaretDown } from "@phosphor-icons/react/dist/ssr"
import IconConstants from "@/library/utils/IconConstants"
import useNavigationButtonTheme from "@/theme/navigation/radix/category/useNavigationButtonTheme"

export type Props = NavigationMenuListProps & {
  name: string
  children: ReactNode
}

function Component({ name, children, ...props }: Props, ref: Ref<HTMLButtonElement>) {
  const theme = useNavigationButtonTheme()

  return (
    <NavigationMenu.List {...props} data-testid={"navigation-list"}>
      <NavigationMenu.Item className={"relative"} data-testid={"navigation-item"}>
        <NavigationMenu.Trigger
          ref={ref}
          className={twMerge("group flex items-center justify-between gap-2", theme)}
          data-testid={"navigation-trigger"}
        >
          <span>{name}</span>
          <CaretDown size={IconConstants.md} className={twMerge("transition", "group-data-[state=open]:-rotate-180")} />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content
          data-testid={"navigation-content"}
          className={twMerge(
            "data-[motion=from-start]:animate-enterFromLeft",
            "data-[motion=from-end]:animate-enterFromRight",
            "data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight",
            "absolute top-0 left-0",
            "w-full"
          )}
        >
          {children}
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  )
}

/**
 * Special version of NavigationTopLink that contains subcategories. Hovering the component triggers its opening
 */
export const NavigationListCategory = forwardRef(Component)
