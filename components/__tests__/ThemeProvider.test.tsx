import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { ThemeProvider } from "../ThemeProvider";

describe("ThemeProvider Component", () => {
  it("renders children with theme provider and matches snapshot", () => {
    const { container } = render(
      <ThemeProvider>
        <div>Test Content</div>
      </ThemeProvider>,
    );
    expect(container.querySelector("div")).toMatchSnapshot();
  });

  it("renders multiple children and matches snapshot", () => {
    const { container } = render(
      <ThemeProvider>
        <div data-testid="wrapper">
          <header>Header</header>
          <main>Main Content</main>
          <footer>Footer</footer>
        </div>
      </ThemeProvider>,
    );
    // Query for the wrapper div to capture all children without the script
    expect(container.querySelector("[data-testid='wrapper']")).toMatchSnapshot();
  });
});
