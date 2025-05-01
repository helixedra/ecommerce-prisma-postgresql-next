import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { orderSchema } from "@/shared/schemas/orderSchema";

// const checkoutSchema = orderSchema;

// const checkoutSchema = z.object({
//   firstName: z.string().min(1),
//   lastName: z.string().min(1),
//   shippingAddress: z.string().min(5),
//   city: z.string().min(2),
//   stateProvince: z.string().min(2),
//   zipPostalCode: z.string().min(5),
//   country: z.string().min(2),
//   phoneNumber: z.string().min(4),
//   emailAddress: z.string().min(5).email(),
//   orderTotal: z
//     .string()
//     .min(1)
//     .regex(/^[0-9]+(\.[0-9]{2})?$/),
//   paymentOption: z.enum(["credit_card", "paypal", "bank_transfer"]),
//   cart: z.array(
//     z.object({
//       productId: z.number(),
//       quantity: z.number(),
//       price: z.number(),
//       name: z.string(),
//       image: z.string(),
//     })
//   ),
//   userId: z.number(),
// });

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate the request body
  const result = orderSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  //
  // TODO: Add logic to process the order
  //  add to ORDERED_ITEMS, ADDRESSES, ORDERS

  console.log("Received order data:", body);

  return NextResponse.json({ message: "Order received" });
}
