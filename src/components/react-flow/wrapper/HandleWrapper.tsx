import { Connection, Handle, HandleProps, HandleType, Position, useReactFlow } from "reactflow"
import { convertDecimalToBase } from "util/baseCalculations"
import { twMerge } from "tailwind-merge"
import { CSSProperties, useCallback } from "react"
import { isValidConnection } from "util/edgeUtils"

export default function HandleWrapper(props: { className?: string; type: HandleType; count: number }) {
  const idGenerator = useCallback((index: number) => {
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
  }
) {
  const { getNode, getEdges } = useReactFlow()
  const canConnect = useCallback(
    (connection: Connection) => isValidConnection(connection, getNode, getEdges),
    [getNode, getEdges]
  )

  return (
    <Handle
      {...props}
      type={props.type}
      position={props.type === "source" ? Position.Right : Position.Left}
      className={twMerge(
        "w-3 h-3 rounded-full border",
        props.type === "source" ? "bg-secondary-600 border-secondary-400" : "bg-primary-600 border-primary-400"
      )}
      isValidConnection={canConnect}
    />
  )
}
