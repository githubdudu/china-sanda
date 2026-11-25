import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import TrainingGoalsSection from "../TrainingGoalsSection";

describe("TrainingGoalsSection", () => {
  it("renders all four training goals and their key takeaways", () => {
    render(<TrainingGoalsSection />);

    expect(screen.getByRole("heading", { name: "Choose Your Goal" })).toBeDefined();
    expect(screen.getByRole("heading", { name: "Strength" })).toBeDefined();
    expect(screen.getByRole("heading", { name: "Resilience" })).toBeDefined();
    expect(screen.getByRole("heading", { name: "Self-Defense" })).toBeDefined();
    expect(screen.getByRole("heading", { name: "Stress Relief" })).toBeDefined();
    expect(
      screen.getByText("Build strength, coordination, and a healthier everyday life."),
    ).toBeDefined();
    expect(
      screen.getByText("Build awareness, sound judgment, and confidence under pressure."),
    ).toBeDefined();
  });

  it("provides accessible disclosures for the full goal descriptions", () => {
    const { container } = render(<TrainingGoalsSection />);
    const disclosures = container.querySelectorAll("details");

    expect(disclosures).toHaveLength(4);

    disclosures.forEach((disclosure) => {
      const summary = disclosure.querySelector("summary");
      expect(summary).not.toBeNull();
      if (summary) {
        fireEvent.click(summary);
      }
    });

    expect(
      screen.getByText("Can combat training really change your body?"),
    ).toBeDefined();
    expect(
      screen.getByText(/With every step, shape a taller, more confident posture/),
    ).toBeDefined();
    expect(
      screen.getByText("Why make time to train when life is already so busy?"),
    ).toBeDefined();
    expect(
      screen.getByText(/In the simplicity of being fully present/),
    ).toBeDefined();
  });
});
