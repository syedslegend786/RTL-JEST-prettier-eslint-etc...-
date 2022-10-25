import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Mocking1 from "./Mocking1";

describe("mocking1.tsx", () => {
  test("should render successfully", () => {
    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();
    render(
      <Mocking1
        count={0}
        decrementHandler={mockDecrement}
        incrementHandler={mockIncrement}
      />
    );
    const incrementBtn = screen.getByRole("button", { name: /Incremment/i });
    const decrementBtn = screen.getByRole("button", { name: /Decrement/i });
    expect(incrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();
  });
  test("should should mock functions", async () => {
    user.setup();
    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();
    render(
      <Mocking1
        count={0}
        decrementHandler={mockDecrement}
        incrementHandler={mockIncrement}
      />
    );
    const incrementBtn = screen.getByRole("button", { name: /Incremment/i });
    const decrementBtn = screen.getByRole("button", { name: /Decrement/i });
    await user.click(incrementBtn);
    await user.click(decrementBtn);

    expect(mockIncrement).toBeCalledTimes(1);
    expect(mockDecrement).toBeCalledTimes(1);
  });
});
