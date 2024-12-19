import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { expect, it, vi } from "vitest";
import mockProducts from "../mockData/product.mock";
import SingleProduct from "../../pages/SingleProduct";
import * as requests from "../../services/requests";
import App from "../../App";
import Product from "../../components/product/Product.interfaces";

/**
 * @vitest-environment jsdom
 */

const mockData: Product[] = mockProducts;

vi.spyOn(requests, "getRequest").mockImplementation((endpoint: string) => {
  if (endpoint === "products") {
    return Promise.resolve(mockData);
  }
  if (endpoint.startsWith("products/")) {
    const id = parseInt(endpoint.split("/")[1], 10);
    return Promise.resolve(mockData.find((p) => p.id === id));
  }
  return Promise.reject(new Error("Endpoint not found"));
});

  it("Render single product page with mock data", async () => {
    render(
    <MemoryRouter initialEntries={[`/product/${mockData[0].id}`]}>
        <Routes>
            <Route
                path="/product/:id"
                element={
                    <SingleProduct
                    endpoint="products"
                    breadcrumbItems={[
                      { label:"Hjem", path: "/"},
                      { label: "Alle produkter", path: "alle-produkter"},
                      { label: "Produkt"}
                    ]}
                    />
                }
            />
      </Routes>
    </MemoryRouter>
  );

  // Wait for the product title to appear in the DOM
  await waitFor(() =>
    expect(screen.getByTestId("single-product-title")).toBeInTheDocument()
  );

  // Assert the product title and other details
  const singleProductTitle = screen.getByTestId("single-product-title");
  expect(singleProductTitle).toBeVisible();
  expect(singleProductTitle).toHaveTextContent(mockData[0].title);

  const singleProductShortDescription = screen.getByTestId("single-product-short-description");
  expect(singleProductShortDescription).toBeVisible();
  expect(singleProductShortDescription).toHaveTextContent(mockData[0].shortDescription);
  
  const singleProductDescription = screen.getByTestId("single-product-description");
  expect(singleProductDescription).toBeVisible();
  expect(singleProductDescription).toHaveTextContent(mockData[0].description);
  
  const singleProductPrice = screen.getByTestId("single-product-price");
  expect(singleProductPrice).toBeVisible();
  expect(singleProductPrice).toHaveTextContent(mockData[0].price.toFixed(2).toString());

  const singleProductStockStatus = screen.getByTestId("product-card-stock-status");
  expect(singleProductStockStatus).toBeVisible();
  expect(singleProductStockStatus).toHaveTextContent("På lager");

  const quantityPicker = screen.getByTestId("quantity-picker");
  expect(quantityPicker).toBeVisible();

  const singleProductButton = screen.getByTestId("single-product-button");
  expect(singleProductButton).toBeVisible();
  expect(singleProductButton).toHaveRole("button");
});

it("navigates to single product from all product", async () => {
  render(
      <MemoryRouter initialEntries={["/alle-produkter"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      const productOverviewHeader = screen.getByTestId("headline");
      expect(productOverviewHeader).toBeInTheDocument();
    });
  
    const product1 = await screen.getAllByTestId("product-card-button")[0];
    expect(product1).toBeInTheDocument();
  
    fireEvent.click(product1);
    
    await waitFor(() => {
      const singleProductTitle = screen.getByTestId("single-product-title");
      expect(singleProductTitle).toBeVisible();
      expect(singleProductTitle).toHaveTextContent(mockData[0].title);
    });
});