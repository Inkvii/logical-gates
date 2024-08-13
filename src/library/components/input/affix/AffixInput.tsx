"use client"

import { forwardRef, ReactElement, Ref, useState } from "react"
import { AriaTextFieldProps, useFocusWithin, useTextField } from "react-aria"
import { useObjectRef } from "@react-aria/utils"
import { twMerge } from "tailwind-merge"
import useRegexValidation from "@/library/input/hooks/useRegexValidation"
import useCustomFocusSelector, { CustomFocusSelectorTrigger } from "@/library/input/hooks/useCustomFocusSelector"
import Affix from "@/library/input/affix/Affix"
import useInputSize from "@/theme/input/useInputSize"
import { InputSize } from "@/theme/input/InputSize"
import { useFormFieldContext } from "@/library/form/field/FormFieldContext"

export type Props = Omit<AriaTextFieldProps, "size" | "label"> & {
  trigger?: CustomFocusSelectorTrigger
  size?: InputSize
  prefix?: ReactElement<typeof Affix>
  suffix?: ReactElement<typeof Affix>
  regex?: RegExp
  disableCustomFocusSelector?: boolean
  className?: string
}

export default function Component(
  { prefix, suffix, regex, className, size, trigger, disableCustomFocusSelector, ...props }: Props,
  ref: Ref<HTMLInputElement>
) {
  const [isFocusWithin, setIsFocusWithin] = useState<boolean>(false)
  const mergedRef = useObjectRef(ref)

  const { focusWithinProps } = useFocusWithin({
    onFocusWithinChange: (isFocusWithin) => setIsFocusWithin(isFocusWithin),
  })
  const { label, isInvalid } = useFormFieldContext()
  const { inputProps } = useTextField(
    {
      ...props,
      "aria-label": props["aria-label"] ?? label,
      isInvalid: props.isInvalid ?? isInvalid,
    },
    mergedRef
  )
  const { handleOnChange } = useRegexValidation(inputProps.defaultValue, regex, inputProps.onChange)
  const { handleOnFocus } = useCustomFocusSelector(
    inputProps.onFocus,
    disableCustomFocusSelector || props.isDisabled || props.isReadOnly,
    trigger
  )

  const inputSize = useInputSize(size)

  return (
    <div
      {...focusWithinProps}
      aria-invalid={inputProps["aria-invalid"]}
      data-focus-visible={isFocusWithin || undefined}
      data-readonly={inputProps.readOnly || undefined}
      data-testid={"affix-input-container"}
      onClick={(e) => {
        mergedRef.current?.focus()
        focusWithinProps.onClick?.(e)
      }}
      className={twMerge(
        "group",
        "flex items-stretch",
        "border rounded",
        "border-neutral-200 dark:border-neutral-600",
        "transition-all overflow-hidden",
        "focus-within:border-primary-600 dark:focus-within:border-primary-400",
        "data-[readonly=true]:border-neutral-200 dark:data-[readonly=true]:border-neutral-600",

        "aria-[invalid=true]:border-error dark:aria-[invalid=true]:border-error-dark",
        "aria-[invalid=true]:data-[readonly=true]:border-error dark:aria-[invalid=true]:data-[readonly=true]:border-error-dark",

        "data-[focus-visible=true]:outline-primary-500 dark:data-[focus-visible=true]:outline-primary-400",

        "aria-[invalid=true]:data-[focus-visible=true]:outline-error dark:aria-[invalid=true]:data-[focus-visible=true]:outline-error-dark",
        className
      )}
    >
      {prefix}
      <input
        {...inputProps}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        className={twMerge(
          "bg-neutral-50 dark:bg-neutral-800 grow transition-colors",
          "input--read-modifiers",
          inputSize,
          inputProps.className
        )}
        ref={mergedRef}
        data-testid={"affix-input"}
      />
      {suffix}
    </div>
  )
}

export const AffixInput = forwardRef(Component)
