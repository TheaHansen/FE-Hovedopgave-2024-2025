import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "../images/IMG_1618.jpg";
import "../customCSS/productCard/basketButton.css";
import { useEffect, useState } from "react";
import { getRequest } from "../services/requests";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

//Together
function ProductCard({ productId }: { productId: number }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const endpoint = `products/${productId}`;

    console.log("Product image " + product?.imageUrl);

    getRequest(endpoint).then((data) => {
      if (data) {
        setProduct(data);
      }
    });
  }, [productId, product?.imageUrl]);

  if (!product) {
    return <p>Loading..</p>;
  }

  return (
    <Card className="card text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require(`../images/${product.imageUrl}`)} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price} DKK</Card.Text>
        <Button className="basket-btn">Tilføj til kurv</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
