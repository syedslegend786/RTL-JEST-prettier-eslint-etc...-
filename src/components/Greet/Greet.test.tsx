import { screen, render } from "@testing-library/react";
import Greet from "./Greet";

it("Greet renders correctly", () => {
  render(<Greet name="" />);
  const text = screen.getByText(/hello/i);
  expect(text).toBeInTheDocument();
});

it("Greet show the name of the user", () => {
  render(<Greet name="salleh" />);
  const text = screen.getByText("Hello salleh");
  expect(text).toBeInTheDocument();
});

// * for only
// it.only("Greet show the name of the user", () => {
//     render(<Greet name="salleh" />)
//     const text = screen.getByText("Hello salleh")
//     expect(text).toBeInTheDocument()
// })

// * for skip
// it.skip("Greet show the name of the user", () => {
//     render(<Greet name="salleh" />)
//     const text = screen.getByText("Hello salleh")
//     expect(text).toBeInTheDocument()
// })
