import { createContext, ReactNode, useContext, useState } from "react";

type BasketProviderProps = {
  children: ReactNode;
};

type BasketItem = {
  id: number;
  quantity: number;
};

type BasketContext = {
  openBasket: () => void;
  closeBasket: () => void;
  addToBasket: (id: number, quantity: number) => void;
  basketQuantity: number;
  basketItems: BasketItem[];
  removeFromBasket: (id: number) => void;
};

const BasketContext = createContext({} as BasketContext);

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }: BasketProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const basketQuantity = basketItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0 //0 is default value
  );

  function addToBasket(id: number, quantity: number) {
    setBasketItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...currentItems, { id, quantity }];
      }
    });
  }

  const openBasket = () => setIsOpen(true);
  const closeBasket = () => setIsOpen(false);

  function removeFromBasket(id: number) {
    setBasketItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <BasketContext.Provider
      value={{
        addToBasket,
        basketItems,
        basketQuantity,
        closeBasket,
        openBasket,
        removeFromBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
