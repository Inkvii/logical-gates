"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { twMerge } from "tailwind-merge"
import { X } from "@phosphor-icons/react/dist/ssr"
import { HueVariable } from "@/theme/css/HueVariable"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={twMerge(
      "fixed top-0 z-50 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
// eslint-disable-next-line
// @ts-ignore
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & { hue?: HueVariable }
>(({ className, hue = "neutral", ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={twMerge(
        hue,
        "text-hue-700 dark:text-hue-50",
        "bg-hue-50 dark:bg-hue-950",
        "w-full flex items-center justify-between space-x-4 p-6 pr-8",
        "group pointer-events-auto relative overflow-hidden shadow-lg transition-all",
        "rounded-md border",
        "border-hue-200 dark:border-hue-800",
        "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[swipe=end]:animate-out",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        className
      )}
      {...props}
    />
  )
})

// eslint-disable-next-line
// @ts-ignore
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={twMerge(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-neutral-100/40 group-[.destructive]:hover:border-danger-500/30 group-[.destructive]:hover:bg-danger-500 group-[.destructive]:hover:text-neutral-50 group-[.destructive]:focus:ring-danger-500 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:focus:ring-neutral-300 dark:group-[.destructive]:border-neutral-800/40 dark:group-[.destructive]:hover:border-danger-900/30 dark:group-[.destructive]:hover:bg-danger-900 dark:group-[.destructive]:hover:text-neutral-50 dark:group-[.destructive]:focus:ring-danger-900",
      className
    )}
    {...props}
  />
))

// eslint-disable-next-line
// @ts-ignore
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={twMerge(
      "absolute right-2 top-2 rounded-md p-1 text-neutral-950/50 opacity-0 transition-opacity hover:text-neutral-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-danger-300 group-[.destructive]:hover:text-danger-50 group-[.destructive]:focus:ring-danger-400 group-[.destructive]:focus:ring-offset-danger-600 dark:text-neutral-50/50 dark:hover:text-neutral-50",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))

// eslint-disable-next-line
// @ts-ignore
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={twMerge("text-sm font-semibold", className)} {...props} />
))

// eslint-disable-next-line
// @ts-ignore
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={twMerge("text-sm opacity-90", className)} {...props} />
))

// eslint-disable-next-line
// @ts-ignore
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
