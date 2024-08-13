//@tw
const configClass = [
  "cursor-pointer select-none",
  "px-4 py-2",
  "rounded",
  "font-semibold",
  "text-hue-600 dark:text-hue-200",
  "hover:bg-hue-100 hover:dark:bg-hue-700",
  "data-[state=open]:bg-hue-100 data-[state=open]:dark:bg-hue-700",
  "focus-visible-outline",
]
//@tw-end

export default function useNavigationButtonTheme() {
  return configClass
}
