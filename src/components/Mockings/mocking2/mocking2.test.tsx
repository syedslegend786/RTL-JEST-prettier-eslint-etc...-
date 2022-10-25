import { render, screen } from "@testing-library/react"
import Mocking2 from "./Mocking2"
import { server } from "../../../mocks/server"
import { rest } from "msw"

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("Mocking2", () => {
  test("should should render the list based on the api", async () => {
    render(<Mocking2 />)
    const listItems = await screen.findAllByRole("listitem")
    expect(listItems).toHaveLength(3)
  })
  test("shoudl render error message", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )
    render(<Mocking2 />)
    const error = await screen.findByTestId("heading-error")
    expect(error).toBeDisabled()
  })
})
