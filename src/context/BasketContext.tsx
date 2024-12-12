import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../components/hooks/useLocalStorage";

type BasketProviderProps = {
  children: ReactNode;
};

type BasketItem = {
  id: number;
  quantity: number;
};

type BasketContext = {
  addToBasket: (id: number, quantity: number) => void;
  basketItems: BasketItem[];
  removeFromBasket: (id: number) => void;
  basketQuantity: number;
};

const BasketContext = createContext({} as BasketContext);

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }: BasketProviderProps) {
  const [basketItems, setBasketItems] = useLocalStorage<BasketItem[]>(
    "basket",
    []
  ); //"basket" is an inital value

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
        removeFromBasket,
        basketQuantity,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
