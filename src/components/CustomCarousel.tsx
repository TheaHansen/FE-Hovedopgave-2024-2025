import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import Product from "./product/Product.interfaces";
import { getRequest } from "../services/requests";
import ToPageButton from "./ToPageButton";
import "../customCSS/carousel.css";

//Made by Thea
interface CustomCarouselProps {
  endpoint: string;
}

function CustomCarousel({ endpoint }: CustomCarouselProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getRequest(endpoint).then((data) => {
      if (data) {
        setProducts(data);
      }
    });
  }, [endpoint]);

  return (
    <div className="p-3 d-flex justify-content-center mb-3">
      <Carousel
        data-bs-theme="dark"
        style={{ width: 800, height: 503 }}
        className="border carousel-border"
      >
        {products.map((product) => (
          <Carousel.Item>
            <img
              src={require(`../images/${product.imageUrl}`)}
              className="object-fit-cover"
              width="800"
              height="500"
              alt="Product on sale"
            />
            <Carousel.Caption>
              <h3>{product.title}</h3>
              <p>{product.shortDescription}</p>
              <p>{product.price} DKK</p>
              <ToPageButton
                children="Køb her!"
                to={`/products/${product.id}`}
              />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
