import { render, screen } from "@testing-library/react"
import Component from "./index"

describe("apearence & disappearence", () => {
  test("render login button after 2 seconds", async () => {
    render(<Component />)
    const LoginButton = await screen.findByRole(
      "button",
      {
        name: "Login",
      },
      {
        timeout: 3000,
      }
    )
    expect(LoginButton).toBeInTheDocument()
  })
})
