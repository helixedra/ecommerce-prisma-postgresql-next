"use client";
import React from "react";
import Input from "@/components/shared/Input";
import Button from "../shared/Button";
import { RiBankCardFill, RiPaypalFill } from "react-icons/ri";
import Image from "next/image";

type PaymentOptions = {
  card: boolean;
  paypal: boolean;
};

export default function PaymentDetails({
  paymentOption,
  setPaymentOption,
}: {
  paymentOption: PaymentOptions;
  setPaymentOption: (option: PaymentOptions) => void;
}) {
  const handlePaymentOptionChange = (option: string) => {
    setPaymentOption({
      card: option === "card",
      paypal: option === "paypal",
    });
  };

  return (
    <div className="p-6 space-y-8">
      {/* <div>
        <h3 className="font-semibold mb-8">Payment Details</h3>
      </div> */}
      <div className="flex gap-4">
        <Button
          onClick={() => handlePaymentOptionChange("card")}
          variant={paymentOption.card ? "primary" : "secondary"}
          className="flex items-center gap-2 w-full"
        >
          <RiBankCardFill />
          Card
        </Button>
        <Button
          onClick={() => handlePaymentOptionChange("paypal")}
          variant={paymentOption.paypal ? "primary" : "secondary"}
          className="flex items-center gap-2 w-full"
        >
          <RiPaypalFill />
          PayPal
        </Button>
      </div>
      {/* {paymentOptions.card && (
        <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-8 space-y-2 mt-12">
          <Input
            placeholder="Card Number"
            label="Card Number"
            name="cardNumber"
          />
          <Input
            placeholder="Expiry Date"
            label="Expiry Date"
            name="expiryDate"
          />
          <Input placeholder="CVV" label="CVV" name="cvv" />
          <Input
            placeholder="Cardholder Name"
            label="Cardholder Name"
            name="cardholderName"
          />
        </div>
      )} */}
      {/* {paymentOptions.paypal && (
        <div className="flex py-6">
          <Button
            className="w-1/2 py-8 rounded-full bg-zinc-100! border-b-2 border-zinc-200/50 active:border-0"
            onClick={() => {}}
          >
            <Image
              src="/images/paypal.webp"
              alt="PayPal"
              width={100}
              height={50}
            />
          </Button>
        </div>
      )} */}
    </div>
  );
}
