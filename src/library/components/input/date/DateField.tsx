"use client"
import type { DatePickerProps, DateValue } from "react-aria-components"
import {
  Button as ReactAriaButton,
  DateInput,
  DatePicker as ReactAriaDatePicker,
  DateSegment,
  Group,
} from "react-aria-components"
import { forwardRef, Ref, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Calendar } from "@phosphor-icons/react/dist/ssr"
import { ZonedDateTime } from "@internationalized/date"
import parseReactAriaClassName from "@/library/utils/parseReactAriaClassName"
import DatePopover from "@/library/input/date/popover/DatePopover"
import IconConstants from "@/library/utils/IconConstants"
import { useFormFieldContext } from "@/library/form/field/FormFieldContext"
import { parseDateFieldValue } from "@/library/utils/dateUtils"

export type Props<T extends DateValue> = Omit<DatePickerProps<T>, "value"> & { value?: string | undefined }

function Component(props: Props<ZonedDateTime>, ref: Ref<HTMLDivElement>) {
  const { label } = useFormFieldContext()

  const [value, setValue] = useState<ZonedDateTime | null | undefined>(null)

  useEffect(() => {
    setValue(parseDateFieldValue(props.value))
  }, [props.value])

  return (
    <ReactAriaDatePicker
      {...props}
      value={value}
      aria-label={props["aria-label"] ?? label}
      ref={ref}
      className={(renderProps) =>
        twMerge("flex flex-col", "w-fit min-w-[12rem]", parseReactAriaClassName(renderProps, props.className))
      }
      data-testid={"input-date-field"}
    >
      <Group
        className={(renderProps) =>
          twMerge(
            "input",
            "px-4 py-2 mb-1",
            "flex justify-between gap-4",
            "read-only:cursor-text",
            "focus-outline",
            renderProps.isFocusWithin && [
              "outline-primary-600 dark:outline-primary-400",
              "aria-[invalid=true]:outline-error dark:aria-[invalid=true]:outline-error-dark",
            ]
          )
        }
        isInvalid={props.isInvalid}
        aria-invalid={props.isInvalid}
        data-testid={"input-group"}
      >
        <DateInput className={"flex gap-0.5"}>
          {(segment) => {
            return <DateSegment segment={segment} className={"rounded focus-visible-outline"} />
          }}
        </DateInput>
        <ReactAriaButton className={"focus-visible-outline rounded"} data-testid={"calendar-button"}>
          <Calendar size={IconConstants.md} />
        </ReactAriaButton>
      </Group>
      <DatePopover />
    </ReactAriaDatePicker>
  )
}

export const DateField = forwardRef(Component)
