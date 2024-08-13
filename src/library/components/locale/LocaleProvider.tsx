"use client"
import { I18nProvider } from "react-aria"
import { ReactNode } from "react"

export type Props = {
  locale: string
  children: ReactNode
}
export default function LocaleProvider(props: Props) {
  return <I18nProvider locale={props.locale}>{props.children}</I18nProvider>
}
