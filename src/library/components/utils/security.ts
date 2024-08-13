export async function hashPassword(password: string, salt: string) {
  const crypted = await crypto.subtle.digest("SHA-256", Buffer.from(salt + password))
  return Buffer.from(crypted).toString("hex")
}

export function generateString(length: number) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}
