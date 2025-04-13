import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const startParam = searchParams.get("start");
    const endParam = searchParams.get("end");

    const start = startParam ? parseInt(startParam, 10) : 0; // Default to 0 if not provided
    const end = endParam ? parseInt(endParam, 10) : undefined;

    const take = end ? end - start : undefined; // Calculate the number of items to take
    const skip = start; // Skip the first 'start' items

    const products = await prisma.products.findMany({
      skip, // Skip the specified number of items
      take, // Take the calculated number of items
      include: {
        product_images: true, // Fetch related images for each product
      },
    });

    const productsWithImages = products.map((product) => ({
      ...product,
      image:
        product.product_images.length > 0
          ? product.product_images[0].url
          : null,
    }));

    return NextResponse.json(productsWithImages);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
