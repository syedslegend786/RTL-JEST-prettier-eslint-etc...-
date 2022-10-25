import { render, screen } from "@testing-library/react"
import Skill from "./Skill"

describe("Skills", () => {
  const skills = ["javascript", "html", "css"]
  test("should render successfully", () => {
    render(<Skill skills={skills} />)
    const list = screen.getByRole("list")
    expect(list).toBeInTheDocument()

    const listItem = screen.getAllByRole("listitem")
    expect(listItem).toHaveLength(skills.length)
  })
})
