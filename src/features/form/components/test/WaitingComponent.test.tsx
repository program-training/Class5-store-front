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
