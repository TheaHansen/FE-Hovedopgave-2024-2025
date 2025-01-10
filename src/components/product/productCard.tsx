import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../customCSS/productCard/shortDescription.css";
import "../../customCSS/productCard/cardHeight.css";
import Product from "../product/Product.interfaces";
import StockStatus from "../stockStatus/StockStatus";
import { Link } from "react-router-dom";

function ProductCard({ product }: { product: Product }) {
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <Card className="card text-center" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`/images/${product.imageUrl}`}
          className="product-image"
          data-testid="product-card-image"
        />
        <Card.Body className="card-body-fixed">
          <Card.Title data-testid="product-card-title">
            {product.title}
          </Card.Title>
          <Card.Text
            className="short-description-fixed text-muted small"
            data-testid="product-card-short-description"
          >
            {product.shortDescription}
          </Card.Text>
          <Card.Text data-testid="product-card-price">
            {product.price} DKK
          </Card.Text>
          <StockStatus stockStatusFromProduct={product.stockStatus} />
          <Button variant="dark" data-testid="product-card-button">
            Se mere
          </Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default ProductCard;
