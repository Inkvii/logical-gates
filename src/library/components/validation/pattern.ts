export const DECIMAL_NUMBER_PATTERN = /^-?([0-9]{0,17}|[0-9]{0,17}\.[0-9]{0,2})$/
export const POSITIVE_DECIMAL_NUMBER_PATTERN = /^([0-9]{0,17}|[0-9]{0,17}\.[0-9]{0,2})$/
/**
 * Matches either empty string or integer starting from 1
 */
export const POSITIVE_INTEGER = /(^$)|(^[1-9][0-9]{0,16}$)/

export function createPositiveIntegerPattern() {
  return { value: POSITIVE_INTEGER, message: "Field accepts only positive integer numbers" }
}

export function createEmailPattern() {
  return {
    value: /^.+@.+\..+$/,
    message: "Insert valid email",
  }
}
