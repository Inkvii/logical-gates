import { Connection, Edge, getConnectedEdges, HandleType, Instance, Node } from "reactflow"

export function createEdgeId(connection: Connection): string {
  return `e${connection.source}${connection.sourceHandle}-${connection.target}${connection.targetHandle}`
}

export function getHandleId(connection: Connection | Edge, type: HandleType): string {
  return type === "source"
    ? `${connection.source}${connection.sourceHandle}`
    : `${connection.target}${connection.targetHandle}`
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

export function isValidConnection<NodeData, EdgeData>(
  connection: Connection | Edge,
  getNode: Instance.GetNode<NodeData>,
  getEdges: Instance.GetEdges<EdgeData>
): boolean {
  if (!connection.target || !connection.source) return false

  const targetNode = getNode(connection.target)
  const sourceNode = getNode(connection.source)
  if (!targetNode || !sourceNode) throw new Error("Cannot find node id of target or source")

  const edges = getConnectedEdges([targetNode, sourceNode], getEdges())
  for (let i = 0; i < edges.length; i++) {
    if (getHandleId(edges[i], "target") === getHandleId(connection, "target")) {
      console.log(`Target handle ${edges[i].target}${edges[i].targetHandle} is already occupied`)
      return false
    }
  }
  return true
}
