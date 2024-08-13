"use client"

import FormFieldRoot from "@/library/form/field/fragment/FormFieldRoot"
import FormFieldLabel from "@/library/form/field/fragment/FormFieldLabel"
import FormFieldError from "@/library/form/field/fragment/FormFieldError"
import FormFieldDescription from "@/library/form/field/fragment/FormFieldDescription"

import { Input } from "@/library/input/Input"
import { AffixInput } from "@/library/input/affix/AffixInput"
import { ComboBox } from "@/library/ui/combobox/ComboBox"
import { DateField } from "@/library/input/date/DateField"

export const FormField = {
  Root: FormFieldRoot,
  Label: FormFieldLabel,
  ErrorMessage: FormFieldError,
  Description: FormFieldDescription,
  Controller: {
    Input: Input,
    AffixInput: AffixInput,
    ComboBox: ComboBox,
    DateField: DateField,
  },
}
