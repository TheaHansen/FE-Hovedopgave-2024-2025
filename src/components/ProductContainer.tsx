import { useEffect, useState } from "react";
import Product from "./Product.interfaces";
import { getRequest } from "../services/requests";
import ProductCard from "./productCard";

//Together
interface ProductContainerProps {
  endpoint: string;
}

function ProductContainer({ endpoint }: ProductContainerProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getRequest(endpoint).then((data) => {
      if (data) {
        setProducts(data);
      }
    });
  }, [endpoint]);

  return (
    <div className="container pb-3">
      <div className="row row-cols-4 g-5">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;
