import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button, buttonVariants } from "@/components/common/button";
import { cn } from "@/lib/utils";

describe("Button Component Unit Test", () => {
  it("renders a button", () => {
    render(
      <Button
        variant="secondary"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        testValley
      </Button>
    );

    const textLabel = screen.getByText("testValley");

    expect(textLabel).toBeInTheDocument();
  });

  it("renders a button asChild", () => {
    render(
      <Button variant="outline" asChild={true}>
        <a href="/">testValley</a>
      </Button>
    );

    const testValleyLink = screen.getByRole("link");
    const textLabel = screen.getByText("testValley");

    expect(testValleyLink).toBeInTheDocument();
    expect(textLabel).toBeInTheDocument();
  });
});
