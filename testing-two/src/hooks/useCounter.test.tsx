import { act, renderHook } from "../test-utils";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the inital count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accept and render the inital count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter);
    result.current.increment();
    act(()=>{
      result.current.increment();
    })
    expect(result.current.count).toBe(1);
  });
});

