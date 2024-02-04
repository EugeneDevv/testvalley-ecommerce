import { ProductsCarousel } from "@/components/products-carousel";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ label: "test data" }]),
  })
);

describe("Carousel", () => {
  it("renders ProductsCarousel", async () => {
    const data = await ProductsCarousel({ className: "px-4" });

    expect(data).toBeDefined();
  });
});
