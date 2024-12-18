import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { expect, it } from "vitest"
import App from "../../App"
import Product from "../../components/product/Product.interfaces"
import mockProducts from "../mockData/product.mock"
import SingleProduct from "../../pages/SingleProduct"

/**
 * @vitest-environment jsdom
 */

const mockData: Product[] = mockProducts;
const productId = mockData[0].id;

it("Single product page with mock data"), async () => {
    render(
        <MemoryRouter>
            <SingleProduct
                endpoint="products"
                breadcrumbItems={["Hjem", "Tilbud", "Produkt"]} />
        </MemoryRouter>
    );

   

    const singleProductTitle = screen.getByTestId("single-product-title");
    expect(singleProductTitle).toBeVisible();
    expect(singleProductTitle).toHaveTextContent(mockData[0].title);
    console.log("Description: ", mockData[0].title);

    const singleProductShortDescription = screen.getByTestId("single-product-short-description");
    expect(singleProductShortDescription).toBeVisible();
    expect(singleProductShortDescription).toHaveTextContent(mockData[0].shortDescription);

    const singleProductDescription = screen.getByTestId("single-product-description");
    expect(singleProductDescription).toBeVisible();
    expect(singleProductDescription).toHaveTextContent("lala");
    console.log("Description: ", singleProductDescription);

    const singleProductPrice = screen.getByTestId("single-product-price");
    expect(singleProductPrice).toBeVisible();
    expect(singleProductPrice).toHaveTextContent(mockData[0].title);

}


// it("navigates to single product page"), async () => {
//     render(
//         <MemoryRouter>
//             <App />
//         </MemoryRouter>
//     );
// }