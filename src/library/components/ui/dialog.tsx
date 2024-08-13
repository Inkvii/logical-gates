"use client"

import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "@phosphor-icons/react/dist/ssr"
import { twMerge } from "tailwind-merge"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={twMerge(
      "fixed inset-0 bg-neutral-950/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
// eslint-disable-next-line
// @ts-ignore
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={twMerge(
        "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-6",
        "grid gap-4 w-full max-w-lg",
        "bg-white dark:bg-neutral-950",
        "border sm:rounded-lg",
        "border-neutral-200 dark:border-neutral-800",
        "shadow-lg",
        "duration-200",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={twMerge(
          "absolute right-4 top-4 opacity-70",
          "rounded-sm ring-offset-white dark:ring-offset-neutral-950",
          "transition-opacity",
          "hover:opacity-100",
          "focus:outline-none focus:ring-2 focus:ring-neutral-950 dark:focus:ring-neutral-300",
          "focus:ring-offset-2",
          "data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-800",
          "data-[state=open]:text-neutral-500 dark:data-[state=open]:text-neutral-400",
          "disabled:pointer-events-none"
        )}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
// eslint-disable-next-line
// @ts-ignore
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={twMerge("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={twMerge("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={twMerge("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
// eslint-disable-next-line
// @ts-ignore
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={twMerge("text-sm text-neutral-500 dark:text-neutral-400", className)}
    {...props}
  />
))
// eslint-disable-next-line
// @ts-ignore
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
