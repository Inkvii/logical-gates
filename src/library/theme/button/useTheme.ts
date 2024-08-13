import { ButtonVariant } from "@/theme/button/type/ButtonVariant"
import { HueVariable } from "@/theme/css/HueVariable"
//@tw
const configClass = {
  solid: [
    "text-white",
    "border-2",
    "disabled:bg-neutral-400 dark:disabled:bg-neutral-400",
    "disabled:border-neutral-400 dark:disabled:border-neutral-400",
    "disabled:text-neutral-100 dark:disabled:text-neutral-600",
    "[&_:where(svg)]:disabled:fill-neutral-200 dark:[&_:where(svg)]:disabled:fill-neutral-600",
    "[&_:where(svg)]:fill-white",

    "bg-hue-600 dark:bg-hue-600",
    "border-hue-600 dark:border-hue-600",

    "data-[hovered=true]:bg-hue-700 dark:data-[hovered=true]:bg-hue-700",
    "data-[hovered=true]:border-hue-700 dark:data-[hovered=true]:border-hue-700",
    "data-[hovered=true]:text-hue-50 dark:data-[hovered=true]:text-hue-50",

    "data-[pressed=true]:bg-hue-800 dark:data-[pressed=true]:bg-hue-800",
    "data-[pressed=true]:border-hue-800 dark:data-[pressed=true]:border-hue-800",
    "data-[pressed=true]:text-hue-50 dark:data-[pressed=true]:text-hue-50",
  ],
  outline: [
    "disabled:bg-neutral-300 dark:disabled:bg-neutral-700",
    "disabled:border-neutral-400 dark:disabled:border-neutral-600",
    "disabled:text-neutral-50 dark:disabled:text-neutral-200",
    "[&_:where(svg)]:disabled:fill-neutral-50 dark:[&_:where(svg)]:disabled:fill-neutral-300",
    "border-2",

    "text-hue-600 dark:text-hue-400",
    "bg-hue-50 dark:bg-transparent",
    "border-hue-500 dark:border-hue-400",

    "data-[hovered=true]:text-hue-600 dark:data-[hovered=true]:text-hue-500",
    "data-[hovered=true]:bg-hue-50/20 dark:data-[hovered=true]:bg-transparent",
    "data-[hovered=true]:border-hue-600 dark:data-[hovered=true]:border-hue-500",

    "data-[pressed=true]:text-hue-700 dark:data-[pressed=true]:text-hue-600",
    "data-[pressed=true]:bg-hue-50/30 dark:data-[pressed=true]:bg-transparent/20",
    "data-[pressed=true]:border-hue-700 dark:data-[pressed=true]:border-hue-600",

    "[&_:where(svg)]:fill-hue-600 dark:[&_:where(svg)]:fill-hue-400",
  ],
  hyperlink: [
    "disabled:text-neutral-600 dark:disabled:text-neutral-400",
    "data-[disabled=true]:text-neutral-600 dark:data-[disabled=true]:text-neutral-400",
    "[&_:where(svg)]:disabled:fill-neutral-600 dark:[&_:where(svg)]:disabled:fill-neutral-400",
    "[&_:where(svg)]:data-[disabled=true]:fill-neutral-600 dark:[&_:where(svg)]:data-[disabled=true]:fill-neutral-400",

    "text-hue-500 dark:text-hue-400",

    "data-[hovered=true]:text-hue-400 dark:data-[hovered=true]:text-hue-300",

    "data-[pressed=true]:text-hue-500 dark:data-[pressed=true]:text-hue-200",
    "data-[pressed=true]:bg-hue-50/60 dark:data-[pressed=true]:bg-hue-800",

    "[&_:where(svg)]:fill-hue-600 dark:[&_:where(svg)]:fill-hue-400",
  ],
} satisfies Record<ButtonVariant, string[]>
//@tw-end

export default function useTheme(variant: ButtonVariant, hue: HueVariable): string[] {
  return [
    hue,
    "select-none font-semibold transition-all",
    "flex gap-2 items-center justify-center",
    "max-w-xs w-fit min-w-[3rem]",
    "data-[loading=true]:cursor-wait disabled:cursor-not-allowed",
    "rounded",
    "[&_:where(svg)]:shrink-0",
    ...configClass[variant],
  ]
}
