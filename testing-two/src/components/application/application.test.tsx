import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const paraElement = screen.getByText("All fields are mandatory");
    expect(paraElement).toBeInTheDocument();

    const paraElement2 = screen.getByText(" are mandatory", { exact: false });
    expect(paraElement2).toBeInTheDocument();
    const paraElement3 = screen.getByText(/mandatory/, { exact: false });
    expect(paraElement3).toBeInTheDocument();

    const displayValue = screen.getByDisplayValue("Vishwas");
    expect(displayValue).toBeInTheDocument();

    const imgElement = screen.getByAltText("img with alt");
    expect(imgElement).toBeInTheDocument();

    const titleTag = screen.getByTitle("close");
    expect(titleTag).toBeInTheDocument();

    const textElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(textElement).toBeInTheDocument();

    const nameElement = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByPlaceholderText("Fullname");
    expect(nameElement2).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocation = screen.getByRole("combobox");
    expect(jobLocation).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");




    
    expect(customElement).not.toBeEnabled();
  });
});
