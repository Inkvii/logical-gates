import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { Text } from "react-aria-components"

export type Props = {
  className?: string
  children: ReactNode
}
export default function FormFieldDescription(props: Props) {
  return (
    <Text
      slot={"description"}
      className={twMerge("text-sm typography-caption dark:typography-dark-caption", props.className)}
    >
      {props.children}
    </Text>
  )
}
