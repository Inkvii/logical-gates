import { Handle, HandleType, Position } from "reactflow"
import { convertDecimalToBase } from "util/baseCalculations"
import { twMerge } from "tailwind-merge"
import { useCallback } from "react"

export default function HandleWrapper(props: { className?: string; type: HandleType; count: number }) {
  const idGenerator = useCallback(
    (index: number) => {
      const ids = "abcdefghijklmnopqrstuvwxyz".split("")
      return convertDecimalToBase(index++, ids)
    },
    [props]
  )

  return Array.from(Array(props.count).keys()).map((i) => {
    const id = idGenerator(i)
    return (
      <Handle
        key={id}
        type={props.type}
        position={props.type === "source" ? Position.Right : Position.Left}
        id={id}
        className={twMerge("w-3 h-3 rounded", props.type === "source" ? "bg-secondary-600" : "bg-primary-600")}
        style={{ top: `${(100 / (props.count + 1)) * (i + 1)}%` }}
      />
    )
  })
}
