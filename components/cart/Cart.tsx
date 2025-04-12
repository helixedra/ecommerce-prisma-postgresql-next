"use client";
import { useCart } from "@/context/CartContext";
import React from "react";
import ReactDOM from "react-dom";
import Button from "@/components/shared/Button";
import { RiShoppingCartLine, RiCloseLine } from "react-icons/ri";
import CartContent from "./CartContent";

export default function Cart() {
  const { cart, removeFromCart, cartDialogOpen, toggleCart, updateQuantity } =
    useCart();

  return (
    <>
      {cartDialogOpen &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-50 bg-black/20 bg-opacity-50 flex items-center justify-center"
            role="dialog-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                toggleCart();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                toggleCart();
              }
            }}
            tabIndex={-1}
          >
            <div
              className="bg-white p-4 rounded-3xl shadow-lg min-w-96 max-w-[1000px] w-[90%] relative"
              role="dialog"
              aria-labelledby="cart-title"
              aria-modal="true"
            >
              <button
                className="absolute top-2 right-2 text-black p-4 z-50 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCart();
                }}
                aria-label="Close cart"
              >
                <RiCloseLine size={24} />
              </button>
              <CartContent
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export const CartIndicator = () => {
  const { cart } = useCart();

  if (cart.length === 0) return null;

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-fit min-w-5 px-1 flex items-center justify-center">
      {totalItems}
    </span>
  );
};

export const CartButton = () => {
  const { toggleCart } = useCart();

  return (
    <Button
      onClick={toggleCart}
      title="Open Cart"
      variant="secondary"
      size="md"
      className="relative"
    >
      <RiShoppingCartLine />
      <CartIndicator />
    </Button>
  );
};
