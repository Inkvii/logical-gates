import { Connection, Edge, Node } from "reactflow"

export function createEdgeId(connection: Connection): string {
  return `e${connection.source}${connection.sourceHandle}-${connection.target}${connection.targetHandle}`
}

/**
 * Creates edge from connection and animates it if source node is set to enabled
 * @param connection connection from which edge will be created
 * @param nodes array of all nodes
 *
 * @throws Error if connection is not full
 * @throws Error if source node cannot be found
 */
export function createEdgeFromConnection(connection: Connection, nodes: Node[]) {
  if (!connection.source || !connection.target) throw new Error("Connection must have source and target defined")
  const node = nodes.find((n) => n.id === connection.source)

  if (!node) throw new Error("Node must exist in nodes array")

  const edge: Edge = {
    id: createEdgeId(connection),
    source: connection.source,
    sourceHandle: connection.sourceHandle,
    target: connection.target,
    targetHandle: connection.targetHandle,
    animated: node.data.enabled,
  }

  return edge
}
