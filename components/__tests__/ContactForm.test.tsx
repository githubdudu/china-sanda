import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { ContactForm } from "../ContactForm";

describe("ContactForm Component", () => {
  it("renders initial form state and matches snapshot", () => {
    const { container } = render(<ContactForm />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
