import { render, screen } from "@testing-library/react";
import ProductCard from "@/components/product-card";
import "@testing-library/jest-dom";

describe("ProductCard", () => {
  const mockProduct = {
    id: "1234",
    media: [{ uri: "https://example.com/image.jpg" }],
    title: "Test Product",
    rating: 4.5,
  };

  it("renders without crashing", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByAltText("product-image")).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("displays the correct product information", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByAltText("product-image").src).toContain(
      mockProduct.media[0].uri
    );
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });
});
