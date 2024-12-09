import { ChangeEvent, useEffect, useState } from "react";
import "../customCSS/quantityPicker.css"

function QuantityPicker() {
  const [quantity, setQuantity] = useState<number | string>(1);

  useEffect(() => {
    console.log("Updated quantity type:", typeof quantity);
  }, [quantity]);
  
  const increment = () => {
    setQuantity((prevQuantity) => typeof prevQuantity === "number" ? prevQuantity + 1 : 1);
  };

  const decrement = () => {
    if (typeof quantity === "number" && quantity > 1) {
      setQuantity(quantity- 1);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setQuantity(value === "" ? "" : parseInt(value, 10));
    } else {
      console.log("Invalid input, only numbers allowed");
    }

  }

  const handleBlur = () => {
    if (quantity === "" || (typeof quantity === "string" && isNaN(Number(quantity))) || Number(quantity) <= 0) {
      setQuantity(1)
    } else {
      setQuantity(Number(quantity));
    }
  }

  return (
    <div className="quantity-picker gap-2">
      <button onClick={decrement} className="quantity-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
        </svg>
    </button>
    <input type="text" value={quantity} onChange={handleInputChange} onBlur={handleBlur} className="quantity-input" />
      <button onClick={increment} className="quantity-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
        </svg>
      </button>
    </div>
  );
}

export default QuantityPicker;