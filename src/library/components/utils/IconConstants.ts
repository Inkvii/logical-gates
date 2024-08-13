const ONE_REM = 16

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"

const IconConstants: Record<Size, string> = {
  xs: `${0.75 * ONE_REM}`,
  sm: `${ONE_REM}`,
  md: `${1.25 * ONE_REM}`,
  lg: `${1.5 * ONE_REM}`,
  xl: `${2 * ONE_REM}`,
  xxl: `${2.5 * ONE_REM}`,
  xxxl: `${3 * ONE_REM}`,
} as const

export default IconConstants
