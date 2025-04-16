import React from "react";
import Input from "@/components/shared/Input";

export default function ShippingDetails() {
  return (
    <div className="p-6 flex flex-col justify-between items-start ">
      <div>
        <h3 className="text-lg font-semibold">Shipping Details</h3>
      </div>
      <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-8 space-y-2 mt-12">
        <Input placeholder="First Name" label="First Name" name="firstName" />
        <Input placeholder="Last Name" label="Last Name" name="lastName" />
        <Input
          placeholder="Email Address"
          label="Email Address"
          name="emailAddress"
        />
        <Input
          placeholder="Phone Number"
          label="Phone Number"
          name="phoneNumber"
        />
      </div>
      <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-8 space-y-2 mt-12">
        <Input placeholder="Country" label="Country" name="country" />
        <Input
          placeholder="State/Province"
          label="State/Province"
          name="stateProvince"
        />
        <Input placeholder="City" label="City" name="city" />

        <Input
          placeholder="Zip/Postal Code"
          label="Zip/Postal Code"
          name="zipPostalCode"
        />
        <Input
          placeholder="Shipping Address"
          label="Shipping Address"
          name="shippingAddress"
        />
      </div>
    </div>
  );
}
