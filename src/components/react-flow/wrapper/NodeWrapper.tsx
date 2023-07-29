import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export default function NodeWrapper(props: {
  name: string
  selected: boolean
  enabled: boolean
  nodeId: string
  children: ReactNode
}) {
  return (
    <div
      className={twMerge(
        props.enabled
          ? "border-green-600 bg-green-600 shadow-green-600"
          : "border-secondary-400 bg-secondary-400 shadow-secondary-600",
        "shadow-md transition-all rounded border ",
        props.selected && "border-primary-400 bg-primary-400 shadow-primary-600",
        "backdrop-blur"
      )}
    >
      <div className={twMerge("bg-gradient-to-br from-neutral-900 to-neutral-800 rounded text-white w-[200px]")}>
        <div
          className={
            "flex justify-between gap-4 items-center px-2 py-1 bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-t"
          }
        >
          <p className={"text-xs"}>ID: {props.nodeId}</p>
          <p className={"text-xs font-semibold"}>{props.name}</p>
        </div>
        <div className={"px-4 pb-4 pt-2"}>{props.children}</div>
      </div>
    </div>
  )
}
