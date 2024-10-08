"use client"

import { Button } from "@/library/button/Button"
import { useReactFlow } from "reactflow"
import FormDialog from "@/library/dialog/FormDialog"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { FormField } from "@/library/form/field"
import { createValueIsRequiredRule } from "@/library/validation/rules"
import { saveLogicSchema } from "app/u/[schema]/action"
import { useToast } from "@/library/ui/use-toast"
import { Routes } from "router/routes"
import { useParams } from "next/navigation"
import { ExtractRouteParamsOnly } from "@/library/router/types/ExtractRouteParams"

type FormContext = {
  name: string
}

const restrictedSchemaNames = ["new"]

export default function ActionButtons() {
  const params = useParams<ExtractRouteParamsOnly<typeof Routes.private.userSchema>>()
  const schema = decodeURIComponent(params.schema)

  const flow = useReactFlow()
  const { toast } = useToast()
  const form = useForm<FormContext>({
    defaultValues: {
      name: restrictedSchemaNames.includes(schema) ? "" : schema,
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
            try {
              const payload = {
                nodes: flow.getNodes(),
                edges: flow.getEdges(),
              }

              await saveLogicSchema(data.name, payload)
              toast({ hue: "primary", title: "Schema saved", description: `Schema ${data.name} successfully saved` })
            } catch (error) {
              toast({
                hue: "danger",
                title: "Error while saving",
                description: `Schema ${data.name} could not be saved. Reason: ${error}`,
              })
            }
          }}
        >
          <Controller
            control={form.control}
            name={"name"}
            rules={{
              required: createValueIsRequiredRule(),
              validate: (value) => {
                if (restrictedSchemaNames.includes(value.toLowerCase())) {
                  return "This is registered word. Please use different one"
                }
              },
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
