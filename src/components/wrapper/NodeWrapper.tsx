import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export default function NodeWrapper(props: { selected: boolean; children: ReactNode }) {
  return (
    <div className={twMerge("p-4 bg-white rounded border", props.selected && "border-primary-600")}>
      {props.children}
    </div>
  )
}
