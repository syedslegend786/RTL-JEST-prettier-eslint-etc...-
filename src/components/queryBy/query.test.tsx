import { render, screen } from "@testing-library/react"
import QueryBy from "./QueryBy"
describe("QueryBy", () => {
  test("render login button", () => {
    render(<QueryBy />)
    const loginButton = screen.queryByRole("button", {
      name: "Login",
    })
    expect(loginButton).not.toBeInTheDocument()
  })
  test("render start learning button", () => {
    render(<QueryBy />)
    const startLearning = screen.getByRole("button", {
      name: "Start Learning",
    })
    expect(startLearning).toBeInTheDocument()
  })
})
