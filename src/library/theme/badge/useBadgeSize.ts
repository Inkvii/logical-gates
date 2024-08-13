import { BadgeSize } from "@/theme/badge/BadgeSize"

//@tw
const configClass = {
  none: [""],
  normal: ["px-4 py-1", "font-medium"],
  small: ["px-2 py-0.5", "text-sm font-semibold"],
} satisfies Record<BadgeSize, string[]>
//@tw-end

export default function useBadgeSize(size: BadgeSize): string[] {
  return configClass[size]
}
