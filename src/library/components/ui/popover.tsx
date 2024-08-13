"use client"

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { twMerge } from "tailwind-merge"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "start", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      {...props}
      align={align}
      sideOffset={sideOffset}
      className={twMerge(
        "rounded overflow-hidden border",
        "border-neutral-200 dark:border-neutral-700",
        "bg-neutral-50 dark:bg-neutral-800",
        "text-neutral-950  dark:text-neutral-50",
        "shadow-md dark:shadow-neutral-700",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:zoom-out-95",
        "data-[state=closed]:fade-out-0",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
    />
  </PopoverPrimitive.Portal>
))

// eslint-disable-next-line
// @ts-ignore
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
