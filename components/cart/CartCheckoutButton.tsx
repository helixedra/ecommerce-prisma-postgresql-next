"use client";
import Button from "../shared/Button";
import Input from "../shared/Input";
import React from "react";
import { redirect } from "next/navigation";

type CartCheckoutButtonProps = {
  discountApplied?: boolean;
  setDiscountApplied: (value: boolean) => void;
  toggleCart?: () => void;
};

export default function CartCheckoutButton({
  discountApplied,
  setDiscountApplied,
  toggleCart,
}: CartCheckoutButtonProps) {
  const [discountForm, setDiscountForm] = React.useState(false);

  const handleApplyDiscount = () => {
    setDiscountApplied(true); // TODO: Apply discount logic trigger
    setDiscountForm(false);
  };

  const handleCheckout = () => {
    toggleCart?.();
    redirect("/checkout");
  };

  // const router = useRouter();

  return (
    <div className="flex gap-6 items-center">
      <Button size="lg" variant="primary" onClick={handleCheckout}>
        Checkout
      </Button>
      <div className="flex border-l pl-6 border-zinc-200 gap-4">
        {!discountForm ? (
          <Button
            size="lg"
            variant="ghost"
            onClick={() => handleApplyDiscount()}
          >
            Discount Code
          </Button>
        ) : (
          <>
            <Input size="lg" className="w-46" />
            <Button size="lg" onClick={() => setDiscountForm((prev) => !prev)}>
              Apply
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
