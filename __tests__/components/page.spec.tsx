/**
 * @jest-environment jsdom
 */
import Home from "@/app/page";
import "@testing-library/jest-dom";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Home Page Unit Test", () => {
  it("renders home component", async () => {
    
    const data = await Home();
    expect(data).toBeDefined();
  });
});
