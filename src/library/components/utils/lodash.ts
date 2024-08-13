export function shallowOmitFalsy<T extends object>(object: T) {
  const obj: Partial<T> = {}
  for (const key in object) {
    if (typeof object[key] === "number") {
      obj[key] = object[key]
      continue
    }
    if (Array.isArray(object[key]) && (object[key] as []).length < 1) continue

    if (object[key]) {
      obj[key] = object[key]
    }
  }
  return obj
}
