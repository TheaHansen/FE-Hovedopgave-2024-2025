import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../customCSS/productCard/basketButton.css";
import Product from "./Product.interfaces";

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
        <Card.Text className="d-flex justify-content-center align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="9"
            fill="currentColor"
            className="bi bi-circle-fill mt-1 me-1 align-self-center"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
          <div>På lager</div>
        </Card.Text>
        <Button className="basket-btn">Tilføj til kurv</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
