"use client"
import { twMerge } from "tailwind-merge"
import { CaretRight } from "@phosphor-icons/react/dist/ssr"
import IconConstants from "@/library/utils/IconConstants"
import { ReactNode } from "react"
import { useFocusRing } from "react-aria"
import { HueVariable } from "@/theme/css/HueVariable"

export type Props = {
  hue?: HueVariable
  isOpen: boolean
  summary: ReactNode
  children: ReactNode
  "data-testid"?: string
  className?: string
}
export default function CollapsiblePanel({ hue = "neutral", ...props }: Props) {
  const { isFocusVisible, focusProps, isFocused } = useFocusRing()
  return (
    <details
      className={twMerge(
        hue,
        "group rounded",
        "bg-hue-50 dark:bg-hue-700",
        "border border-hue-200 dark:border-hue-600",
        "focusable",
        props.className
      )}
      data-focus-visible={isFocusVisible || undefined}
      data-focused={isFocused || undefined}
      data-testid={props["data-testid"]}
      open={props.isOpen}
    >
      <summary {...focusProps} className={twMerge("relative pl-4 py-2 pr-12 block min-h-4 select-none cursor-pointer")}>
        <CaretRight size={IconConstants.lg} className={"absolute top-2 right-4 transition group-open:-rotate-90"} />
        <span>{props.summary}</span>
      </summary>

      <hr className={"border-hue-200 dark:border-hue-600"} />
      <div className={"p-4 dark:bg-hue-800 rounded-b"}>{props.children}</div>
    </details>
  )
}
