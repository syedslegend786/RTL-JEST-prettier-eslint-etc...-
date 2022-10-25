import { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import StoreProvider from "./store/StoreProvider"

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: StoreProvider, ...options })

export * from "@testing-library/react"
export { customRender as render }
