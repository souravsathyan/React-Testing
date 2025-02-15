import userEvent from "@testing-library/user-event";
import { render, screen } from "../../test-utils";
import { CounterTwo } from "./CounterTwo";

describe("Counter-two", () => {
  test("rendered successfully", () => {
    render(<CounterTwo count={0} />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    userEvent.setup();
    const handleIncremnet = jest.fn();//mock functions  
    const handleDecrement = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncremnet}
      />
    );
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);
    expect(handleIncremnet).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});
