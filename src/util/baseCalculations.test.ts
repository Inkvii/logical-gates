import { convertDecimalToBase } from "util/baseCalculations"

describe("convertDecimalToBase", () => {
  it.each`
    index                            | result
    ${0}                             | ${"a"}
    ${1}                             | ${"b"}
    ${25}                            | ${"z"}
    ${26}                            | ${"aa"}
    ${27}                            | ${"ab"}
    ${1 * 26 ** 2 + 3 * 26 ** 1 + 2} | ${"acc"}
  `("should convert $index to $result ", ({ index, result }) => {
    expect(convertDecimalToBase(index, "abcdefghijklmnopqrstuvwxyz".split(""))).toBe(result)
  })
})
