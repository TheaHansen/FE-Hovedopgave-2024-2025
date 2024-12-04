import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("./services/requests", () => ({
  getRequest: jest.fn().mockResolvedValue([
    {
      id: 1,
      articleNumber: "123a",
      title: "Beni",
      shortDescription: "Lille des",
      description: "Mega lang text",
      price: 12,
      imageUrl: "IMG_1618.jpg",
      inCarousel: true,
      labels: [],
      stockStatus: "InStock",
    },
    {
      id: 2,
      articleNumber: "123b",
      title: "Beni2",
      shortDescription: " ",
      description: "Mega lang text",
      price: 13,
      imageUrl: "istockphoto.jpg",
      inCarousel: true,
      labels: [],
      stockStatus: "OutOfStock",
    },
  ]),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("Navigating from Frontpage to Tilbud-page", async () => {
  await act(async () => {
    render(<App />);
  });

  // Wait for the quote-header element to appear and assert its presence
  const quoteHeaderElement = await screen.findByTestId("quote-header");
  console.log(quoteHeaderElement); // Log to inspect

  // Ensure that quoteHeaderElement is an HTMLElement (it should be if it's rendered properly)
  if (!(quoteHeaderElement instanceof HTMLElement)) {
    throw new Error("quoteHeaderElement is not an HTMLElement");
  }

  // Ensure that quoteHeaderElement is in the document
  expect(quoteHeaderElement).toBeInTheDocument();

  // Simulate user clicking the offers button
  const offersButton = screen.getByTestId("offers-link");
  userEvent.click(offersButton);

  // Wait for product-card to appear after navigation
  const productCard = await screen.findByTestId("product-card");
  expect(productCard).toBeInTheDocument();
});
