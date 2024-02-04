import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/common/card";

describe("Button Component Unit Test", () => {
  it("renders a button", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card</CardTitle>
          <CardDescription>Unit Test</CardDescription>
        </CardHeader>
        <CardContent>Test Valley</CardContent>
        <CardFooter>Offiziersmesser</CardFooter>
      </Card>
    );

    const cardTitle = screen.getByText("Card");
    const cardDescription = screen.getByText("Test Valley");
    const cardFooter = screen.getByText("Offiziersmesser");

    expect(cardTitle).toBeInTheDocument();
    expect(cardDescription).toBeInTheDocument();
    expect(cardFooter).toBeInTheDocument();
  });
});
