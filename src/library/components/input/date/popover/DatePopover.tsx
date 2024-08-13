import { Calendar as ReactAriaCalendar, Dialog, Popover } from "react-aria-components"
import Header from "@/library/input/date/popover/Header"
import CalendarMonthGrid from "@/library/input/date/popover/CalendarMonthGrid"

export default function DatePopover() {
  return (
    <Popover
      data-testid={"input-date-field-popover"}
      ref={(ref) => ref?.addEventListener("touchend", (e) => e.preventDefault())}
    >
      <Dialog>
        <ReactAriaCalendar
          className={
            "select-none w-fit ml-auto bg-neutral-100 dark:bg-neutral-800 rounded border dark:border-neutral-700 shadow p-4"
          }
          data-testid={"popover-calendar"}
        >
          <Header />
          <CalendarMonthGrid />
        </ReactAriaCalendar>
      </Dialog>
    </Popover>
  )
}
