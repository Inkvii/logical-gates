import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export default function NodeWrapper(props: { selected: boolean; children: ReactNode }) {
  return (
    <div
      className={twMerge(
        "shadow-md transition-all rounded border",
        props.selected
          ? "shadow-primary-300 border-primary-300 bg-primary-300"
          : "shadow-amber-300 border-amber-300 bg-amber-300",
        "backdrop-blur"
      )}
    >
      <div
        className={twMerge(
          "p-4 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded border text-white min-w-[200px]"
        )}
      >
        {props.children}
      </div>
    </div>
  )
}
