import { CalendarCell, CalendarGrid } from "react-aria-components"
import { getLocalTimeZone, today } from "@internationalized/date"
import { twMerge } from "tailwind-merge"

export default function CalendarMonthGrid() {
  const todayDate = today(getLocalTimeZone())

  const selectedClassName = [
    "text-primary-50 dark:text-primary-900",
    "bg-primary-600 dark:bg-primary-400",
    "data-[hovered=true]:bg-primary-600 dark:data-[hovered=true]:bg-primary-400",
  ]

  return (
    <CalendarGrid className={"mx-auto"} data-testid={"popover-calendar-grid"}>
      {(date) => (
        <CalendarCell
          className={({ isSelected, isDisabled }) =>
            twMerge(
              "w-9 h-9 sm:w-10 sm:h-10",
              "bg-neutral-300/60 dark:bg-neutral-600",
              "flex justify-center items-center",
              "rounded",
              "data-[hovered=true]:bg-primary-300/80 dark:data-[hovered=true]:bg-primary-700",

              isDisabled && [
                "bg-transparent dark:aria-disabled:bg-neutral-800",
                "text-neutral-300 dark:text-neutral-600",
              ],
              isSelected && selectedClassName,
              date.compare(todayDate) === 0 && [
                "bg-primary-300 dark:bg-primary-700",
                "data-[hovered=true]:text-primary-50 dark:data-[hovered=true]:text-primary-900",
                "font-semibold",
              ],
              date.compare(todayDate) === 0 && isSelected && selectedClassName
            )
          }
          date={date}
        />
      )}
    </CalendarGrid>
  )
}
