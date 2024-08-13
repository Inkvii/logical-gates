import { parseAbsoluteToLocal } from "@internationalized/date"
import { serverLocale, serverTimeZone } from "@/library/locale/locale"

export function formatDatetime(date: string | number | Date | null | undefined): string {
  if (date === undefined || date === null) return ""

  const parsedDate = typeof date === "string" ? new Date(Date.parse(date)) : new Date(date)

  return new Intl.DateTimeFormat(serverLocale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: serverTimeZone,
  }).format(parsedDate)
}

export function formatStringTimestamp(timestamp: string | number | undefined) {
  // TODO LVE: VI-175 remove this thing
  if (typeof timestamp === "string") return formatDatetime(parseInt(timestamp))
  if (typeof timestamp === "number") return formatDatetime(timestamp)

  return timestamp
}

export function parseDatetime(date: string): Date {
  return new Date(Date.parse(date))
}

export function parseDateFieldValue(value: string | undefined) {
  if (value === undefined || value === "") return parseAbsoluteToLocal(new Date().toISOString())

  try {
    return parseAbsoluteToLocal(new Date(parseInt(value)).toISOString())
  } catch (err) {
    return parseAbsoluteToLocal(new Date().toISOString())
  }
}
