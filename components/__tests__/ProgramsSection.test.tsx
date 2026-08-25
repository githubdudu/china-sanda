import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Programs, { type ProgramCard } from "../ProgramsSection";

const boxingFromSanity: ProgramCard = {
  title: "Boxing",
  description: "CMS description",
  details: "CMS details",
  level: "CMS level",
  image: "https://cdn.sanity.io/boxing.jpg",
};

describe("ProgramsSection merge", () => {
  it("renders all three backup programs when Sanity returns nothing", () => {
    render(<Programs />);

    expect(screen.getByText("Kickboxing")).toBeDefined();
    expect(screen.getByText("Brazilian Jiu Jitsu(BJJ)")).toBeDefined();
    expect(screen.getByText("Boxing")).toBeDefined();
  });

  it("keeps the other backups when Sanity returns only one program", () => {
    render(<Programs programs={[boxingFromSanity]} />);

    expect(screen.getByText("CMS description")).toBeDefined();
    // The two programs Sanity did not return still render from the backup.
    expect(screen.getByText("Kickboxing")).toBeDefined();
    expect(screen.getByText("Brazilian Jiu Jitsu(BJJ)")).toBeDefined();
  });

  it("fills blank fields from the program's own backup, not by index", () => {
    render(<Programs programs={[{ ...boxingFromSanity, description: "" }]} />);

    // Boxing's own backup copy, not Kickboxing's (which sits at index 0).
    expect(
      screen.getByText(/Master the fundamentals of striking/),
    ).toBeDefined();
    // Kickboxing's copy stays on its own card and does not leak into Boxing's.
    expect(screen.getAllByText(/Combine punches and kicks/)).toHaveLength(1);
  });

  it("appends a program that exists only in Sanity", () => {
    render(<Programs programs={[{ ...boxingFromSanity, title: "Wrestling" }]} />);

    expect(screen.getByText("Wrestling")).toBeDefined();
    expect(screen.getByText("Boxing")).toBeDefined();
  });
});
