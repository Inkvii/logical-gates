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
        props.enabled ? "success" : "danger",
        "border-hue-400 dark:border-hue-600",
        "transition-all rounded border-2 ",
        props.selected && "outline-offset-2 outline-2 outline-primary-500",
        "overflow-hidden"
      )}
    >
      <div
        className={twMerge(
          "bg-gradient-to-br w-[200px]",
          "from-neutral-50 dark:from-neutral-900",
          "to-neutral-100 dark:to-neutral-800",
          "dark:text-white"
        )}
      >
        <div
          className={twMerge(
            "flex justify-between gap-4 items-center px-2 py-1",
            "bg-gradient-to-b",
            "from-neutral-50 dark:from-neutral-900",
            "to-neutral-100 dark:to-neutral-800"
          )}
        >
          <p className={"text-xs"}>ID: {props.nodeId}</p>
          <p className={"text-xs font-semibold"}>{props.name}</p>
        </div>
        <div className={"px-4 pb-4 pt-2"}>{props.children}</div>
      </div>
    </div>
  )
}
