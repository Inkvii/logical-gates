"use client"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { TooltipPrimitive } from "@/library/tooltip/TooltipPrimitive"
import { HueVariable } from "@/theme/css/HueVariable"
import { BadgeSize } from "@/theme/badge/BadgeSize"
import useBadgeSize from "@/theme/badge/useBadgeSize"

export type Props = {
  hue?: HueVariable
  tooltip?: ReactNode
  className?: string
  size?: BadgeSize
  children: ReactNode
}

export default function Badge({ size = "normal", ...props }: Props) {
  const sizeTheme = useBadgeSize(size)
  return (
    <TooltipPrimitive tooltipTriggerProps={{ delay: 500 }} tooltip={props.tooltip ? props.tooltip : props.children}>
      <div
        className={twMerge(
          props.hue,
          "truncate rounded-full shadow border-2",
          "text-hue-800 dark:text-hue-200",
          "bg-hue-200 dark:bg-hue-900",
          "border-hue-300 dark:border-hue-700",
          sizeTheme,
          props.className
        )}
        data-testid={"badge"}
      >
        {props.children}
      </div>
    </TooltipPrimitive>
  )
}
