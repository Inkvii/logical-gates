"use client"

import { Button } from "@/library/button/Button"
import { useReactFlow } from "reactflow"
import FormDialog from "@/library/dialog/FormDialog"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { FormField } from "@/library/form/field"
import { createValueIsRequiredRule } from "@/library/validation/rules"
import { saveLogicSchema } from "app/u/[schema]/action"

type FormContext = {
  name: string
}

export type Props = {}
export default function ActionButtons(props: Props) {
  const flow = useReactFlow()
  const form = useForm<FormContext>({
    defaultValues: {
      name: "",
    },
    mode: "onBlur",
  })
  return (
    <div className={"px-4 py-2"}>
      <FormProvider {...form}>
        <FormDialog
          title={"Save schema as"}
          description={"Saving schema with existing name will overwrite it."}
          trigger={
            <Button variant={"solid"} className={"min-w-full"}>
              Save logic schema
            </Button>
          }
          onSubmit={async (data: FormContext) => {
            await saveLogicSchema(data.name, JSON.stringify(flow.getNodes()))
          }}
        >
          <Controller
            control={form.control}
            name={"name"}
            rules={{
              required: createValueIsRequiredRule(),
            }}
            render={({ field, fieldState }) => (
              <FormField.Root>
                <FormField.Label>Schema name</FormField.Label>
                <FormField.Controller.Input {...field} />
                <FormField.ErrorMessage>{fieldState.error?.message}</FormField.ErrorMessage>
              </FormField.Root>
            )}
          />
        </FormDialog>
      </FormProvider>
    </div>
  )
}
