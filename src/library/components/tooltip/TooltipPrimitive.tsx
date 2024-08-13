"use client"
import { Button, OverlayArrow, Tooltip as AriaTooltip, TooltipProps, TooltipTrigger } from "react-aria-components"
import { forwardRef, ReactNode, Ref } from "react"
import { twMerge } from "tailwind-merge"
import { TooltipTriggerProps } from "react-aria"

type Props = Omit<TooltipProps, "children" | "className"> & {
  children: ReactNode
  className?: string
}

function Component({ children, ...props }: Props, ref: Ref<HTMLDivElement>) {
  return (
    <AriaTooltip {...props} ref={ref} data-testid={"tooltip-content"}>
      <OverlayArrow
        className={twMerge(
          "stroke-neutral-700 dark:stroke-neutral-950",
          "fill-neutral-700 dark:fill-neutral-950",
          "group"
        )}
      >
        <svg
          width={16}
          height={16}
          className={
            "group-data-[placement=bottom]:rotate-180 group-data-[placement=right]:rotate-90 group-data-[placement=left]:-rotate-90"
          }
        >
          <path d="M0 0,L8 8,L16 0" />
        </svg>
      </OverlayArrow>
      {children}
    </AriaTooltip>
  )
}

export const TooltipContent = forwardRef(Component)

export function TooltipPrimitive(props: {
  tooltip: ReactNode
  tooltipTriggerProps?: TooltipTriggerProps
  tooltipProps?: Omit<Props, "children">
  children: ReactNode
}) {
  return (
    <TooltipTrigger {...props.tooltipTriggerProps} delay={props.tooltipTriggerProps?.delay ?? 500}>
      <Button className={"max-w-full cursor-default"}>{props.children}</Button>
      <TooltipContent
        {...props.tooltipProps}
        offset={props.tooltipProps?.offset ?? 10}
        className={twMerge(
          "p-2 rounded",
          "bg-neutral-700 dark:bg-neutral-950",
          "text-xs text-neutral-50",
          props.tooltipProps?.className
        )}
      >
        {props.tooltip}
      </TooltipContent>
    </TooltipTrigger>
  )
}
