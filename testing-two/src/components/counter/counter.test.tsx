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

  test("resnders-a-count-of-10-after-setting-the-count-to-10",async()=>{
    user.setup();
    render(<Counter/>)
    const inputNumber = screen.getByRole('spinbutton');
    await user.type(inputNumber,'10');
    expect(inputNumber).toHaveValue(10);

    const buttonElem = screen.getByRole('button',{name:'Set'})
    await user.click(buttonElem);

    const headingElem = screen.getByRole('heading',{level:1});
    expect(headingElem).toHaveTextContent('10');

  })

  test("elements-are-focused-in-the-right-order",async()=>{
    render(<Counter/>);
    user.setup();
    const buttonElem = screen.getByRole('button',{name:'Set'})
    const inputNumber = screen.getByRole('spinbutton');
    const incBtn = screen.getByRole('button',{name:"Increase"})

    await user.tab();
    expect(incBtn).toHaveFocus();
    await user.tab();
    expect(inputNumber).toHaveFocus();
    await user.tab();
    expect(buttonElem).toHaveFocus();
  })
});
