import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import ProductCard from "../../components/product/productCard";
import mockProducts from "../mockData/product.mock";
import Product from "../../components/product/Product.interfaces";
import { MemoryRouter } from "react-router-dom";

/**
 * @vitest-environment jsdom
 */

const mockData: Product[] = mockProducts;

it("ProductCard with mock data", async () => {
  render(
    <MemoryRouter>
      <ProductCard product={mockData[0]} />
    </MemoryRouter>
  );
  const productCardTitle = screen.getByTestId("product-card-title");
  expect(productCardTitle).toBeVisible();
  expect(productCardTitle).toHaveTextContent(mockData[0].title);

  const productCardImg = screen.getByTestId("product-card-image");
  expect(productCardImg).toBeVisible();
  expect(productCardImg).toHaveAttribute(
    "src",
    `/images/${mockData[0].imageUrl}`
  );

  const productCardShortDescription = screen.getByTestId(
    "product-card-short-description"
  );
  expect(productCardShortDescription).toBeVisible();
  expect(productCardShortDescription).toHaveTextContent(
    mockData[0].shortDescription
  );

  const productCardPrice = screen.getByTestId("product-card-price");
  expect(productCardPrice).toBeVisible();
  expect(productCardPrice).toHaveTextContent(`${mockData[0].price} DKK`);

  const productCardStockStatus = screen.getByTestId(
    "product-card-stock-status"
  );
  expect(productCardStockStatus).toBeVisible();
  expect(productCardStockStatus).toHaveTextContent("På lager");

  const productCardButton = screen.getByTestId("product-card-button");
  expect(productCardButton).toBeVisible();
  expect(productCardButton).toHaveRole("button");
});
