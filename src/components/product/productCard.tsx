import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../customCSS/productCard/shortDescription.css";
import Product from "../product/Product.interfaces";
import StockStatus from "../stockStatus/StockStatus";

//Together
function ProductCard({ product }: { product: Product }) {
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Card
      className="card text-center"
      style={{ width: "18rem" }}
      data-testid="product-card"
    >
      <Card.Img
        variant="top"
        src={require(`../../images/${product.imageUrl}`)}
      />
      <Card.Body className="card-body-fixed">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="short-description-fixed text-muted small">
          {product.shortDescription}
        </Card.Text>
        <Card.Text>{product.price} DKK</Card.Text>
        <StockStatus stockStatusFromProduct={product.stockStatus} />
        <Button variant="dark">Tilføj til kurv</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
