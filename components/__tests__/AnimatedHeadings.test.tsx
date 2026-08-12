import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import AnimatedHeadings from "../old/AnimatedHeadings";
import { HomePage } from "@/sanity/sanity.types";

describe("AnimatedHeadings Component", () => {
  const mockPageTitle: HomePage["pageTitle"] = [
    {
      _key: "1",
      _type: "titleSentence",
      title: {
        _type: "sentence",
        sentence: "World-Class Sanda Training",
        stressWord: "Sanda",
      },
      titleCN: {
        _type: "sentence",
        sentence: "世界一流的散打训练",
        stressWord: "散打",
      },
    },
    {
      _key: "2",
      _type: "titleSentence",
      title: {
        _type: "sentence",
        sentence: "Build Strength and Confidence",
        stressWord: "Strength",
      },
      titleCN: {
        _type: "sentence",
        sentence: "增强力量与自信",
        stressWord: "力量",
      },
    },
  ];

  it("renders with page title data and matches snapshot", () => {
    const { container } = render(<AnimatedHeadings pageTitle={mockPageTitle} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with empty page title and matches snapshot", () => {
    const { container } = render(<AnimatedHeadings pageTitle={[]} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with undefined page title and matches snapshot", () => {
    const { container } = render(<AnimatedHeadings pageTitle={undefined} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
