import { twMerge } from "tailwind-merge"
import useThemeColor from "@/theme/loader/skeleton/useThemeColor"

export type Props = {
  width: string
  height: string
  className?: string
}
export default function SkeletonRectangle(props: Props) {
  const themeColor = useThemeColor()
  return (
    <div
      className={twMerge(themeColor, "rounded", props.className)}
      style={{ width: props.width, height: props.height }}
      data-testid={"skeleton-rectangle"}
    />
  )
}
