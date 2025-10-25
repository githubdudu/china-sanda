import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";

import Hero from "../Hero";
import { HomePage } from "@/sanity/sanity.types";

// Mock next/image
vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

// Mock AnimatedHeadings component
vi.mock("../AnimatedHeadings", () => ({
  default: ({ pageTitle }: { pageTitle: HomePage["pageTitle"] }) => (
    <div data-testid="animated-headings">
      {pageTitle?.map((item) => (
        <div key={item._key}>{item.title?.sentence}</div>
      ))}
    </div>
  ),
}));

describe("Hero Component", () => {
  const mockHeroData: HomePage = {
    _id: "homePage1",
    _type: "homePage",
    _createdAt: "2025-01-01",
    _updatedAt: "2025-01-01",
    _rev: "1",
    name: "Home Page",
    pageTitle: [
      {
        _key: "1",
        _type: "titleSentence" as const,
        title: {
          _type: "sentence" as const,
          sentence: "World-Class Sanda Training",
          stressWord: "Sanda",
        },
        titleCN: {
          _type: "sentence" as const,
          sentence: "世界一流的散打训练",
          stressWord: "散打",
        },
      },
    ],
    button1Red: {
      _type: "buttonContent" as const,
      name: "Book Trial",
      nameCN: "预约试课",
      url: "/contact",
    },
    button2White: {
      _type: "buttonContent" as const,
      name: "View Classes",
      nameCN: "查看课程",
      url: "/classes",
    },
  };

  it("renders with full hero data and matches snapshot", () => {
    const { container } = render(<Hero heroData={mockHeroData} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with minimal hero data and matches snapshot", () => {
    const minimalData: HomePage = {
      _id: "homePage2",
      _type: "homePage",
      _createdAt: "2025-01-01",
      _updatedAt: "2025-01-01",
      _rev: "1",
      pageTitle: [],
    };

    const { container } = render(<Hero heroData={minimalData} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
