"use client"

import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Dialog, DialogContent } from "library/components/ui/dialog"
import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import IconConstants from "@/library/utils/IconConstants"
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"

const Command = forwardRef<ElementRef<typeof CommandPrimitive>, ComponentPropsWithoutRef<typeof CommandPrimitive>>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive
      ref={ref}
      className={twMerge("flex h-full w-full flex-col overflow-hidden rounded-md", className)}
      {...props}
    />
  )
)
// eslint-disable-next-line
// @ts-ignore
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 dark:[&_[cmdk-group-heading]]:text-neutral-400">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center px-2 gap-2">
    <MagnifyingGlass size={IconConstants.sm} className="shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={twMerge(
        "flex w-full py-2 text-sm",
        "placeholder:text-neutral-500 dark:placeholder:text-neutral-400",
        "disabled:cursor-not-allowed disabled:opacity-50 ",
        "bg-transparent",
        className
      )}
      {...props}
    />
  </div>
))
// eslint-disable-next-line
// @ts-ignore
CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = forwardRef<
  ElementRef<typeof CommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={twMerge("max-h-80 overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

// eslint-disable-next-line
// @ts-ignore
CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = forwardRef<
  ElementRef<typeof CommandPrimitive.Empty>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />)

// eslint-disable-next-line
// @ts-ignore
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = forwardRef<
  ElementRef<typeof CommandPrimitive.Group>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={twMerge(
      "overflow-hidden p-1",
      "text-neutral-950 dark:text-neutral-50",
      "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5",
      "[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      "[&_[cmdk-group-heading]]:text-neutral-500 dark:[&_[cmdk-group-heading]]:text-neutral-400",
      className
    )}
    {...props}
  />
))
// eslint-disable-next-line
// @ts-ignore
CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = forwardRef<
  ElementRef<typeof CommandPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={twMerge("h-px bg-neutral-200 dark:bg-neutral-700", className)}
    {...props}
  />
))
// eslint-disable-next-line
// @ts-ignore
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitive.Item>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={twMerge(
      "flex items-center gap-2",
      "cursor-pointer select-none",
      "rounded px-2 py-1.5 text-sm",
      "aria-selected:primary",
      "aria-selected:bg-hue-100 dark:aria-selected:bg-hue-800",
      "aria-selected:text-hue-900 dark:aria-selected:text-hue-50",
      "data-[disabled=true]:pointer-events-none",
      "data-[disabled=true]:text-neutral-300 dark:data-[disabled=true]:text-neutral-500",
      className
    )}
    {...props}
  />
))
// eslint-disable-next-line
// @ts-ignore
CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={twMerge("ml-auto text-xs tracking-widest text-neutral-500 dark:text-neutral-400", className)}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
