import { useCallback, useEffect, useState } from "react";
import { useBasket } from "../../context/BasketContext";
import BasketItem from "../basket/BasketItem";

function OrderList() {
  const { basketItems } = useBasket();
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePriceUpdate = useCallback((newTotal: number) => {
    setTotalPrice((prevTotal) => prevTotal + newTotal);
  }, []);

  return (
    <>
      <div
        className={`d-flex flex-column ${
          basketItems.length > 6 ? "overflow-auto" : ""
        }`}
        style={{ maxHeight: "80vh" }}
      >
        {basketItems.map((item) => (
          <BasketItem
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            isOnCheckOut={true}
            onPriceUpdate={handlePriceUpdate}
          />
        ))}
      </div>
      <div>
        <div className="fw-bold fs-5">
          Total pris: {totalPrice.toFixed(2)} DKK
        </div>
      </div>
    </>
  );
}

export default OrderList;
