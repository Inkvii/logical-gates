export function formatMoney(
  amount: number | string | null | undefined,
  currency: string | undefined | null,
  shouldReturnZero: boolean = true,
  locale?: string
): string {
  if (!amount && !shouldReturnZero) return ""

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency ?? undefined,
    currencyDisplay: "narrowSymbol",
  })
  return formatter.format(Number(amount ?? 0))
}

export function getCurrencySymbol(currency: string | undefined | null, locale?: string) {
  return (0)
    .toLocaleString(locale, {
      style: "currency",
      currency: currency ?? undefined,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, "")
    .trim()
}

export function convertEnumToHumanReadableFormat(status: string | null | undefined) {
  if (!status) return ""

  if (status.length < 2) {
    return status
  }

  const transformed = status.toLowerCase().replaceAll("_", " ")
  const firstChar = transformed.substring(0, 1).toUpperCase()

  return firstChar.toUpperCase() + transformed.substring(1)
}

export function formatBooleanValue(value: boolean | undefined | null): string | null {
  if (value === undefined || value === null) return null
  return value ? "Yes" : "No"
}

export function formatToBoolean(value: "Y" | "N" | string | null | undefined) {
  return value === "Y"
}
