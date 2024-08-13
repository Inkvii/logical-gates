import { UrlObjectWithPath } from "@/library/router/types/UrlObjectWithPath"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import Link from "next/link"
import { forwardRef, Ref } from "react"
import { twMerge } from "tailwind-merge"

export type Props = {
  name: string
  description?: string
  href: UrlObjectWithPath
  disabled?: boolean
}

function Component(props: Props, ref: Ref<HTMLAnchorElement>) {
  return (
    <NavigationMenu.Item className={"h-full"}>
      <NavigationMenu.Link asChild={true}>
        <Link
          ref={ref}
          href={props.disabled ? "#" : props.href}
          className={twMerge(
            "cursor-pointer select-none",
            "px-4 py-2",
            "border border-neutral-200 dark:border-neutral-500",
            "rounded",
            "transition-all",
            "hover:aria-[disabled=false]:bg-primary-50 dark:hover:aria-[disabled=false]:bg-primary-900",
            "hover:aria-[disabled=false]:border-primary-300 dark:hover:aria-[disabled=false]:border-primary-700",
            "aria-[disabled=true]:bg-neutral-100 dark:aria-[disabled=true]:bg-neutral-800",
            "dark:aria-[disabled=true]:border-neutral-600",
            "focus-visible-outline",
            "h-full block",
            "aria-[disabled=true]:cursor-not-allowed",
            "group"
          )}
          aria-disabled={!!props.disabled}
          data-testid={"navigation-link"}
        >
          <div className={"flex flex-col"}>
            <h3
              className={twMerge(
                "text-neutral-700 dark:typography-dark-header",
                "group-aria-[disabled=true]:text-neutral-400 dark:group-aria-[disabled=true]:text-neutral-600"
              )}
            >
              {props.name}
            </h3>
            <p
              className={twMerge(
                "text-neutral-600 dark:typography-dark-body",
                "group-aria-[disabled=true]:text-neutral-400 dark:group-aria-[disabled=true]:text-neutral-600"
              )}
            >
              {props.description}
            </p>
          </div>
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  )
}

/**
 * Subcategory list item
 */
export const NavigationListItem = forwardRef(Component)
