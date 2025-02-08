import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["html", "css", "javascript"];
  test("renders-correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders-list-items-correctly", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(3);
  });

  test("renders-login-button-correctly", () => {
    render(<Skills skills={skills} />);
    const loginButtonElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButtonElement).toBeInTheDocument();
  });

  test("renders-start-learning-button-correctly", () => {
    render(<Skills skills={skills} />);
    const startLearningButtonElement = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButtonElement).not.toBeInTheDocument();
  });

  test("start-learning-button-is-eventually-rendered", async () => {
    render(<Skills skills={skills} />);
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
    // screen.debug();
  });
});
