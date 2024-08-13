export function validateHexadecimalValue(context: string | undefined) {
  const regex = /^[a-fA-F0-9\-\\%]+$/
  if (regex.test(context ?? "")) return true
  return "Allowed characters are a-f, A-F, 0-9 or '-', '%' "
}
