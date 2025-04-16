import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate the request body
  //
  // TODO: Add validation logic here
  //
  // TODO: Add logic to process the order
  //  add to ORDERED_ITEMS, ADDRESSES, ORDERS

  console.log("Received order data:", body);

  return NextResponse.json({ message: "Order received" });
}
