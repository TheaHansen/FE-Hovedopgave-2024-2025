import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getRequest } from "../services/requests";
import CustomBreadcrumb from "../components/Breadcrumb";
import Product from "../components/product/Product.interfaces";
import { useEffect, useState } from "react";
import StockStatus from "../components/stockStatus/StockStatus";
import QuantityPicker from "../components/QuantityPicker";
import { useBasket } from "../context/BasketContext";

interface SingleProductProps {
  endpoint: string;
  breadcrumbItems: string[];
}

function SingleProduct({ endpoint, breadcrumbItems }: SingleProductProps) {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const { addToBasket } = useBasket();

  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      if (isNaN(productId)) {
        console.error("Invalid product ID");
        return;
      }

      getRequest(`products/${productId}`)
        .then((data) => setProduct(data))
        .catch((error) => console.error("Failed to fetch product: ", error));
    } else {
      console.error("Product ID is missing");
    }
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="container mt-4 mb-4">
      <div className="row g-5">
        <div className="col-md-6 pr-md-5">
          <img
            src={require(`../images/${product.imageUrl}`)}
            alt={product.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <CustomBreadcrumb items={breadcrumbItems} />
          <h1>{product.title}</h1>
          <h6 className="mb-2 text-muted small">{product.shortDescription}</h6>
          <h6 className="small mb-4">{product.description}</h6>
          <h6>{product.price.toFixed(2)} DKK</h6>
          <h6 className="d-flex align-items-center mt-2 small">
            Lagerstatus:{" "}
            <StockStatus stockStatusFromProduct={product.stockStatus} />{" "}
          </h6>
          <div className="d-flex align-items-center mt-4 gap-3">
            <QuantityPicker quantity={quantity} setQuantity={setQuantity} />
            <Button
              style={{ zIndex: 1000 }}
              variant={
                product.stockStatus === "NotInStock" ? "secondary" : "dark"
              }
              onClick={() => addToBasket(product.id, quantity)}
              disabled={product.stockStatus === "OutOfStock"}
            >
              Tilføj til kurv
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
