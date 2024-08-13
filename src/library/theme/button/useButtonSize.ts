import { ButtonSize } from "@/theme/button/type/ButtonSize"

const configClass = {
  normal: ["px-4 py-1.5"],
  small: ["px-2 py-1.5"],
  none: [""],
} satisfies Record<ButtonSize, string[]>

export default function useButtonSize(size: ButtonSize | undefined) {
  return !size ? configClass.normal : configClass[size]
}
