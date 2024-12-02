import Carousel from "react-bootstrap/Carousel";
import image from "../images/IMG_1618.jpg";
import { useEffect, useState } from "react";
import Product from "./product/Product.interfaces";
import { getRequest } from "../services/requests";

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
    <div className="p-3 d-flex justify-content-center">
      <Carousel style={{ width: 800, height: 500 }}>
        {products.map((product) => (
          <Carousel.Item>
            <img src={image} width="800" height="500" />
            <Carousel.Caption>
              <h3>{product.title}</h3>
              <p>{product.shortDescription}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
