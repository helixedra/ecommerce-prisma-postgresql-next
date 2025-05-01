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

  const {
    firstName,
    lastName,
    shippingAddress,
    city,
    stateProvince,
    zipPostalCode,
    country,
    phoneNumber,
    emailAddress,
    orderTotal,
    paymentOption,
    cart,
    userId,
  } = result.data;

  // TODO: Add logic to process the order
  //  add to ORDERED_ITEMS, ADDRESSES, ORDERS

  // console.log("Received order data:", {
  //   firstName,
  //   lastName,
  //   shippingAddress,
  //   city,
  //   stateProvince,
  //   zipPostalCode,
  //   country,
  //   phoneNumber,
  //   emailAddress,
  //   orderTotal,
  //   paymentOption,
  //   cart,
  //   userId,
  // });

  // Received order data: {
  //   firstName: 'Oleg',
  //   lastName: 'Dubrovsky',
  //   shippingAddress: 'ul. Florencii, dom 12b, kv.46',
  //   city: 'Kiev',
  //   stateProvince: 'Kyiv',
  //   zipPostalCode: '02002',
  //   country: 'Ukraine',
  //   phoneNumber: '0936074405',
  //   emailAddress: 'greencastle08@gmail.com',
  //   orderTotal: '86.20',
  //   paymentOption: 'card',
  //   cart: [
  //     {
  //       id: 1,
  //       name: 'Distracted Boyfriend Mug',
  //       price: '19.99',
  //       quantity: 2
  //     },
  //     { id: 3, name: 'This Is Fine Mug', price: '17.99', quantity: 1 },
  //     { id: 5, name: 'Debugging Mug', price: '16.99', quantity: 1 }
  //   ],
  //   userId: 1
  // }

  // Add logic to process the order

  const transactionResult = await prisma.$transaction(async (tx) => {
    // Create the address
    const address = await tx.addresses.create({
      data: {
        user_id: userId,
        street: shippingAddress,
        city,
        state: stateProvince,
        country,
        postal_code: zipPostalCode,
        is_default: true,
      },
    });

    // Create the order
    const order = await tx.orders.create({
      data: {
        user_id: userId,
        order_number: "ORD-" + Date.now(),
        status: "pending",
        total_amount: orderTotal,
        shipping_address_id: address.id,
        billing_address_id: address.id,
        payment_method: paymentOption,
        payment_status: "pending",
        tracking_number: null,
        notes: null,
      },
    });

    // Create the order items
    const orderItems = await tx.order_items.createMany({
      data: cart.map((item) => ({
        order_id: order.id,
        product_id: Number(item.id),
        quantity: Number(item.quantity),
        price: Number(item.price),
        total_price: Number(item.price) * Number(item.quantity),
      })),
    });

    // Optionally return the created data
    return { order, address, orderItems };
  });

  return NextResponse.json({ message: "Order received", transactionResult });
}
