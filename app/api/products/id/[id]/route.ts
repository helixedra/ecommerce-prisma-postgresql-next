import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Validate and parse the ID
    const productId = parseInt(id, 10);
    if (isNaN(productId)) {
      return NextResponse.json(
        { message: "Invalid product ID" },
        { status: 400 }
      );
    }

    // Fetch the product by ID
    const product = await prisma.products.findUnique({
      where: { id: productId },
      include: {
        product_images: true,
        product_reviews: {
          include: {
            users: {
              select: {
                first_name: true,
                last_name: true,
              },
            },
          },
        },
      },
    });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    // Add image and reviews to the product
    const productWithDetails = {
      ...product,
      image:
        product.product_images && product.product_images.length > 0
          ? product.product_images[0].url
          : null,
      reviews: product.product_reviews, // Includes users related by user_id
    };

    return NextResponse.json(productWithDetails);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
