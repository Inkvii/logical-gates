import { twMerge } from "tailwind-merge"
import { CircleNotch } from "@phosphor-icons/react/dist/ssr"
import { SpinnerSize } from "@/theme/loader/spinner/type/SpinnerSize"
import { useMemo } from "react"

export type Props = {
  size: SpinnerSize
  className?: string
}
export default function Spinner({ size = "normal", className }: Props) {
  const loaderSize = useMemo(() => {
    switch (size) {
      case "small":
        return "size-[4vh]"
      case "large":
        return "size-[8vh]"
      case "normal":
      default:
        return "size-[6vh]"
    }
  }, [size])

  return (
    <div className={"w-full flex justify-center items-center animate-pulse"} data-testid={"loader"}>
      <CircleNotch
        className={twMerge("aspect-square animate-spin fill-primary-300 dark:fill-primary-600", loaderSize, className)}
      />
    </div>
  )
}
