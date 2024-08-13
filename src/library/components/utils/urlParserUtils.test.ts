import { parseQueryStringNumber } from "@/library/utils/urlParserUtils"

describe("parseQueryStringNumber", () => {
  it.each<{
    value: string | string[] | undefined | number | null
    expected: number | undefined
  }>([
    { value: "1", expected: 1 },
    { value: ["2"], expected: 2 },
    { value: ["1", "2"], expected: 1 },
    { value: undefined, expected: undefined },
    { value: null, expected: undefined },
    { value: 0, expected: 0 },
    { value: "0", expected: 0 },
    { value: "05", expected: 5 },
    { value: "asd", expected: undefined },
  ])("should parse", (obj) => {
    expect(parseQueryStringNumber(obj.value)).toEqual(obj.expected)
  })
})
