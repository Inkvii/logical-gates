import { Button } from "@/library/button/Button"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr"
import IconConstants from "@/library/utils/IconConstants"
import { Heading } from "react-aria-components"

export default function Header() {
  return (
    <header className={"flex gap-4 justify-between items-center pb-4"}>
      <Button variant={"hyperlink"} hue={"primary"} className={"dark:[&_:where(svg)]:fill-primary-200"} slot="previous">
        <ArrowLeft size={IconConstants.md} />
      </Button>
      <Heading className={"text-lg font-normal text-primary-900/90"} />
      <Button variant={"hyperlink"} hue={"primary"} className={"dark:[&_:where(svg)]:fill-primary-200"} slot="next">
        <ArrowRight size={IconConstants.md} />
      </Button>
    </header>
  )
}
