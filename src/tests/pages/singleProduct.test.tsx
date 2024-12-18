import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it, vi } from "vitest";
import mockProducts from "../mockData/product.mock";
import SingleProduct from "../../pages/SingleProduct";
import { getRequest } from "../../services/requests";

/**
 * @vitest-environment jsdom
 */

// Mocking the getRequest function
// Mock the getRequest function
vi.mock("../../services/requests", () => ({
    getRequest: vi.fn(),
  }));
  
  const mockData = mockProducts;
  const productId = mockData[0].id;
  
  it("Single product page with mock data", async () => {
    // Mock the API response
    (getRequest as vi.Mock).mockResolvedValueOnce(mockData[0]);

  render(
    <MemoryRouter>
      <SingleProduct
        endpoint="products"
        breadcrumbItems={["Hjem", "Tilbud", "Produkt"]}
      />
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

  console.log("Title: ", mockData[0].title);
});


// import { render, screen, waitFor } from "@testing-library/react"
// import { MemoryRouter } from "react-router-dom"
// import { expect, it, vi } from "vitest"
// import App from "../../App"
// import Product from "../../components/product/Product.interfaces"
// import mockProducts from "../mockData/product.mock"
// import SingleProduct from "../../pages/SingleProduct"
// import * as requests from "../../services/requests";
// /**
//  * @vitest-environment jsdom
//  */


// const mockData: Product[] = mockProducts;
// const productId = mockData[0].id;

// vi.spyOn(requests, "getRequest").mockResolvedValue(mockData[0]);

// it("Single product page with mock data", async () => {
//     render(
//         <MemoryRouter>
//             <SingleProduct
//                 endpoint="products"
//                 breadcrumbItems={["Hjem", "Tilbud", "Produkt"]} />
//         </MemoryRouter>
//     );

   
// await waitFor(() => {expect(screen.getByTestId("single-product-title")).toBeVisible();})
    
//     const singleProductTitle = screen.getByTestId("single-product-title");
//     expect(singleProductTitle).toBeVisible();
//     expect(singleProductTitle).toHaveTextContent(mockData[0].title);
//     console.log("Description: ", mockData[0].title);

//     // const singleProductShortDescription = screen.getByTestId("single-product-short-description");
//     // expect(singleProductShortDescription).toBeVisible();
//     // expect(singleProductShortDescription).toHaveTextContent(mockData[0].shortDescription);

//     // const singleProductDescription = screen.getByTestId("single-product-description");
//     // expect(singleProductDescription).toBeVisible();
//     // expect(singleProductDescription).toHaveTextContent(mockData[0].description);
//     // console.log("Description: ", singleProductDescription);

//     // const singleProductPrice = screen.getByTestId("single-product-price");
//     // expect(singleProductPrice).toBeVisible();
//     // expect(singleProductPrice).toHaveTextContent(mockData[0].price.toString());

// });


// // it("navigates to single product page"), async () => {
// //     render(
// //         <MemoryRouter>
// //             <App />
// //         </MemoryRouter>
// //     );
// // }