import { Handle, HandleType, Position } from "reactflow"
import { convertDecimalToBase } from "util/baseCalculations"
import { twMerge } from "tailwind-merge"
import { useCallback } from "react"

export default function HandleWrapper(props: { className?: string; type: HandleType; count: number }) {
  const idGenerator = useCallback((index: number) => {
    const ids = "abcdefghijklmnopqrstuvwxyz".split("")
    return convertDecimalToBase(index++, ids)
  }, [])

  return Array.from(Array(props.count).keys()).map((i) => {
    const id = idGenerator(i)
    return (
      <Handle
        key={id}
        type={props.type}
        position={props.type === "source" ? Position.Right : Position.Left}
        id={id}
        className={twMerge(
          "w-3 h-3 rounded-full border",
          props.type === "source" ? "bg-secondary-600 border-secondary-400" : "bg-primary-600 border-primary-400"
        )}
        style={{ top: `${(100 / (props.count + 1)) * (i + 1)}%` }}
      />
    )
  })
}
