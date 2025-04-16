"use client";

import React from "react";
import { CartItem as CartItemType, useCart } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import EmptyState from "@/components/cart/EmptyState";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import ShippingDetails from "@/components/checkout/ShippingDetails";
import PaymentDetails from "@/components/checkout/PaymentDetails";
import api from "@/services/api";

export default function CheckoutPage() {
  const { cart } = useCart(); // get cart from context
  const formSubmit = (formData: FormData) => {
    // get form data
    const orderDetails = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      shippingAddress: formData.get("shippingAddress"),
      city: formData.get("city"),
      stateProvince: formData.get("stateProvince"),
      zipPostalCode: formData.get("zipPostalCode"),
      country: formData.get("country"),
      phoneNumber: formData.get("phoneNumber"),
      emailAddress: formData.get("emailAddress"),
      orderTotal: formData.get("orderTotal"),
      paymentOption: formData.get("paymentOption"),
      cart: cart,
      userId: 1, // hardcoded for now
    };
    console.log(orderDetails); // for testing
    // validate form data on frontend
    validateForm(orderDetails);
  };

  const validateForm = (orderDetails: any) => {
    // validate form data
    // VALIDATION
    sendDataToServer(orderDetails);
  };

  const sendDataToServer = async (orderDetails: any) => {
    const response = await api("checkout", {
      method: "POST",
      body: JSON.stringify(orderDetails),
    });
    if (response.status === 200) {
      console.log("Order created successfully");
    } else {
      console.error("Failed to create order");
    }
  };
  return (
    <div>
      <div className="py-6">
        <h1>Checkout</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-4 items-start">
          <div className="flex flex-col gap-4">
            <div className="space-y-4 border border-zinc-200 rounded">
              <Cart />
            </div>
            <div className="space-y-4 border border-zinc-200 rounded">
              <form action={formSubmit} id="checkout-form">
                <ShippingDetails />
                <input
                  type="hidden"
                  name="orderTotal"
                  id="orderTotal"
                  value=""
                />
                <input
                  type="hidden"
                  name="paymentOption"
                  id="paymentOption"
                  value=""
                />
              </form>
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
  const [paymentOption, setPaymentOption] = React.useState({
    card: true,
    paypal: false,
  });
  const discountRef = React.useRef<HTMLInputElement>(null);
  const { cart } = useCart();
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };
  const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const discountCode = discountRef.current?.value;
    if (discountCode === "SALE") {
      setDiscountApplied(true);
    } else {
      setDiscountApplied(false);
    }
  };
  const total = calculateTotal();
  const totalWithDiscountWithTax =
    total - (discountApplied ? total * 0.15 : 0) + total * 0.15;

  const handleSubmit = () => {
    // get orderTotalInput and paymentOptionInput
    const orderTotalInput = document.getElementById(
      "orderTotal"
    ) as HTMLInputElement;
    const paymentOptionInput = document.getElementById(
      "paymentOption"
    ) as HTMLInputElement;
    // get the form
    const form = document.getElementById("checkout-form") as HTMLFormElement;
    // Set the order total and payment option values
    if (orderTotalInput) {
      orderTotalInput.value = totalWithDiscountWithTax
        .toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })
        .replace("$", "");
    }
    // not flexible for now
    if (paymentOptionInput) {
      paymentOptionInput.value = paymentOption.card ? "card" : "paypal";
    }
    // Submit the form
    form.requestSubmit();
  };

  return (
    <div className="space-y-4 w-full">
      <div className="space-y-4 p-6 border border-zinc-200 rounded-md">
        <div className="font-semibold mb-8">
          <h3>Order Summary</h3>
        </div>
        <div className="w-full">
          <div className="text-xl justify-end space-y-4">
            <div className="text-zinc-500 flex gap-2 items-end mb-8">
              <Input
                label="Discount code"
                className="w-full"
                ref={discountRef}
              />
              <Button onClick={handleDiscount} className="w-1/3">
                Apply
              </Button>
            </div>
            <SummaryItem label="Subtotal" value={total} />
            <SummaryItem
              label="Discount"
              value={discountApplied ? total * 0.15 : 0}
            />
            <SummaryItem label="Shipping" value={0} />
            <SummaryItem label="Tax" value={total * 0.15} />
            <SummaryTotal label="Total" value={totalWithDiscountWithTax} />
          </div>
        </div>
      </div>
      <div className="space-y-4 border border-zinc-200 rounded">
        <PaymentDetails
          paymentOption={paymentOption}
          setPaymentOption={setPaymentOption}
        />
      </div>
      <div className="w-full">
        <Button
          size="lg"
          variant="primary"
          className="w-full py-8"
          type="submit"
          onClick={handleSubmit}
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
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
    <div className="w-full flex justify-between items-center border-t-2 border-dashed border-zinc-200 pt-6">
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
