import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export type Props = { className?: string; children: ReactNode }
export default function SkeletonRoot(props: Props) {
  return (
    <div className={twMerge("min-w-[100px] w-full", props.className)} data-testid={"skeleton-wrapper"}>
      {props.children}
    </div>
  )
}
