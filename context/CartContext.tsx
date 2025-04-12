"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product } from "@/types/Product.type";

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartDialogOpen: boolean;
  toggleCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartDialogOpen, setCartDialogOpen] = useState(false);

  const toggleCart = () => setCartDialogOpen((prev) => !prev);

  //save cart to local storage
  useEffect(() => {
    const initializeCart = async () => {
      const savedCart = localStorage.getItem("cart");
      const savedCartTimestamp = localStorage.getItem("cartTimestamp");
      const currentTime = Date.now();
      const cartExpirationTime = 1000 * 60 * 60 * 24 * 7; // 1 week
      const cartInvalidationTime = 1000 * 60 * 60; // 1 hour

      if (savedCart && savedCartTimestamp) {
        let parsedCart;
        try {
          parsedCart = JSON.parse(savedCart);
        } catch (error) {
          console.error("Failed to parse saved cart:", error);
          clearCart();
          return;
        }
        const savedCartTimestampMs = parseInt(savedCartTimestamp);
        const timeDifference = currentTime - savedCartTimestampMs;

        if (isCartExpired(savedCartTimestampMs, cartExpirationTime)) {
          clearCart();
        } else if (timeDifference > cartInvalidationTime) {
          await validateAndUpdateCart(parsedCart);
        } else {
          setCart(parsedCart);
        }
      }
    };

    initializeCart();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartTimestamp", Date.now().toString());
  }, [cart]);

  const isCartExpired = (timestamp: number, expirationTime: number) =>
    Date.now() - timestamp > expirationTime;

  //add to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item: CartItem) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // update quantity
  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item: CartItem) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // remove item from cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item: CartItem) => item.id !== id));
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // validate and update cart from database
  const validateAndUpdateCart = async (savedCart: CartItem[]) => {
    try {
      const response = await fetch("/api/cart/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart: savedCart }),
      });

      if (!response.ok) {
        throw new Error("Failed to validate cart");
      }

      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error("Error validating cart:", error);
      setCart([]);
    }
  };

  return (
    <CartContext.Provider
      value={
        {
          cart,
          addToCart,
          removeFromCart,
          clearCart,
          cartDialogOpen,
          toggleCart,
          updateQuantity,
        } as CartContextType
      }
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
