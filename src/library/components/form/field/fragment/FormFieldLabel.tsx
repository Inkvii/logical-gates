"use client"
import { ReactNode, useEffect } from "react"
import { Label } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { useFormFieldContext } from "@/library/form/field/FormFieldContext"

export type Props = {
  className?: string
  isOptional?: boolean
  children: ReactNode
}
export default function FormFieldLabel(props: Props) {
  const { setLabel } = useFormFieldContext()

  useEffect(() => {
    if (typeof props.children === "string") {
      setLabel(props.children)
    }
  }, [props.children, setLabel])

  return (
    <Label className={twMerge("flex gap-4 items-baseline", props.className)}>
      <span className={"font-semibold"}>{props.children}</span>
      {props.isOptional && <span className={"text-sm typography-caption dark:typography-caption"}>(optional)</span>}
    </Label>
  )
}
