"use client";
import React from "react";
import { CartItem as CartItemType } from "@/context/CartContext";
import CartItem from "./CartItem";
import EmptyState from "./EmptyState";
import Button from "../shared/Button";
import Input from "../shared/Input";

type CartContentProps = {
  cart: CartItemType[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
};

export default function CartContent({
  cart,
  removeFromCart,
  updateQuantity,
}: CartContentProps) {
  const [discountForm, setDiscountForm] = React.useState(false);
  const [discountApplied, setDiscountApplied] = React.useState(false);

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  return (
    <div>
      <div id="cart-title" className="text-2xl text-zinc-900 py-3 mb-4 ml-4">
        Shopping Cart
      </div>
      {cart.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4 border border-zinc-200 rounded-xl">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              cart={cart}
            />
          ))}
          <div className="p-6 flex justify-between items-center border-t border-zinc-200">
            <div className="flex gap-6 items-center">
              <Button size="lg" variant="primary">
                Checkout
              </Button>
              <div className="flex border-l pl-6 border-zinc-200 gap-4">
                {!discountForm ? (
                  <Button
                    size="lg"
                    variant="ghost"
                    onClick={() => setDiscountForm((prev) => !prev)}
                  >
                    Discount Code
                  </Button>
                ) : (
                  <>
                    <Input size="lg" className="w-46" />
                    <Button
                      size="lg"
                      onClick={() => setDiscountForm((prev) => !prev)}
                    >
                      Apply
                    </Button>
                  </>
                )}
              </div>
            </div>

            <div className="text-xl justify-end">
              <div className=" text-zinc-500 text-right">Total</div>
              <div className="text-2xl font-bold text-zinc-900">
                {calculateTotal().toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
