import { createContext, useContext } from "react"

type Context = {
  label: string | undefined
  setLabel: (value: string) => void

  isInvalid: boolean
  setIsInvalid: (value: boolean) => void
}

export const FormFieldContext = createContext<Context>({
  label: undefined,
  setLabel: () => {},
  isInvalid: false,
  setIsInvalid: () => {},
})
export const useFormFieldContext = () => useContext(FormFieldContext)
