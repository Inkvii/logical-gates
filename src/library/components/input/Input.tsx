"use client"
import { forwardRef, Ref } from "react"

import { Input as ReactAriaInput, InputProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import useInputSize from "@/theme/input/useInputSize"
import { InputSize } from "@/theme/input/InputSize"
import parseReactAriaClassName from "@/library/utils/parseReactAriaClassName"
import useCustomFocusSelector, { CustomFocusSelectorTrigger } from "@/library/input/hooks/useCustomFocusSelector"

export type Props = Omit<InputProps, "size"> & {
  size?: InputSize
  trigger?: CustomFocusSelectorTrigger
  disableCustomFocusSelector?: boolean
}

function Component({ size, trigger, disableCustomFocusSelector, ...props }: Props, ref: Ref<HTMLInputElement>) {
  const inputSize = useInputSize(size)

  const { handleOnFocus } = useCustomFocusSelector(
    props.onFocus,
    disableCustomFocusSelector || props.disabled || props.readOnly,
    trigger
  )

  return (
    <ReactAriaInput
      {...props}
      onFocus={handleOnFocus}
      className={(renderProps) =>
        twMerge(
          "input input--read-modifiers",
          "focus-outline",
          inputSize,
          parseReactAriaClassName(renderProps, props.className)
        )
      }
      ref={ref}
      data-testid={"input"}
    />
  )
}

export const Input = forwardRef(Component)
