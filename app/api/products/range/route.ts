import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { range } = await request.json();
  if (!Array.isArray(range) || range.some((id) => typeof id !== "number")) {
    return NextResponse.json(
      { message: "Invalid range parameter" },
      { status: 400 }
    );
  }
  const params = { range };
  console.log(params);
  try {
    const products = await prisma.products.findMany({
      where: {
        id: {
          in: params.range,
        },
      },
    });
    const product_images = await prisma.product_images.findMany({
      where: {
        product_id: {
          in: params.range,
        },
      },
    });
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
