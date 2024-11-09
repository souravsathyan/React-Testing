import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("greet-renders-correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Greet");
  expect(textElement).toBeInTheDocument();
});

test("greet-renders-with-name",()=>{
  render(<Greet name='Sourav'/>)
  const textElement = screen.getByText('Greet Sourav')
  expect(textElement).toBeInTheDocument()
})
