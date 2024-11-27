import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../customCSS/productCard/basketButton.css";
import Product from "./Product.interfaces";
import StockStatus from "./stockStatus/StockStatus";

//Together
function ProductCard({ product }: { product: Product }) {
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Card className="card text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require(`../images/${product.imageUrl}`)} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price} DKK</Card.Text>
        <StockStatus stockStatusFromProduct={product.stockStatus} />
        <Button className="basket-btn">Tilføj til kurv</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
