import { render, screen } from "@testing-library/react";
import QuoteHeader from "../topbars/QuoteHeader";

describe("QuoteHeader", () => {
  test("Quote test", () => {
    render(<QuoteHeader quote="Test" />);
    const elem = screen.getByTestId("quote-header");
    expect(elem).toHaveTextContent("Test");
  });
});
