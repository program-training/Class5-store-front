<<<<<<< HEAD
import { render, screen } from "@testing-library/react";
import WaitingComponent from "../WaitingComponent";
describe("waiting component", () => {
  it("renders correctly", () => {
    render(<WaitingComponent />);
    const box = screen.getByRole("img");
    expect(box).toBeInTheDocument();
    expect(box).toHaveAttribute("src", "https://i.gifer.com/VZvw.gif");
  });
});
=======
import { render, screen } from "@testing-library/react";
import WaitingComponent from "../WaitingComponent";

describe("waiting component", () => {
  it("renders correctly", () => {
    render(<WaitingComponent />);
    const box = screen.getByRole("img");
    expect(box).toBeInTheDocument();
    expect(box).toHaveAttribute("src", "https://i.gifer.com/VZvw.gif");
  });
});
>>>>>>> acc98a17e7c3d9fdbc16a561a0b091def3e2d3d8
