import { twMerge } from "tailwind-merge"
import useThemeColor from "@/theme/loader/skeleton/useThemeColor"

export type Props = {
  size: string
  className?: string
}
export default function SkeletonCircle({ size, className }: Props) {
  const colorTheme = useThemeColor()
  return (
    <div
      className={twMerge("rounded-full", colorTheme, className)}
      style={{ width: size, height: size }}
      data-testid={"skeleton-circle"}
    />
  )
}
