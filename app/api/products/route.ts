import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // pagination parameters
    const pageParam = searchParams.get("page");
    const pageSizeParam = searchParams.get("pageSize");

    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const pageSize = pageSizeParam ? parseInt(pageSizeParam, 10) : 20;

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    // filter
    const priceMin = searchParams.get("priceMin")
      ? parseFloat(searchParams.get("priceMin")!)
      : 0;
    const priceMax = searchParams.get("priceMax")
      ? parseFloat(searchParams.get("priceMax")!)
      : undefined;

    // sorting
    const sort = searchParams.get("sort");
    let orderBy: { [key: string]: "asc" | "desc" }[] = [{ created_at: "desc" }]; // За замовчуванням
    if (sort === "price_asc") orderBy = [{ price: "asc" }];
    if (sort === "price_desc") orderBy = [{ price: "desc" }];

    // filter
    const where = {
      price: {
        gte: priceMin,
        ...(priceMax !== undefined && { lte: priceMax }),
      },
    };

    // Основна вибірка
    const products = await prisma.products.findMany({
      where,
      orderBy,
      skip,
      take,
      include: {
        product_images: true,
      },
    });

    // pagination
    const totalCount = await prisma.products.count({ where });
    const totalPages = Math.ceil(totalCount / pageSize);

    // adding image to product
    const productsWithImages = products.map((product) => ({
      ...product,
      image:
        product.product_images.length > 0
          ? product.product_images[0].url
          : null,
    }));

    return NextResponse.json({
      products: productsWithImages,
      totalCount,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
