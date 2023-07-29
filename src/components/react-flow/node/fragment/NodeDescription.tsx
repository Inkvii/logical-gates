import { useCallback, useRef, useState } from "react"
import { Node, useNodeId, useReactFlow } from "reactflow"
import { produce } from "immer"
import { AndNodeProps } from "components/react-flow/node/AndNode"

export default function NodeDescription(props: { description: string }) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const nodeId = useNodeId()

  const { setNodes } = useReactFlow()

  const handleFormSubmit = useCallback(() => {
    setNodes((prev) =>
      prev.map((n) => {
        if (n.id !== nodeId) return n

        return produce(n, (draft: Node<AndNodeProps>) => {
          draft.data.name = inputRef.current?.value ?? props.description
        })
      })
    )

    setIsEditMode(false)
  }, [nodeId, props.description, setNodes])

  return (
    <div className={"nodrag py-2"}>
      {isEditMode ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleFormSubmit()
          }}
          className={"flex flex-col gap-2 @container"}
        >
          <textarea
            autoFocus={true}
            onFocus={(e) =>
              e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)
            }
            ref={inputRef}
            defaultValue={props.description}
            className={"bg-neutral-800 border border-neutral-700 text-white p-0 w-full"}
          />
          <div className={"grid gap-2 @[100px]:grid-cols-1 @[150px]:grid-cols-2"}>
            <button type={"submit"} className={"bg-primary-600 text-white px-2 rounded"}>
              Save
            </button>
            <button
              type={"button"}
              className={"border-primary-400 border text-primary-400 px-2 rounded"}
              onClick={() => setIsEditMode(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <p
          className={"text-lg hover:bg-neutral-700 cursor-text transition-all"}
          onClick={() => {
            setIsEditMode((prev) => !prev)
          }}
        >
          {props.description}
        </p>
      )}
    </div>
  )
}
