import { Connection, getConnectedEdges, Handle, HandleProps, HandleType, Position, useReactFlow } from "reactflow"
import { convertDecimalToBase } from "util/baseCalculations"
import { twMerge } from "tailwind-merge"
import { CSSProperties, useCallback } from "react"
import { getHandleId } from "util/edgeUtils"

export default function HandleWrapper(props: {
  className?: string
  type: HandleType
  count: number
  maxConnectionLimit?: number
}) {
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
  props: Omit<HandleProps, "position" | "isValidConnection"> & { maxConnectionLimit?: number; style?: CSSProperties }
) {
  const { maxConnectionLimit, ...reactFlowProps } = props
  const { getNode, getEdges } = useReactFlow()
  const isValidConnection = useCallback(
    () => (connection: Connection) => {
      if (!connection.target || !connection.source) return false

      const targetNode = getNode(connection.target)
      const sourceNode = getNode(connection.source)
      if (!targetNode || !sourceNode) throw new Error("Cannot find node id of target or source")

      const edges = getConnectedEdges([targetNode, sourceNode], getEdges())

      // Create map of occurences for each handle
      const connectionMap = new Map<string, number>()
      edges.forEach((edge) => {
        const handleId = props.type === "target" ? getHandleId(edge, "source") : getHandleId(edge, "target")
        if (!handleId) return

        if (connectionMap.has(handleId)) {
          connectionMap.set(handleId, connectionMap.get(handleId)! + 1)
        } else {
          connectionMap.set(handleId, 1)
        }
      })

      console.log(connectionMap)

      // Array.from(connectionMap.values()).every((handleOccurences) => handleOccurences <= maxConnections)

      for (let i = 0; i < edges.length; i++) {
        if (getHandleId(edges[i], "source") === getHandleId(connection, "source")) {
          console.log(`Source handle ${edges[i].source}${edges[i].sourceHandle} is already occupied`)
          return false
        }

        if (getHandleId(edges[i], "target") === getHandleId(connection, "target")) {
          console.log(`Target handle ${edges[i].target}${edges[i].targetHandle} is already occupied`)
          return false
        }
      }
      return true
    },
    [getNode, getEdges, props.type]
  )

  return (
    <Handle
      {...reactFlowProps}
      type={props.type}
      position={props.type === "source" ? Position.Right : Position.Left}
      className={twMerge(
        "w-3 h-3 rounded-full border",
        props.type === "source" ? "bg-secondary-600 border-secondary-400" : "bg-primary-600 border-primary-400"
      )}
      isValidConnection={isValidConnection()}
    />
  )
}
