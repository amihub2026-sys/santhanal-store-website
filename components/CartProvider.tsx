"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type CartItem = {
  number: string;
  tamil: string;
  name: string;
  description: string;
  image: string;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: any) => void;
  increaseQuantity: (number: string) => void;
  decreaseQuantity: (number: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: any) => {
    setCartItems((current) => {
      const alreadyAdded = current.some(
        (item) => item.number === product.number
      );

      if (alreadyAdded) {
        return current;
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (number: string) => {
    setCartItems((current) =>
      current.map((item) =>
        item.number === number
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (number: string) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.number === number
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}