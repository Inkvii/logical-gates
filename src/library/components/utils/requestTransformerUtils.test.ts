import { convertToUrlParams } from "@/library/utils/requestTransformerUtils"

describe("convertToUrlParams", () => {
  it("Should convert simple strings", () => {
    const request = {
      first: "firstValue",
      second: "secondValue",
    }
    const expected = "first=firstValue&second=secondValue"

    expect(convertToUrlParams(request).toString()).toEqual(expected)
  })
  it("Should convert simple strings and ignore undefined", () => {
    const request = {
      first: "firstValue",
      second: undefined,
      third: "thirdValue",
    }
    const expected = "first=firstValue&third=thirdValue"

    expect(convertToUrlParams(request).toString()).toEqual(expected)
  })
  it("Should convert fields and null while ignoring undefined", () => {
    const request = {
      first: "firstValue",
      second: undefined,
      third: 3,
      fourth: null,
    }
    const expected = "first=firstValue&third=3&fourth=null"

    expect(convertToUrlParams(request).toString()).toEqual(expected)
  })
  it("Should work with arrays too", () => {
    const request = {
      first: ["first", "second", "third"],
    }
    const expected = "first=first%2Csecond%2Cthird"

    expect(convertToUrlParams(request).toString()).toEqual(expected)
  })
  it("Arrays with undefined are not excluded and behaves as null", () => {
    const request = {
      first: ["first", undefined, "second", null, "third"],
    }
    const expected = "first=first%2C%2Csecond%2C%2Cthird"

    expect(convertToUrlParams(request).toString()).toEqual(expected)
  })
  it("Empty arrays are excluded", () => {
    const request = {
      first: [],
      second: ["1"],
    }
    const expected = "second=1"

    expect(convertToUrlParams(request).toString()).toEqual(expected)
  })
  it("Merging previous params with new ones", () => {
    const request = {
      first: ["1", "2"],
      second: "second",
    }

    const previous = new URLSearchParams({
      second: "pastSecond",
      third: "pastThird",
    })

    const expected = "second=second&third=pastThird&first=1%2C2"
    expect(convertToUrlParams(request, previous).toString()).toEqual(expected)
  })
  it("Merging previous params where value changed to array", () => {
    const request = {
      first: ["1", "2"],
      second: ["3", "4"],
    }

    const previous = new URLSearchParams({
      second: "pastSecond",
      third: "pastThird",
    })

    const expected = "second=3%2C4&third=pastThird&first=1%2C2"
    expect(convertToUrlParams(request, previous).toString()).toEqual(expected)
  })
})
