"use client"
import * as Dialog from "@radix-ui/react-dialog"
import { ReactNode, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Button, Props as ButtonProps } from "@/library/button/Button"
import { HueVariable } from "@/theme/css/HueVariable"

export type Props = {
  trigger: ReactNode
  title: string
  hue?: HueVariable
  accept: Partial<ButtonProps>
  decline?: Partial<ButtonProps>
  defaultOpen?: boolean
  className?: string
  children: ReactNode
}

export default function ConfirmationDialog({ defaultOpen = false, ...props }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen)

  return (
    <Dialog.Root onOpenChange={setIsOpen} open={isOpen}>
      <Dialog.Trigger asChild={true}>{props.trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={twMerge("fixed inset-0", "bg-neutral-100/60 dark:bg-neutral-900/70", "backdrop-blur")}
        />
        <Dialog.Content
          className={twMerge(
            "fixed",
            "inset-x-8 top-1/2 -translate-y-1/2 max-h-[70dvh] max-w-4xl mx-auto",
            "overflow-y-auto",
            "rounded-xl border-2",
            "bg-neutral-50 dark:bg-neutral-900",
            "border-neutral-100 dark:border-neutral-800",
            "shadow-lg shadow-neutral-200 dark:shadow-neutral-950",
            "p-8"
          )}
        >
          <Dialog.Title asChild={true}>
            <h2>{props.title}</h2>
          </Dialog.Title>
          <div className={twMerge("flex flex-col gap-2 min-h-[10rem]", props.className)}>
            {props.children}

            <div
              className={twMerge("flex gap-2 grow justify-end items-end", "*:grow", "@container", "*:@[300px]:grow-0")}
              data-testid={"actions"}
            >
              <Button
                {...props.decline}
                variant={"outline"}
                type={"button"}
                hue={props.hue}
                children={props.decline?.children ?? "Decline"}
                onPress={(e) => {
                  props.decline?.onPress?.(e)
                  setIsOpen(false)
                }}
              />

              <Button
                {...props.accept}
                variant={"solid"}
                type={"submit"}
                hue={props.hue}
                children={props.accept.children ?? "Accept"}
                onPress={(e) => {
                  props.accept?.onPress?.(e)
                  setIsOpen(false)
                }}
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
