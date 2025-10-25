import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { ThemeProvider } from "next-themes";

import Header from "../Header";
import { NavBar } from "@/sanity/sanity.types";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// Mock next/image
vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe("Header Component", () => {
  const mockNavBarData: NavBar = {
    _id: "navBar1",
    _type: "navBar",
    _createdAt: "2025-01-01",
    _updatedAt: "2025-01-01",
    _rev: "1",
    siteName: "中国散打",
    siteName2: "China Sanda Club",
    navItems: [
      { _key: "1", _type: "buttonContent" as const, name: "Home", nameCN: "首页", url: "/" },
      { _key: "2", _type: "buttonContent" as const, name: "Classes", nameCN: "课程", url: "/classes" },
      { _key: "3", _type: "buttonContent" as const, name: "Contact", nameCN: "联系", url: "/contact" },
    ],
  };

  it("renders with navigation data and matches snapshot", () => {
    const { container } = render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Header navBarData={mockNavBarData} />
      </ThemeProvider>,
    );
    expect(container.querySelector("header")).toMatchSnapshot();
  });

  it("renders with null navigation data and matches snapshot", () => {
    const { container } = render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Header navBarData={null} />
      </ThemeProvider>,
    );
    expect(container.querySelector("header")).toMatchSnapshot();
  });
});
