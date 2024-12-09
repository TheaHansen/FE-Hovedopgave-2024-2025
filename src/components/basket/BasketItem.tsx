import { useEffect, useState } from "react";
import { useBasket } from "../../context/BasketContext";
import { getRequest } from "../../services/requests"; // Assuming getRequest is used to fetch product data.

type BasketItemProps = {
  id: number;
  quantity: number;
};

type Product = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
};

function BasketItem({ id, quantity }: BasketItemProps) {
  const { removeFromBasket } = useBasket();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Fetch product details based on the ID
    getRequest(`products/${id}`)
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Failed to fetch product details:", error)
      );
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="basket-item d-flex align-items-center mb-3">
      <img
        src={require(`../../images/${product.imageUrl}`)}
        alt={product.title}
        className="basket-item-image"
        style={{ width: "50px", height: "50px", objectFit: "cover" }}
      />
      <div className="basket-item-info ms-3">
        <h6 className="mb-1">{product.title}</h6>
        <p className="mb-1 text-muted small">
          {quantity} x {product.price.toFixed(2)} DKK
        </p>
        <p className="mb-0 fw-bold">
          Total: {(quantity * product.price).toFixed(2)} DKK
        </p>
      </div>
      <button
        onClick={() => removeFromBasket(id)}
        className="btn btn-sm btn-outline-danger ms-auto"
      >
        Remove
      </button>
    </div>
  );
}

export default BasketItem;
