"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import EmptyState from "@/components/cart/EmptyState";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import ShippingDetails from "@/components/checkout/ShippingDetails";
import PaymentDetails from "@/components/checkout/PaymentDetails";

export default function CheckoutPage() {
  return (
    <div>
      <div>Checkout Page</div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-6 items-start">
          <div className="flex flex-col gap-4">
            <div className="space-y-4 border border-zinc-200 rounded-xl">
              <Cart />
            </div>
            <div className="space-y-4 border border-zinc-200 rounded-xl">
              <ShippingDetails />
            </div>
            <div className="space-y-4 border border-zinc-200 rounded-xl">
              <PaymentDetails />
            </div>
          </div>
          <div className="w-1/3 sticky top-24">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  return (
    <>
      {cart.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              cart={cart}
            />
          ))}
        </>
      )}
    </>
  );
}

export function OrderSummary() {
  const [discountApplied, setDiscountApplied] = React.useState(false);
  const { cart } = useCart();
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };
  return (
    <>
      <div className="space-y-4 border border-zinc-200 rounded-xl ">
        <div>Order Summary</div>
        <div className="p-6 flex justify-between items-center">
          <div className="text-xl justify-end">
            <div>Discount Code</div>
            <div className="text-zinc-500 text-right">
              <Input className="w-46" />
              <Button>Apply</Button>
            </div>
            <div>Subtotal: 1234</div>
            <div>Shipping: 1234</div>
            <div>Tax: 1234</div>
            <div>Discount: 1234</div>
            <div className="text-zinc-500 text-right">Total</div>
            <div className="text-2xl font-bold text-zinc-900">
              {calculateTotal().toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <Button size="lg" variant="primary" className="w-full">
          Place Order
        </Button>
      </div>
    </>
  );
}
