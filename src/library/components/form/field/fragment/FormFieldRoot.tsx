"use client"
import { twMerge } from "tailwind-merge"
import { TextField, TextFieldProps } from "react-aria-components"
import parseReactAriaClassName from "@/library/utils/parseReactAriaClassName"
import { forwardRef, Ref, useState } from "react"
import { FormFieldContext } from "@/library/form/field/FormFieldContext"

function Component(props: Omit<TextFieldProps, "isInvalid">, ref: Ref<HTMLDivElement>) {
  const [label, setLabel] = useState<string | undefined>("Label")
  const [isInvalid, setIsInvalid] = useState<boolean>(false)

  return (
    <FormFieldContext.Provider value={{ label, setLabel, isInvalid, setIsInvalid }}>
      <TextField
        ref={ref}
        aria-label={label}
        {...props}
        isInvalid={isInvalid}
        className={(renderProps) =>
          twMerge("flex flex-col gap-0.5", parseReactAriaClassName(renderProps, props.className))
        }
      />
    </FormFieldContext.Provider>
  )
}

const FormFieldRoot = forwardRef(Component)

export default FormFieldRoot
