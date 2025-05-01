"use client";
import React from "react";
import { CartItem as CartItemType, useCart } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import EmptyState from "@/components/cart/EmptyState";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import ShippingDetails from "@/components/checkout/ShippingDetails";
import PaymentDetails from "@/components/checkout/PaymentDetails";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormSchema,
  formSchema,
  orderSchema,
} from "@/shared/schemas/orderSchema";

export default function CheckoutPage() {
  const userId = 1; // TODO: get user id from session
  const { cart, clearCart } = useCart();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    // Combine data and cart
    const orderDetails = {
      ...data,
      cart,
      userId,
    };

    try {
      // Validate order
      const validatedOrder = orderSchema.parse(orderDetails);
      // TODO: handle payment
      const response = await axios.post("/api/checkout", validatedOrder);
      clearCart(); // Clear cart
      reset(); // Reset form
      // TODO:redirect to order confirmation page
    } catch (error) {
      console.error("Error validating order:", error);
    }
  };

  return (
    <div>
      <form method="post" onSubmit={(e) => e.preventDefault()}>
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
                <ShippingDetails register={register} errors={errors} />
                <input type="hidden" {...register("orderTotal")} />
                <input type="hidden" {...register("paymentOption")} />
              </div>
            </div>
            <div className="w-1/3 sticky top-24">
              <OrderSummary
                onSubmit={handleSubmit(onSubmit)}
                setValue={setValue}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
// Cart component
export function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  return cart.length === 0 ? (
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
  );
}

// Order summary component
export function OrderSummary({
  onSubmit,
  setValue,
}: {
  onSubmit: () => void;
  setValue: (name: keyof FormSchema, value: any) => void;
}) {
  const [discountApplied, setDiscountApplied] = React.useState(false);
  const [paymentOption, setPaymentOption] = React.useState({
    card: true,
    paypal: false,
  });
  const discountRef = React.useRef<HTMLInputElement>(null);
  const { cart } = useCart();

  const total = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );
  const discount = discountApplied ? total * 0.15 : 0;
  const tax = total * 0.15;
  const totalWithDiscountWithTax = total - discount + tax;

  const handleDiscount = () => {
    const code = discountRef.current?.value;
    setDiscountApplied(code === "SALE");
  };

  const handleFormSubmit = () => {
    // Set data to react-hook-form
    setValue("orderTotal", totalWithDiscountWithTax.toFixed(2)); // Append order total
    setValue("paymentOption", paymentOption.card ? "card" : "paypal"); // Append payment option
    onSubmit(); // Validation + onSubmit
  };

  return (
    <div className="space-y-4 w-full">
      <div className="space-y-4 p-6 border border-zinc-200 rounded-md">
        <div className="font-semibold mb-8">
          <h3>Order Summary</h3>
        </div>
        <div className="w-full text-xl space-y-4">
          <div className="text-zinc-500 flex gap-2 items-end mb-8">
            <Input label="Discount code" className="w-full" ref={discountRef} />
            <Button onClick={handleDiscount} className="w-1/3">
              Apply
            </Button>
          </div>
          <SummaryItem label="Subtotal" value={total} />
          <SummaryItem label="Discount" value={discount} />
          <SummaryItem label="Shipping" value={0} />
          <SummaryItem label="Tax" value={tax} />
          <SummaryTotal label="Total" value={totalWithDiscountWithTax} />
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
          onClick={handleFormSubmit}
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
}

// Summary item component
export function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="w-full flex text-base justify-between items-center">
      <div>{label}</div>
      <div>
        {value !== undefined && value !== null
          ? Number(value).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          : "$0.00"}
      </div>
    </div>
  );
}

// Summary total component
export function SummaryTotal({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="w-full flex justify-between items-center border-t-2 border-dashed border-zinc-200 pt-6">
      <div className="text-2xl">{label}</div>
      <div className="text-2xl font-semibold text-zinc-900">
        {Number(value).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
    </div>
  );
}
