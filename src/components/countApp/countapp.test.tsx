import { screen, render } from "@testing-library/react"
import user from "@testing-library/user-event"
import CountApp from "./CountApp"

describe("CounterApp", () => {
  test("render successfully", () => {
    render(<CountApp />)
    const incrementBtn = screen.getByRole("button", {
      name: /increment/i,
    })
    expect(incrementBtn).toBeInTheDocument()
    const counterHeading = screen.getByTestId("counter-display")
    expect(counterHeading).toBeInTheDocument()
  })
  test("increment the value of heading by 1 when click on incrementBtn", async () => {
    user.setup()
    render(<CountApp />)
    const incrementBtn = screen.getByRole("button", {
      name: /increment/i,
    })
    await user.click(incrementBtn)
    const counterHeading = screen.getByTestId("counter-display")

    expect(counterHeading).toHaveTextContent("1")
  })
  describe("renders input type number button and heading", () => {
    test("renders correclty", () => {
      render(<CountApp />)
      const heading = screen.getByTestId("test2-output")
      expect(heading).toBeInTheDocument()
      const spinButton = screen.getByRole("spinbutton")
      expect(spinButton).toBeInTheDocument()
      const submitButton = screen.getByRole("button", {
        name: /display/i,
      })
      expect(submitButton).toBeInTheDocument()
    })
    test("when we click on the submit button the value of the heading accordingly changed", async () => {
      user.setup()
      render(<CountApp />)
      const heading = screen.getByTestId("test2-output")
      const spinButton = screen.getByRole("spinbutton")
      const submitButton = screen.getByRole("button", {
        name: /display/i,
      })
      const value = "10"
      await user.type(spinButton, value)
      await user.click(submitButton)
      expect(heading).toHaveTextContent(value)
    })
  })
})
