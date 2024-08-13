import { useId } from "react"
import { twMerge } from "tailwind-merge"
import useThemeColor from "@/theme/loader/skeleton/useThemeColor"

export type Props = {
  className?: string
  lineCount?: number
}

export default function SkeletonText({ className, lineCount = 4 }: Props) {
  if (lineCount < 0) throw new Error("Line count must be positive number")

  const id = useId()
  const colorTheme = useThemeColor()

  return (
    <div className={"flex flex-col gap-2 p-4 grow"}>
      {[...Array(lineCount)].map((_, i) => {
        return (
          <p
            key={id + i}
            className={twMerge(colorTheme, "h-[1rem] rounded w-full", className)}
            data-testid={"skeleton-text"}
          />
        )
      })}
    </div>
  )
}
