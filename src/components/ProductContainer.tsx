import { useEffect, useState } from "react";
import Product from "./Product.interfaces";
import { getRequest } from "../services/requests";
import ProductCard from "./ProductCard";

function ProductContainer(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        let endpoint = "products/tilbud"
        const fetchProducts = async () => {
            endpoint = "products/tilbud";
        }
    
        getRequest(endpoint).then((data) => {
            if (data) {
              setProducts(data);
            }
          })

          fetchProducts();
        }, [])

        return (
            <div>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        )
}

export default ProductContainer;