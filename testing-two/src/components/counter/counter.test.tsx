import { render, screen } from "@testing-library/react";
import Counter from "./counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const headingElem = screen.getByRole("heading");
    expect(headingElem).toBeInTheDocument();

    const incBtn = screen.getByRole("button", { name: "Increase" });
    expect(incBtn).toBeInTheDocument();
  });

  test("renders 0 intially", () => {
    render(<Counter />);

    const headingElem = screen.getByRole("heading");
    expect(headingElem).toHaveTextContent("0");
  });

  test("renders 1 after clicking increase button",async () => {
    user.setup();
    render(<Counter />);
    const incBtn = screen.getByRole('button',{name:"Increase"})
    await user.dblClick(incBtn);
    const headingElem = screen.getByRole("heading");
    expect(headingElem).toHaveTextContent("2");

  });
});
