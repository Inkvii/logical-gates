"use client"

import { forwardRef, ReactNode, Ref, useEffect, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/library/ui/popover"
import { useFormFieldContext } from "@/library/form/field/FormFieldContext"
import { ComboBoxTrigger } from "@/library/ui/combobox/ComboBoxTrigger"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList, CommandSeparator } from "@/library/ui/command"
import { ComboBoxItem } from "@/library/ui/combobox/ComboBoxItem"

export type Props<T extends object> = {
  items: T[]
  propertyOfValue: keyof T
  propertyOfKey: keyof T
  disabledValues?: string[]
  "aria-label"?: string
  isDisabled?: boolean
  placeholder?: string
  isInvalid?: boolean
  value?: string
  onChange: (selected: T, setInternalValue: (value: string) => void) => void
  onBlur?: () => void
  className?: string
  children?: (item: T) => ReactNode
  emptyFilterResult?: ReactNode
  /** If set to true, popover will not swap position to cross axis when there is not enough space */
  avoidCollisions?: boolean
  trigger?: ReactNode
  popoverContentWidth?: string
  filter?: (value: string, search: string, keywords?: string[]) => number
}

function Component<T extends object>(
  { placeholder = "Select item...", emptyFilterResult = "No results", ...props }: Props<T>,
  ref: Ref<HTMLButtonElement>
) {
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>(props.value ?? "")
  const { label, isInvalid: isInvalidByContext } = useFormFieldContext()

  useEffect(() => {
    setSelectedValue(props.value ?? "")
  }, [props.value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild={true}>
        {props.trigger ? (
          props.trigger
        ) : (
          <ComboBoxTrigger
            ref={ref}
            open={open}
            onBlur={props.onBlur}
            aria-label={props["aria-label"] ?? label}
            isInvalid={props.isInvalid ?? isInvalidByContext}
            isDisabled={props.isDisabled}
            onPress={() => {
              setOpen((prev) => !prev)
            }}
            className={props.className}
          >
            {selectedValue
              ? (props.items.find((item) => item[props.propertyOfValue]?.toString() === selectedValue)?.[
                  props.propertyOfKey
                ] as string)
              : placeholder}
          </ComboBoxTrigger>
        )}
      </PopoverTrigger>
      <PopoverContent
        style={{ width: props.popoverContentWidth ?? "var(--radix-popper-anchor-width)" }}
        avoidCollisions={props.avoidCollisions}
      >
        <Command filter={props.filter}>
          <CommandInput placeholder={"Filter"} />
          <CommandSeparator />
          <CommandList>
            <CommandEmpty>{emptyFilterResult}</CommandEmpty>
            <CommandGroup>
              {props.items.map((item) => (
                <ComboBoxItem
                  key={item[props.propertyOfKey] as string}
                  item={item}
                  setOpen={setOpen}
                  open={open}
                  onChange={props.onChange}
                  setSelectedValue={setSelectedValue}
                  selectedValue={selectedValue}
                  disabledValues={props.disabledValues}
                  propertyOfValue={props.propertyOfValue}
                  propertyOfKey={props.propertyOfKey}
                >
                  {props.children}
                </ComboBoxItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export const ComboBox = forwardRef(Component)
