import { shallowOmitFalsy } from "@/library/utils/lodash"

describe("shallowOmitFalsy", () => {
  it("works as expected", () => {
    const request = {
      emptyArray: [],
      second: ["1"],
      valueIsNull: null,
      undefinedValue: undefined,
      zeroValue: 0,
      emptyString: "",
      emptyStringArray: [""],
      deepObject: {
        zeroValue: 0,
        emptyString: "",
        filledValue: "Hello there",
      },
    }
    expect(shallowOmitFalsy(request)).toEqual({
      second: ["1"],
      zeroValue: 0,
      emptyStringArray: [""],
      deepObject: {
        zeroValue: 0,
        emptyString: "",
        filledValue: "Hello there",
      },
    })
  })
})
