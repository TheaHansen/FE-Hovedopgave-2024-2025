import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { expect, it, vi } from "vitest";
import mockProducts from "../mockData/product.mock";
import SingleProduct from "../../pages/SingleProduct";
import * as requests from "../../services/requests";
import App from "../../App";
import ProductOverview from "../../pages/ProductOverview";
import Product from "../../components/product/Product.interfaces";

/**
 * @vitest-environment jsdom
 */

const mockData: Product[] = mockProducts;
//vi.spyOn(requests, "getRequest").mockResolvedValue(mockData);

  it("Render single product page with mock data", async () => {
    vi.spyOn(requests, "getRequest").mockResolvedValue(mockData[0]);
    render(
    <MemoryRouter initialEntries={[`/product/${mockData[0].id}`]}>
        <Routes>
            <Route
                path="/product/:id"
                element={
                    <SingleProduct
                    endpoint="products"
                    breadcrumbItems={["Hjem", "Tilbud", "Produkt"]}
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
  vi.spyOn(requests, "getRequest").mockResolvedValue(mockData);  
  render(
      <MemoryRouter initialEntries={["/products"]}>
        <Routes>
          <Route
            path="/products"
            element={<ProductOverview headline="Tilbud" endpoint="products" />}
          />
          <Route
            path="/products/:id"
            element={<SingleProduct
                endpoint="products"
                breadcrumbItems={["Hjem", "Tilbud", "Produkt"]}
              />} 
          />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      const productOverviewHeader = screen.getByTestId("headline");
      expect(productOverviewHeader).toBeInTheDocument();
    });
  
    const product1 = await screen.getByText("Tandbørste");
    expect(product1).toBeInTheDocument();
  
    fireEvent.click(product1);
    
    await waitFor(() => {
      expect(window.location.pathname).toBe("/product/1");
    });
});