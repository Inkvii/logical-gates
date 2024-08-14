"use client"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { twMerge } from "tailwind-merge"
import { Moon, SignOut } from "@phosphor-icons/react/dist/ssr"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/library/button/Button"
import { urlTo } from "@/library/router/urlTo"
import { Routes } from "router/routes"
import IconConstants from "@/library/utils/IconConstants"
import { useFocusRing } from "react-aria"
import { Gear } from "@phosphor-icons/react"

export type Props = {
  toggleDarkMode: () => Promise<void>
  className?: string
}
export default function NavbarUserSettings(props: Props) {
  const session = useSession()

  const linkTheme = twMerge(
    "data-[highlighted]:bg-primary-200 dark:data-[highlighted]:bg-primary-700",
    "group",
    "cursor-pointer  data-[disabled]:cursor-not-allowed",
    "data-[disabled]:bg-neutral-100 dark:data-[disabled]:bg-neutral-600",
    "data-[disabled]:*:text-neutral-500 dark:data-[disabled]:*:text-neutral-300",
    "flex gap-4 items-center",
    "px-4 py-2"
  )

  if (!session.data) {
    return (
      <div className={twMerge("grow flex justify-end", props.className)}>
        <Button
          hue={"neutral"}
          variant={"outline"}
          onPress={() => signIn(undefined, { callbackUrl: urlTo({ route: Routes.public.home }).path })}
        >
          Log in
        </Button>
      </div>
    )
  }

  return (
    <DropdownMenu.Root>
      <TriggerButton className={props.className} />
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={twMerge("bg-neutral-50 dark:bg-neutral-700", "rounded border", "dark:border-neutral-600")}
          aria-label={"navbar settings dialog"}
        >
          <DropdownMenu.Label className={"px-4 py-2"}>
            <h5>Logged as</h5>
            <p>{session.data.user?.name ?? ""}</p>
          </DropdownMenu.Label>

          <DropdownMenu.Item onSelect={() => props.toggleDarkMode()} className={linkTheme}>
            <Moon size={IconConstants.lg} />
            <p>Dark/Light theme</p>
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className={linkTheme}
            onSelect={async () => {
              await signOut({
                callbackUrl: urlTo({ route: Routes.public.home }).path,
                redirect: true,
              })
            }}
          >
            <SignOut size={IconConstants.lg} />
            <p>Log out</p>
          </DropdownMenu.Item>

          <DropdownMenu.Label className={"text-sm typography-caption dark:typography-dark-caption p-2"}>
            version {process.env.NEXT_PUBLIC_APP_VERSION}
          </DropdownMenu.Label>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

function TriggerButton(props: { className?: string }) {
  const { isFocusVisible, focusProps, isFocused } = useFocusRing()

  return (
    <DropdownMenu.Trigger
      {...focusProps}
      className={twMerge(
        "aspect-square w-10 rounded-full",
        "transition-all",
        "hover:text-primary-500 dark:hover:text-primary-500",
        "data-[state=open]:text-primary-400 dark:data-[state=open]:text-primary-400",
        "shrink-0",
        "focusable",
        props.className
      )}
      data-focus-visible={isFocusVisible || undefined}
      data-focused={isFocused || undefined}
      data-testid={"navbar-user-settings"}
    >
      <Gear className={"w-full h-full"} />
    </DropdownMenu.Trigger>
  )
}
