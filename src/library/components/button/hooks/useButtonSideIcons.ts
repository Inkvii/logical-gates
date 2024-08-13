import { ReactNode, useMemo } from "react"
import { triggerExhaustiveSwitch } from "@/library/utils/exhaustiveSwitch"
import { ButtonSideIcons } from "@/library/button/types/ButtonSideIcons"

export type Props = ButtonSideIcons &
  Required<Pick<ButtonSideIcons, "dominantIconSide">> & {
    isLoading?: boolean
  }

export default function useButtonSideIcons(props: Props, componentName: string = "Button"): [ReactNode, ReactNode] {
  return useMemo(() => {
    const validatedDominantIcon = props.isLoading && props.dominantIcon ? props.loadingIcon : props.dominantIcon
    const validatedSubdominantIcon =
      props.isLoading && !props.dominantIcon && props.subdominantIcon ? props.loadingIcon : props.subdominantIcon

    switch (props.dominantIconSide) {
      case "left":
        return [validatedDominantIcon, validatedSubdominantIcon]
      case "right":
        return [validatedSubdominantIcon, validatedDominantIcon]
      default:
        triggerExhaustiveSwitch(props.dominantIconSide, componentName)
    }
  }, [
    props.dominantIconSide,
    props.dominantIcon,
    props.subdominantIcon,
    props.isLoading,
    componentName,
    props.loadingIcon,
  ])
}
