"use client"
import { signIn } from "next-auth/react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { urlTo } from "@/library/router/urlTo"
import { Button } from "@/library/button/Button"
import { twMerge } from "tailwind-merge"
import { useEffect } from "react"
import { createValueIsRequiredRule } from "@/library/validation/rules"
import { SignIn } from "@phosphor-icons/react/dist/ssr"
import { FormField } from "@/library/form/field"
import { Routes } from "router/routes"

type FormContext = {
  email: string
  password: string
}

export type Props = {
  callbackUrl: string | undefined
  error: string | undefined
}

export default function LoginForm(props: Props) {
  const methods = useForm<FormContext>({
    mode: "onSubmit",
    defaultValues: { email: "", password: "" },
  })

  useEffect(() => {
    if (props.error) {
      methods.setError("password", { message: "Username or password are invalid, or username is not active yet." })
    } else {
      methods.clearErrors()
    }
  }, [props.error, methods])

  const onSubmit: SubmitHandler<FormContext> = async (data) => {
    await signIn("credentials", {
      email: data.email.toLowerCase(),
      password: data.password,
      redirect: true,
      callbackUrl: props.callbackUrl ?? urlTo({ route: Routes.public.home }).path,
    })
  }

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className={twMerge(
        "flex flex-col justify-between p-8 border rounded mt-8 mx-auto max-w-2xl",
        "min-h-[20rem]",
        "bg-neutral-50 dark:bg-neutral-800",
        "dark:border-neutral-600"
      )}
    >
      <div className={"flex flex-col"}>
        <Controller
          control={methods.control}
          name={"email"}
          rules={{
            required: createValueIsRequiredRule(),
          }}
          render={({ field, fieldState }) => (
            <FormField.Root>
              <FormField.Label>Email</FormField.Label>
              <FormField.Controller.Input {...field} autoComplete={"email"} autoFocus={true} />
              <FormField.ErrorMessage>{fieldState.error?.message}</FormField.ErrorMessage>
            </FormField.Root>
          )}
        />
        <Controller
          control={methods.control}
          name={"password"}
          rules={{
            required: createValueIsRequiredRule(),
          }}
          render={({ field, fieldState }) => (
            <FormField.Root>
              <FormField.Label>Password</FormField.Label>
              <FormField.Controller.Input {...field} type={"password"} autoComplete={"current-password"} />
              <FormField.ErrorMessage>{fieldState.error?.message}</FormField.ErrorMessage>
            </FormField.Root>
          )}
        />
      </div>
      <hr className={"my-8 dark:border-neutral-600"} />
      <div className={"flex flex-col gap-4"}>
        <Button
          hue={"primary"}
          variant={"solid"}
          isLoading={methods.formState.isSubmitting}
          className={"max-w-full w-full"}
          type="submit"
          dominantIconSide={"right"}
          dominantIcon={<SignIn />}
        >
          Log in
        </Button>
      </div>
    </form>
  )
}
