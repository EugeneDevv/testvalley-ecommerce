import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Badge, badgeVariants } from "@/components/common/badge";
import { cn } from "@/lib/utils";

describe("Button Component Unit Test", () => {
  it("renders a button", () => {
    render(
      <Badge className={cn(badgeVariants({ variant: "outline" }))}>
        Offiziersmesser
      </Badge>
    );

    const badgeText = screen.getByText("Offiziersmesser");

    expect(badgeText).toBeInTheDocument();
  });
});
