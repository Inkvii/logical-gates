import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export default function NodeWrapper(props: { selected: boolean; nodeId: string; children: ReactNode }) {
  return (
    <div
      className={twMerge(
        "shadow-md transition-all rounded border border-secondary-400 bg-secondary-400 shadow-secondary-600",
        props.selected && "border-primary-400 bg-primary-400 shadow-primary-600",
        "backdrop-blur"
      )}
    >
      <div
        className={twMerge(
          "p-4 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded border text-white min-w-[200px]"
        )}
      >
        <p className={"text-xs"}>ID: {props.nodeId}</p>
        {props.children}
      </div>
    </div>
  )
}
