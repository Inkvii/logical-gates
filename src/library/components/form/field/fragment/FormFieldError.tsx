"use client"
import { twMerge } from "tailwind-merge"
import { useFormFieldContext } from "@/library/form/field/FormFieldContext"
import { ReactNode, useEffect } from "react"

export type Props = {
  className?: string
  children: ReactNode
}
export default function FormFieldError(props: Props) {
  const { setIsInvalid } = useFormFieldContext()

  useEffect(() => {
    setIsInvalid(!!props.children)
  }, [props.children, setIsInvalid])

  return (
    <div
      className={twMerge("text-sm text-error dark:text-error-dark min-h-5", props.className)}
      data-testid={"error-message"}
    >
      {props.children}
    </div>
  )
}
