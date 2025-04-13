import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.products.findMany();
    const product_images = await prisma.product_images.findMany();
    const productsWithImages = products.map((product) => {
      const productImage = product_images.find(
        (image) => image.product_id === product.id
      );
      return {
        ...product,
        image: productImage ? productImage.url : null,
      };
    });
    return NextResponse.json(productsWithImages);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
