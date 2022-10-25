import React from "react"
import { useAppSelector } from "./../../store/hooks"
const Provider = () => {
  const { theme } = useAppSelector((s) => s)
  return (
    <div>
      <h1>{theme.theme} mode</h1>
    </div>
  )
}

export default Provider
