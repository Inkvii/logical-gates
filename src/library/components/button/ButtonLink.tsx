"use client"

import { forwardRef, ReactElement, ReactNode, Ref, useMemo, useTransition } from "react"
import { twMerge } from "tailwind-merge"
import Link from "next/link"
import { mergeProps, useFocusRing, useHover, usePress } from "react-aria"
import { useObjectRef } from "@react-aria/utils"
import { useRouter } from "next/navigation"
import { ButtonVariant } from "@/theme/button/type/ButtonVariant"
import { ButtonSize } from "@/theme/button/type/ButtonSize"
import { PressEvent } from "@react-types/shared/src/events"
import { CircleNotch } from "@phosphor-icons/react/dist/ssr"
import useButtonSize from "@/theme/button/useButtonSize"
import useButtonSideIcons from "@/library/button/hooks/useButtonSideIcons"
import { UrlObjectWithPath } from "@/library/router/types/UrlObjectWithPath"
import { ButtonRenderProps } from "react-aria-components"
import parseReactAriaClassName from "@/library/utils/parseReactAriaClassName"
import { HueVariable } from "@/theme/css/HueVariable"
import useTheme from "@/theme/button/useTheme"

export type Props = {
  url: UrlObjectWithPath
  hue?: HueVariable
  variant: ButtonVariant
  size?: ButtonSize
  subdominantIcon?: ReactElement
  dominantIcon?: ReactElement
  dominantIconSide?: "left" | "right"
  loadingIcon?: ReactElement
  disabled?: boolean
  className?: string | ((renderProps: ButtonRenderProps) => string)
  "data-testid"?: string
  onClick?: (e: PressEvent) => void
  children: ReactNode
  shouldGrayscaleOnDisable?: boolean
}

function Component(
  {
    variant,
    hue = "primary",
    size,
    subdominantIcon,
    dominantIcon,
    dominantIconSide = "left",
    loadingIcon = <CircleNotch className={"animate-spin"} />,
    ...props
  }: Props,
  ref: Ref<HTMLAnchorElement>
) {
  const mergedRef = useObjectRef(ref)
  const sizeClassName = useButtonSize(size)

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const { hoverProps, isHovered } = useHover({ isDisabled: props.disabled })
  const { isFocusVisible, focusProps, isFocused } = useFocusRing()
  const { pressProps, isPressed } = usePress({
    isDisabled: props.disabled,
    ref: mergedRef,
  })
  const theme = useTheme(variant, hue)
  const ariaProps = mergeProps(hoverProps, pressProps, focusProps)

  const icons: [ReactNode, ReactNode] = useButtonSideIcons({
    dominantIconSide,
    dominantIcon,
    loadingIcon,
    subdominantIcon,
    isLoading: isPending,
  })

  const href = useMemo(() => {
    return props.disabled ? "#" : props.url.path
  }, [props.disabled, props.url])

  return (
    <Link
      {...ariaProps}
      data-hovered={isHovered || undefined}
      data-pressed={isPressed || undefined}
      data-focus-visible={isFocusVisible || undefined}
      data-focused={isFocused || undefined}
      data-disabled={(props.shouldGrayscaleOnDisable && props.disabled) || undefined}
      onClick={() => startTransition(() => router.push(href))}
      href={href}
      data-testid={props["data-testid"] ?? "button-link"}
      ref={ref}
      className={twMerge(
        theme,
        "focusable",
        sizeClassName,
        props.disabled && ["cursor-not-allowed"],
        isPending && "animate-pulse",
        parseReactAriaClassName(
          {
            isHovered,
            isDisabled: !!props.disabled,
            isPressed,
            isFocusVisible,
            isFocused,
          },
          props.className
        )
      )}
      data-loading={isPending ? isPending : undefined}
    >
      {icons[0]}
      {props.children}
      {icons[1]}
    </Link>
  )
}

export const ButtonLink = forwardRef(Component)
