import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ThemeProvider } from "next-themes";

import { ThemeToggle } from "../ThemeToggle";

describe("ThemeToggle Component", () => {
  it("renders within ThemeProvider and matches snapshot", () => {
    const { container } = render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <ThemeToggle />
      </ThemeProvider>,
    );
    expect(container.querySelector("button")).toMatchSnapshot();
  });
});
