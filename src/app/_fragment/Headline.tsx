import { twMerge } from "tailwind-merge"

export default function Headline() {
  return (
    <div>
      <h1
        className={twMerge("text-6xl leading-tight font-semibold",
          "bg-gradient-to-r bg-clip-text",
          "from-primary-600 dark:from-primary-200",
          "to-primary-900 dark:to-primary-600",
          "text-transparent dark:text-transparent")}
      >
        Relegates
      </h1>
      <h4 className={"dark:text-neutral-50"}>A visualisation tool for connecting logic gate nodes. </h4>
    </div>
  )
}