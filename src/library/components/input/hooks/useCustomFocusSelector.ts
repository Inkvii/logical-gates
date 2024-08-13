import { FocusEvent } from "react"

export type CustomFocusSelectorTrigger = "zero" | "all"

export default function useCustomFocusSelector(
  onFocus: ((e: FocusEvent<HTMLInputElement>) => void) | undefined,
  isDisabled: boolean = false,
  trigger: CustomFocusSelectorTrigger = "zero"
) {
  const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (isDisabled) {
      onFocus?.(e)
      e.target.setSelectionRange(0, 0)
      return
    }

    switch (trigger) {
      case "zero":
        if (e.target.value === "0") {
          e.target.select()
        }
        break
      case "all":
        e.target.select()
        break
    }

    onFocus?.(e)
  }

  return { handleOnFocus }
}
