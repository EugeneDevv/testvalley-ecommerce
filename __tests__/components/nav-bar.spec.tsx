import { render, screen } from "@testing-library/react";
import { MainNav } from "@/components/nav-bar";
import "@testing-library/jest-dom";

describe("MainNav", () => {
  it("renders main nav component", () => {
    render(<MainNav />);
    expect(screen.getByText("Testvalley")).toBeInTheDocument();
  });
});
