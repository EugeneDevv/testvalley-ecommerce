/**
 * @jest-environment jsdom
 */

import HotDeals from "@/components/hot-deals";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: "test data" }),
  })
);

afterEach(() => {
  jest.clearAllMocks();
});

describe("Hot Deals Unit Test", () => {
  it("renders hot deals component", async () => {
    const data = await HotDeals({
      label: "Test label",
      description: "Test description",
      single: true,
    });
    expect(data).toBeDefined();
  });
});
