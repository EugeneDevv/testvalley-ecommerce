import { getBanners, getCategories, getShortcuts } from "@/lib/data";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: "test data" }),
  })
);

describe("Data functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch banners correctly", async () => {
    const data = await getBanners();
    expect(data).toEqual({ data: "test data" });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should fetch categories correctly", async () => {
    const data = await getCategories();
    expect(data).toEqual({ data: "test data" });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should fetch shortcuts correctly", async () => {
    const data = await getShortcuts();
    expect(data).toEqual({ data: "test data" });
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
