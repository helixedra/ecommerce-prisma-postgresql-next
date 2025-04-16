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
      <div className="py-6">
        <h1>Checkout</h1>
      </div>
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
  const total = calculateTotal();
  return (
    <>
      <div className="space-y-4 p-6 border border-zinc-200 rounded-xl">
        <div>
          <h3>Order Summary</h3>
        </div>
        <div className="w-full">
          <div className="text-xl justify-end space-y-4">
            <div className="text-zinc-500 flex gap-2 items-end mb-8">
              <Input label="Discount code" className="w-full" />
              <Button>Apply</Button>
            </div>
            <SummaryItem label="Subtotal" value={total} />
            <SummaryItem
              label="Discount"
              value={discountApplied ? total * 0.15 : 0}
            />
            <SummaryItem label="Shipping" value={0} />
            <SummaryItem label="Tax" value={total * 0.15} />
            <SummaryTotal
              label="Total"
              value={
                total - (discountApplied ? total * 0.15 : 0) + total * 0.15
              }
            />
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

export function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string | number;
}): React.JSX.Element {
  return (
    <div className="w-full flex text-base justify-between items-center">
      <div>{label}</div>
      <div>
        {value !== undefined && value !== null
          ? value.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          : "0"}
      </div>
    </div>
  );
}

export function SummaryTotal({
  label,
  value,
}: {
  label: string;
  value: string | number;
}): React.JSX.Element {
  return (
    <div className="w-full flex justify-between items-center border-t border-zinc-200 pt-6">
      <div className="text-2xl">Total</div>
      <div className="text-2xl font-semibold text-zinc-900">
        {value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
    </div>
  );
}
