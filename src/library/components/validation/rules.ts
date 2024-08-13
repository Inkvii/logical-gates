export function createMaxLengthRule(length = 255, message = "Value is too long") {
  return { value: length, message }
}

export function createMinValueRule(min = 0, message = "Value is too small") {
  return { value: min, message }
}

// eslint-disable-next-line  @typescript-eslint/no-loss-of-precision
export function createMaxValueRule(max = 99999999999999999.99, message = "Value is above maximum number") {
  return { value: max, message }
}

export function createValueIsRequiredRule(value = true, message = "Cannot be empty") {
  return { value: value, message }
}
