import { render } from "@testing-library/react";
import Banner from "../Banner";

describe("Banner Component", () => {
  test("renders an image and an iframe", () => {
    const id = 123;
    const { container } = render(<Banner id={id} />);
    const image = container.querySelector("img");
    const iframe = container.querySelector("iframe");
    expect(image);
    expect(iframe);
  });

  test("renders Banner with correct src", () => {
    const id = 0;
    const { container } = render(<Banner id={id} />);
    const iframe = container.querySelector("iframe");

    const expectedSrc = `https://sparkly-souffle-e37dff.netlify.app/banners/vertical/products/${id}`;

    expect(iframe).toHaveAttribute("src", expectedSrc);
  });
});
