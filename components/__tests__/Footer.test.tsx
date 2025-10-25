import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { Footer } from "../Footer";

describe("Footer Component", () => {
  it("renders with default props and matches snapshot", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with navigation items and matches snapshot", () => {
    const navItems = [
      { _key: "1", name: "Home", url: "/" },
      { _key: "2", name: "Classes", url: "/classes" },
      { _key: "3", name: "Contact", url: "/contact" },
    ];

    const { container } = render(<Footer navItems={navItems} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
