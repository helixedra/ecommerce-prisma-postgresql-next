import React from "react";
import Input from "@/components/shared/Input";

export default function PaymentDetails() {
  return (
    <div className="p-6 space-y-4">
      <div>Payment Details</div>
      <Input placeholder="Card Number" label="Card Number" name="cardNumber" />
      <Input placeholder="Expiry Date" label="Expiry Date" name="expiryDate" />
      <Input placeholder="CVV" label="CVV" name="cvv" />
      <Input
        placeholder="Cardholder Name"
        label="Cardholder Name"
        name="cardholderName"
      />
      <Input
        placeholder="Billing Address"
        label="Billing Address"
        name="billingAddress"
      />
    </div>
  );
}
