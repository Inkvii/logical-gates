import { Button } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { CaretDown } from "@phosphor-icons/react/dist/ssr"
import IconConstants from "@/library/utils/IconConstants"
import { forwardRef, ReactNode, Ref } from "react"
import { PressEvent } from "@react-types/shared/src/events"

export type Props = {
  "aria-label"?: string
  isInvalid?: boolean
  isDisabled?: boolean
  className?: string
  open: boolean
  onPress?: (e: PressEvent) => void
  onBlur?: () => void
  children: ReactNode
}

function Component(props: Props, ref: Ref<HTMLButtonElement>) {
  return (
    <Button
      ref={ref}
      onBlur={props.onBlur}
      aria-label={props["aria-label"]}
      data-invalid={props.isInvalid}
      isDisabled={props.isDisabled}
      aria-expanded={props.open}
      className={twMerge(
        "rounded border",
        "bg-neutral-50 dark:bg-neutral-800",
        "border-neutral-200 dark:border-neutral-600",

        "px-4 py-2 min-w-[10rem] h-fit",
        "aria-expanded:border-primary-600 dark:aria-expanded:border-primary-400",
        "focus:border-primary-600 dark:focus:border-primary-400",
        "focus-visible:focus-outline",
        "flex items-center justify-between group gap-2",
        "text-left",
        props.isInvalid && [
          "border-error dark:border-error-dark",
          "focus:border-error dark:focus:border-error-dark",
          "aria-expanded:border-error dark:aria-expanded:border-error-dark",
          "focus:outline-error dark:focus:outline-error-dark",
        ],
        props.isDisabled && [
          "border-primary-600/10 dark:border-primary-700/20",
          "cursor-not-allowed",
          "typography-caption dark:typography-dark-caption",
        ],
        props.className
      )}
      onPress={props.onPress}
    >
      {props.children}
      <CaretDown
        className={twMerge(
          "group-aria-[expanded=true]:rotate-180 transition-transform",
          "group-data-[disabled=true]:fill-neutral-400 dark:group-data-[disabled=true]:fill-neutral-600",
          "group-data-[invalid=true]:fill-error dark:group-data-[invalid=true]:fill-error-dark",
          "fill-primary-700 dark:fill-primary-400"
        )}
        size={IconConstants.lg}
      />
    </Button>
  )
}

export const ComboBoxTrigger = forwardRef(Component)
