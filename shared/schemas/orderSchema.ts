import { z } from "zod";

// Form schema
export const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  shippingAddress: z.string().min(1, "Shipping address is required"),
  city: z.string().min(1, "City is required"),
  stateProvince: z.string().min(1, "State/Province is required"),
  zipPostalCode: z.string().min(1, "ZIP/Postal code is required"),
  country: z.string().min(1, "Country is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  emailAddress: z.string().email("Invalid email address"),
  orderTotal: z.string(),
  paymentOption: z.enum(["card", "paypal"]),
});

// API schema
export const orderSchema = formSchema.extend({
  cart: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.string(),
      quantity: z.number().min(1),
    })
  ),
  userId: z.number(),
});

export type FormSchema = z.infer<typeof formSchema>;
export type OrderSchema = z.infer<typeof orderSchema>;
