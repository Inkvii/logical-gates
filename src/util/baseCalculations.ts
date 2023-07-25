export function logBase(n: number, base: number) {
  return Math.log(n) / Math.log(base)
}

export function calculateMaximumBaseExponent(n: number, base: number) {
  return Math.floor(logBase(n + 1, base + 1))
}

export function convertDecimalToBase(index: number, base: string[]) {
  const maximumBaseExponent = calculateMaximumBaseExponent(index, base.length)

  let remaining = index
  let result = ""

  for (let i = maximumBaseExponent; i >= 0; i--) {
    const exponent = base.length ** i
    const integerAfterDivision = (remaining / exponent) >> 0
    // normalising since array starts from 0 and would create problems on last bit
    const normalisedInteger = remaining >= exponent && i > 0 ? integerAfterDivision - 1 : integerAfterDivision
    remaining %= exponent
    result += base[normalisedInteger]
  }

  return result
}
