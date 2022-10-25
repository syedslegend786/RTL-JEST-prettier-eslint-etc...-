import { screen, render } from "@testing-library/react"
import GetByrole from "./GetByrole"
describe("render correctly", () => {
  test("Username input type text", () => {
    render(<GetByrole />)
    const userName = screen.getByRole("textbox", {
      name: "Username",
    })

    expect(userName).toBeInTheDocument()
  })
  test("Checkbox render", () => {
    render(<GetByrole />)
    const checkBox = screen.getByRole("checkbox", {
      name: "Remember me",
    })

    expect(checkBox).toBeInTheDocument()
  })
  test("password input type text", () => {
    render(<GetByrole />)
    const password = screen.getByRole("textbox", {
      name: "Password",
    })

    expect(password).toBeInTheDocument()
  })
  test("description textarea render", () => {
    render(<GetByrole />)
    const description = screen.getByPlaceholderText("Description")

    expect(description).toBeInTheDocument()
  })
  test("should contain select for country picking...", () => {
    render(<GetByrole />)
    const select = screen.getByRole("combobox")

    expect(select).toBeInTheDocument()
  })
  test("p tag with some text ,i.e, All fields are mendatery", () => {
    render(<GetByrole />)
    const getByText = screen.getByText("All fields are mendatery", {
      selector: "p",
    })

    expect(getByText).toBeInTheDocument()
  })
  test("render Image element with alt ,avatar,", () => {
    render(<GetByrole />)
    const image = screen.getByAltText("avatar")

    expect(image).toBeInTheDocument()
  })
})
