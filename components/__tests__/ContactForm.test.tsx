import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";

import { ContactForm } from "../ContactForm";

// useSearchParams() returns null outside a Next.js router context. A real
// URLSearchParams covers the .get() surface the form uses.
let searchParams = new URLSearchParams();
vi.mock("next/navigation", () => ({
  useSearchParams: () => searchParams,
}));

describe("ContactForm Component", () => {
  it("renders initial form state and matches snapshot", () => {
    searchParams = new URLSearchParams();
    const { container } = render(<ContactForm />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("preselects the interest given in the query string", () => {
    searchParams = new URLSearchParams("interest=youth");
    const { container } = render(<ContactForm />);

    const select = container.querySelector<HTMLSelectElement>("#interest");
    expect(select?.value).toBe("youth");
  });
});
