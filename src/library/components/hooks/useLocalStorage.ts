"use client"

import { useCallback, useEffect, useState } from "react"

export default function useLocalStorage(name: string): {
  value: string
  update: (value: string) => void
  loading: boolean
} {
  const [value, setValue] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setValue(window.localStorage.getItem(name) ?? "")
    setIsLoading(false)
  }, [name])

  const update = useCallback(
    (newValue: string) => {
      window.localStorage.setItem(name, newValue)
      setValue(newValue)
    },
    [name]
  )

  return { value, update, loading: isLoading }
}
