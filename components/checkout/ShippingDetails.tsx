"use client";
import React from "react";
import Input from "@/components/shared/Input";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormSchema } from "@/shared/schemas/orderSchema";

export default function ShippingDetails({
  register,
  errors,
}: {
  register: UseFormRegister<FormSchema>;
  errors: FieldErrors<FormSchema>;
}) {
  return (
    <div className="p-6 flex flex-col justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">Shipping Details</h3>
      </div>
      <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-8 space-y-2 mt-12">
        <Input
          placeholder="First Name"
          label="First Name"
          {...register("firstName")}
          error={errors.firstName?.message}
        />
        <Input
          placeholder="Last Name"
          label="Last Name"
          {...register("lastName")}
          error={errors.lastName?.message}
        />
        <Input
          placeholder="Email Address"
          label="Email Address"
          {...register("emailAddress")}
          error={errors.emailAddress?.message}
        />
        <Input
          placeholder="Phone Number"
          label="Phone Number"
          {...register("phoneNumber")}
          error={errors.phoneNumber?.message}
        />
      </div>
      <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-8 space-y-2 mt-12">
        <Input
          placeholder="Country"
          label="Country"
          {...register("country")}
          error={errors.country?.message}
        />
        <Input
          placeholder="State/Province"
          label="State/Province"
          {...register("stateProvince")}
          error={errors.stateProvince?.message}
        />
        <Input
          placeholder="City"
          label="City"
          {...register("city")}
          error={errors.city?.message}
        />
        <Input
          placeholder="Zip/Postal Code"
          label="Zip/Postal Code"
          {...register("zipPostalCode")}
          error={errors.zipPostalCode?.message}
        />
        <Input
          placeholder="Shipping Address"
          label="Shipping Address"
          {...register("shippingAddress")}
          error={errors.shippingAddress?.message}
        />
      </div>
    </div>
  );
}
