import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../customCSS/productCard/shortDescription.css";
import "../../customCSS/productCard/cardHeight.css";
import Product from "../product/Product.interfaces";
import StockStatus from "../stockStatus/StockStatus";
import { Link } from "react-router-dom";

//Together
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
        />
        <Card.Body className="card-body-fixed">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text className="short-description-fixed text-muted small">
            {product.shortDescription}
          </Card.Text>
          <Card.Text>{product.price} DKK</Card.Text>
          <StockStatus stockStatusFromProduct={product.stockStatus} />
          <Button variant="dark">Se mere</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default ProductCard;
