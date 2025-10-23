import { describe, it, expect } from "vitest";
import { client } from "@/sanity/client";

describe("Sanity CMS Connection", () => {
  it("should have valid environment variables", () => {
    expect(process.env.SANITY_PROJECT_ID).toBeDefined();
    expect(process.env.SANITY_DATASET).toBeDefined();
    expect(process.env.SANITY_API_VERSION).toBeDefined();
    expect(process.env.SANITY_API_TOKEN).toBeDefined();
  });

  it("should connect to Sanity successfully", async () => {
    const result = await client.fetch(`*[0..0]`);
    expect(result).toBeDefined();
  });

  it("should fetch all documents", async () => {
    const allDocs = await client.fetch(`*`);
    expect(allDocs.length).toBeGreaterThan(0);
    console.log(`Found ${allDocs.length} total documents`);
  });

  it("should fetch homePage documents", async () => {
    const homePages = await client.fetch(`*[_type == "homePage"]`);
    expect(homePages.length).toBeGreaterThan(0);
    console.log(`Found ${homePages.length} homePage document(s)`);

    if (homePages.length > 0) {
      expect(homePages[0]).toHaveProperty("_type", "homePage");
      expect(homePages[0]).toHaveProperty("_id");
    }
  });
});
