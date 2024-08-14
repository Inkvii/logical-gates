import { Connection, Handle, HandleProps, HandleType, Position, useReactFlow } from "reactflow"
import { convertDecimalToBase } from "util/baseCalculations"
import { twMerge } from "tailwind-merge"
import { CSSProperties, useCallback } from "react"
import { isValidConnection } from "util/edgeUtils"

export default function HandleWrapper(props: { className?: string; type: HandleType; count: number }) {
  const idGenerator = useCallback((index: number) => {
    // handle id in format a-z, so edges can be connected using 1a-2e
    const ids = "abcdefghijklmnopqrstuvwxyz".split("")
    return convertDecimalToBase(index++, ids)
  }, [])

  return Array.from(Array(props.count).keys()).map((i) => {
    const id = idGenerator(i)
    return (
      <CustomHandle key={id} id={id} type={props.type} style={{ top: `${(100 / (props.count + 1)) * (i + 1)}%` }} />
    )
  })
}

function CustomHandle(
  props: Omit<HandleProps, "position" | "isValidConnection"> & {
    style?: CSSProperties
  },
) {
  const { getNode, getEdges } = useReactFlow()
  const canConnect = useCallback(
    (connection: Connection) => isValidConnection(connection, getNode, getEdges),
    [getNode, getEdges],
  )

  return (
    <Handle
      {...props}
      type={props.type}
      position={props.type === "source" ? Position.Right : Position.Left}
      className={twMerge(
        "w-3 h-3 rounded-full border-2",
        props.type === "source" ? "danger" : "success",
        "bg-hue-300 dark:bg-hue-700",
        "border-hue-400 dark:border-hue-900",
      )}
      isValidConnection={canConnect}
    />
  )
}
