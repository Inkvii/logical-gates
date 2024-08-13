import { Dispatch, forwardRef, ReactNode, Ref, SetStateAction, useCallback } from "react"
import { twMerge } from "tailwind-merge"
import { Check } from "@phosphor-icons/react/dist/ssr"
import IconConstants from "@/library/utils/IconConstants"
import { CommandItem } from "@/library/ui/command"

export type Props<T extends object> = {
  item: T
  propertyOfValue: keyof T
  propertyOfKey: keyof T
  disabledValues?: string[]
  selectedValue: string
  setSelectedValue: Dispatch<SetStateAction<string>>
  onChange: (selected: T, setInternalValue: (value: string) => void) => void
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children?: (item: T) => ReactNode
}

function Component<T extends object>(props: Props<T>, ref: Ref<HTMLDivElement>) {
  const isSelected = useCallback(
    (item: T) => {
      return props.selectedValue === item[props.propertyOfValue]?.toString()
    },
    [props.propertyOfValue, props.selectedValue]
  )
  const keywords = props.item[props.propertyOfKey]?.toString()
    ? [props.item[props.propertyOfKey]!.toString()]
    : undefined

  return (
    <CommandItem
      ref={ref}
      keywords={keywords}
      disabled={props.disabledValues?.includes(props.item[props.propertyOfValue] as string)}
      onSelect={() => {
        props.setSelectedValue(props.item[props.propertyOfValue]?.toString() ?? "")
        props.onChange(props.item, props.setSelectedValue)
        props.setOpen(false)
      }}
      value={props.item[props.propertyOfValue] as string}
      className={twMerge(isSelected(props.item) && "text-primary-600 dark:text-primary-400 font-semibold")}
    >
      <Check
        size={IconConstants.sm}
        className={twMerge(
          "fill-primary-600 dark:fill-primary-400",
          isSelected(props.item) ? "opacity-100" : "opacity-0"
        )}
      />
      {props.children ? props.children(props.item) : (props.item[props.propertyOfKey] as string)}
    </CommandItem>
  )
}

export const ComboBoxItem = forwardRef(Component)
