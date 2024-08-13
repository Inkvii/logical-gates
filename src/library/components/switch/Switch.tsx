"use client"

import { forwardRef, Ref } from "react"
import { Switch as ReactAriaSwitch, SwitchProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import parseReactAriaClassName from "@/library/utils/parseReactAriaClassName"

export type Props = Omit<SwitchProps, "value"> & {
  label: string
}

export default function Component({ label, ...props }: Props, ref: Ref<HTMLLabelElement>) {
  return (
    <ReactAriaSwitch
      {...props}
      ref={ref}
      className={(renderProps) =>
        twMerge(
          "flex gap-2 group items-center cursor-pointer w-fit",
          "typography-body dark:typography-dark-body",
          "data-[disabled=true]:typography-caption dark:data-[disabled=true]:typography-dark-caption",
          parseReactAriaClassName(renderProps, props.className)
        )
      }
      data-testid={"switch-button"}
    >
      <div
        className={twMerge(
          "rounded-full w-[2.4rem]  h-6 px-0.5",
          "flex items-center",
          "border border-primary-400 dark:border-primary-600",
          "transition-all",
          "shrink-0",
          "group-data-[focus-visible=true]:ring",
          "focusable",
          "bg-primary-50 dark:bg-primary-800",
          props.isSelected && ["bg-primary-600 dark:bg-primary-600", "border-primary-500 dark:border-primary-500"],
          props.isReadOnly && ["bg-neutral-200 dark:bg-neutral-600", "border-neutral-300 dark:border-neutral-500"],
          props.isDisabled && ["bg-neutral-200 dark:bg-neutral-600", "border-neutral-300 dark:border-neutral-500"]
        )}
      >
        <span
          className={twMerge(
            "rounded-full w-4 h-4 aspect-square",
            "bg-primary-400 dark:bg-primary-500",
            "transform duration-200",
            props.isSelected && ["translate-x-full", "bg-primary-300 dark:bg-primary-300"],
            props.isReadOnly && ["bg-neutral-600 dark:bg-neutral-700"],
            props.isDisabled && ["bg-neutral-400 dark:bg-neutral-700"]
          )}
        />
      </div>
      {label}
    </ReactAriaSwitch>
  )
}

export const Switch = forwardRef(Component)
