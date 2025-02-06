import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    // rendering a virtual DOM
    render(<Application />);
  });
});
