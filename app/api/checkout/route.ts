import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { orderSchema } from "@/shared/schemas/orderSchema";

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
  ``;
  const transactionResult = await prisma.$transaction(async (tx) => {
    // Create the address
    const address = await tx.address.create({
      data: {
        user_id: String(userId),
        street: shippingAddress,
        city,
        state: stateProvince,
        country,
        postal_code: zipPostalCode,
        is_default: true,
      },
    });

    // Create the order
    const order = await tx.order.create({
      data: {
        user_id: String(userId),
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
    const orderItems = await tx.orderItem.createMany({
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
