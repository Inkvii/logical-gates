import { useCallback, useEffect } from "react"
import { useReactFlow, useStoreApi } from "reactflow"
import { produce } from "immer"
import { AndNodeProps } from "components/react-flow/node/AndNode"

/**
 * Hook for updating <code>enabled</code> state based on the condition
 * @param nodeId node id, traced by react flow
 * @param isConditionMet true - source edges will be animated, false otherwise. If <code>null</code> is inserted, any update will have to be done manually
 * @return [(enabled)=>void] - function used for updating node and its edges. Useful when <code>isConditionMet</code> is set to <code>null</code>
 */
export default function useUpdateEnabledState(
  nodeId: string,
  isConditionMet: boolean | null
): [(enabled: boolean) => void] {
  const flow = useReactFlow()
  const store = useStoreApi()

  const updateNodesAndEdgesParams = useCallback(
    (enabled: boolean) => {
      const result = enabled
      flow.setNodes(
        Array.from(store.getState().nodeInternals.values()).map((node) => {
          if (node.id !== nodeId) {
            return node
          }

          node.data = produce<AndNodeProps>(node.data, (draft) => {
            draft.enabled = result
          })
          return node
        })
      )
      flow.setEdges(
        store.getState().edges.map((edge) => {
          if (edge.source !== nodeId) return edge

          edge.animated = result
          return edge
        })
      )
    },
    [isConditionMet]
  )

  useEffect(() => {
    if (isConditionMet !== null) {
      updateNodesAndEdgesParams(isConditionMet)
    }
  }, [isConditionMet, updateNodesAndEdgesParams])

  return [updateNodesAndEdgesParams]
}
