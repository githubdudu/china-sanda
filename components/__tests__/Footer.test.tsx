import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { Footer } from "../Footer";

import { defaultNavBarData } from "@/data/navItems";
import { defaultAddressData } from "@/data/address";

describe("Footer Component", () => {
  it("renders with default props and matches snapshot", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with navigation items and matches snapshot", () => {
    const { container } = render(<Footer navItems={defaultNavBarData.navItems} address={defaultAddressData} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
