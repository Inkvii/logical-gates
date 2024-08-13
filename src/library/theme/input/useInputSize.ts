import { InputSize } from "@/theme/input/InputSize"

//@tw
const configClass = {
  normal: ["px-2 py-2 text-base"],
  small: ["px-2 py-1 text-sm leading-none"],
} satisfies Record<InputSize, string[]>
//@tw-end

export default function useInputSize(size: InputSize | undefined) {
  return !size ? configClass.normal : configClass[size]
}
