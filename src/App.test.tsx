import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter, Route, Router, Routes } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import ProductOverview from "./pages/ProductOverview";
import FrontPage from "./pages/FrontPage";
import NavigationBar from "./components/topbars/navbar";

/**
 * @vitest-environment jsdom
 */

it("navigates to the offers page and hides the quote header", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const quoteHeader = screen.getByTestId("quote-header");
  expect(quoteHeader).toBeVisible();
  // Find the "Tilbud" link by its test ID and click on it
  const offersLink = screen.getByTestId("offers-link");
  fireEvent.click(offersLink);

  // Wait for the component to render and check if the headline is visible
  await waitFor(() => {
    const productOverviewHeader = screen.getByTestId("headline");
    expect(productOverviewHeader).toBeInTheDocument(); // This checks if it's in the DOM
    expect(productOverviewHeader).toBeVisible();
    expect(quoteHeader).not.toBeVisible(); // This checks if it's visible
  });
});
