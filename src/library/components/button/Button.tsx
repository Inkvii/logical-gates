"use client"

import { forwardRef, ReactNode, Ref } from "react"

import { Button as ReactAriaButton, ButtonProps } from "react-aria-components"
import { ButtonVariant } from "@/theme/button/type/ButtonVariant"
import { ButtonSize } from "@/theme/button/type/ButtonSize"
import { ButtonSideIcons } from "@/library/button/types/ButtonSideIcons"
import { CircleNotch } from "@phosphor-icons/react/dist/ssr"
import useButtonSize from "@/theme/button/useButtonSize"
import useButtonSideIcons from "@/library/button/hooks/useButtonSideIcons"
import { twMerge } from "tailwind-merge"
import parseReactAriaClassName from "@/library/utils/parseReactAriaClassName"
import useTheme from "@/theme/button/useTheme"
import { HueVariable } from "@/theme/css/HueVariable"

export type Props = {
  hue?: HueVariable
  variant: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  "data-testid"?: string
  children: ReactNode
} & ButtonSideIcons &
  ButtonProps

function Component(
  {
    variant,
    hue = "primary",
    size,
    subdominantIcon,
    dominantIcon,
    dominantIconSide = "left",
    isLoading,
    loadingIcon = <CircleNotch className={"animate-spin"} />,
    ...props
  }: Props,
  ref: Ref<HTMLButtonElement>
) {
  const themeVariant = useTheme(variant, hue)
  const sizeClassName = useButtonSize(size)

  const icons: [ReactNode, ReactNode] = useButtonSideIcons({
    dominantIconSide,
    dominantIcon,
    subdominantIcon,
    loadingIcon,
    isLoading,
  })

  return (
    <ReactAriaButton
      {...props}
      ref={ref}
      className={(renderProps) =>
        twMerge(
          "focusable",
          themeVariant,
          sizeClassName,
          isLoading && "animate-pulse",
          parseReactAriaClassName(renderProps, props.className)
        )
      }
      onPress={(e) => {
        if (isLoading) {
          return
        }
        props.onPress?.(e)
      }}
      data-loading={isLoading ? isLoading : undefined}
      data-testid={props["data-testid"] ?? "button"}
    >
      {icons[0]}
      {props.children}
      {icons[1]}
    </ReactAriaButton>
  )
}

export const Button = forwardRef(Component)
