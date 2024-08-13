"use client"
import { twMerge } from "tailwind-merge"

export type Props = {
  isFetching?: boolean
  className?: string
}
export default function IndeterminateProgressBar(props: Props) {
  return (
    <div
      className={twMerge(
        "relative overflow-hidden h-1 transition-colors duration-300",
        props.isFetching && ["bg-primary-200"]
      )}
      data-testid={"progress-bar-wrapper"}
    >
      <div
        className={twMerge(
          "h-1 w-full absolute",
          props.isFetching && ["bg-primary-400 animate-rolling"],
          props.className
        )}
        data-testid={"progress-bar"}
      ></div>
    </div>
  )
}
