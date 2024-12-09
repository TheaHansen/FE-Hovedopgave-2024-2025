import { createContext, ReactNode, useContext, useState } from "react";

type BasketProviderProps = {
  children: ReactNode;
};

type BasketItem = {
  id: number;
  quantity: number;
};

type BasketContext = {
  addToBasket: (id: number, quantity: number) => void;
};

const BasketContext = createContext({} as BasketContext);

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }: BasketProviderProps) {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  function addToBasket(id: number, quantity: number) {
    setBasketItems((currentItems) => {
      return [...currentItems, { id, quantity: quantity }];
    });
  }

  //   function removeFromBasket(id: number) {
  //     setBasketItems((currentItems) => {
  //       return currentItems.filter((item) => item.id !== id);
  //     });
  //   }

  return (
    <BasketContext.Provider
      value={{
        addToBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
