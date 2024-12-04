import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App"; // Adjust path to your App component

test("navigates from Home to About page", async () => {
  render(<App />);

  // Assert the Home page is initially rendered
  expect(screen.getByText(/Welcome to the Home Page/i)).toBeInTheDocument();

  // Click on the "About" link
  const aboutLink = screen.getByRole("link", { name: /about/i });
  userEvent.click(aboutLink);

  // Assert the About page is now rendered
  expect(await screen.findByText(/About Us/i)).toBeInTheDocument();

  // Ensure Home page content is no longer visible
  expect(
    screen.queryByText(/Welcome to the Home Page/i)
  ).not.toBeInTheDocument();
});
