import { SpinnerSize } from "@/theme/loader/spinner/type/SpinnerSize"

const sizeClass = {
  small: ["size-[4vh]"],
  normal: ["size-[6vh]"],
  large: ["size-[8vh]"],
} satisfies Record<SpinnerSize, string[]>

export default function useTheme(size: SpinnerSize): string[] {
  return sizeClass[size]
}
