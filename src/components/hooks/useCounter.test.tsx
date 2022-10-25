import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("should render 0", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  test("should accept the initial props", () => {
    const {
      result: { current },
    } = renderHook(useCounter, {
      initialProps: {
        initialCount: 13,
      },
    });

    expect(current.count).toBe(13);
  });
  test("the increment", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  test("the decrement function", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
