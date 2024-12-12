import { useState, useEffect, useRef } from "react";
import { Badge, Button, Dropdown } from "react-bootstrap";
import "../../customCSS/navbar/icon.css";
import "../../customCSS/navbar/basketDropdown.css";
import { useBasket } from "../../context/BasketContext";
import BasketItem from "./BasketItem";

function BasketDropdown() {
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { basketItems, basketQuantity } = useBasket();

  const handleToggle = (isOpen: boolean) => {
    setIsExpanded(isOpen);
  };

  useEffect(() => {
    if (isExpanded && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        dropdownRef.current.style.left = "auto";
        dropdownRef.current.style.right = "0";
      }
    }
  }, [isExpanded]);

  return (
    <div>
      <Dropdown
        className="basket-dropdown"
        show={isExpanded}
        onToggle={handleToggle}
      >
        <button className="icon-btn" onClick={() => setIsExpanded(!isExpanded)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
          {basketQuantity > 0 && (
            <Badge
              bg="secondary"
              style={{
                position: "absolute",
                bottom: 10,
                right: 0,
                transform: "translate(25%, -25%)",
                height: "18px",
                maxWidth: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {basketQuantity < 100 ? basketQuantity : "99+"}
            </Badge>
          )}
        </button>
        {isExpanded && (
          <Dropdown.Menu
            show={isExpanded}
            className="custom-dropdown-menu"
            ref={dropdownRef}
          >
            {basketItems.length > 0 ? (
              basketItems
                .slice(0, 4)
                .map((item) => (
                  <BasketItem
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                  />
                ))
            ) : (
              <div>Du har ingen varer i din kurv.</div>
            )}
            {/* If there are't any item in the basket, it won't show the button. If there are more than 4 items added, it will change the text */}
            {basketItems.length === 0 ? null : basketItems.length > 4 ? (
              <Button variant="dark" className="w-100">
                Se resten af kurven
              </Button>
            ) : (
              <Button variant="dark" className="w-100">
                Gå til kurv
              </Button>
            )}
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
}

export default BasketDropdown;
