import { render, screen } from "@testing-library/react";
import Footer from "@/components/footer";

describe("Footer", () => {
  it("renders the component", () => {
    render(<Footer />);

    const footerText = screen.getByText(/test valley footer/i);

    expect(footerText).toBeTruthy();
  });
});
