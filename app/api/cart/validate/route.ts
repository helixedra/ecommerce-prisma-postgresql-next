import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { cart } = body;

    const productIds = cart.map((item: any) => item.id);
    const products = await prisma.products.findMany({
      where: { id: { in: productIds } },
    });

    const updatedCart = cart
      .map((item: any) => {
        const product = products.find((p) => p.id === item.id);
        if (product) {
          return {
            ...item,
            price: product.price,
            name: product.name,
          };
        }
        return null;
      })
      .filter(Boolean);

    return NextResponse.json(updatedCart, { status: 200 });
  } catch (error) {
    console.error("Error validating cart:", error);
    return NextResponse.json(
      { error: "Failed to validate cart" },
      { status: 500 }
    );
  }
}
