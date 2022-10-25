import { render, screen } from "../../test-utils";
import Provider from "./Provider";

describe("Provider.tsx", () => {
  test("should show current theme mode", () => {
    render(<Provider />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("light mode");
  });
});
