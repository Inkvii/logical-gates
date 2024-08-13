"use client"
import { BreadcrumbRoute } from "@/library/breadcrumbs/Breadcrumbs"
import { ComboBox } from "@/library/ui/combobox/ComboBox"
import { Button } from "@/library/button/Button"
import { DotsThree } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import BreadcrumbContainer from "@/library/breadcrumbs/fragment/BreadcrumbContainer"

export type Props = {
  routes: BreadcrumbRoute[]
}
export default function BreadcrumbCollapse(props: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <BreadcrumbContainer>
      <ComboBox
        items={props.routes}
        propertyOfKey={"name"}
        propertyOfValue={"path"}
        onChange={(selected) => {
          startTransition(() => router.push(selected.url ?? selected.path))
        }}
        popoverContentWidth={"250px"}
        trigger={
          <Button
            variant={"outline"}
            size={"none"}
            hue={"neutral"}
            className={"border border-hue-200 dark:border-hue-600 rounded-full min-w-fit px-1"}
            isLoading={isPending}
            dominantIcon={<DotsThree weight={"bold"} />}
            children={null}
          />
        }
      />
    </BreadcrumbContainer>
  )
}
