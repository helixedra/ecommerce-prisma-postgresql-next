import ProductsGrid from "@/components/layout/ProductsGrid";
import React from "react";
import api from "@/services/api";
import { Product } from "@/types/Product.type";
import Pagination from "@/components/shared/Pagination";
import { Category } from "@/types/Category.type";
import Link from "next/link";

interface Products {
  products: Product[];
  totalCount: string;
  totalPages: string;
  currentPage: string;
  query: string;
}
type Props = {
  searchParams: {
    page?: string;
    pageSize?: string;
    priceMin?: string;
    priceMax?: string;
    sort?: string;
  };
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<Props["searchParams"]>;
}) {
  const page = (await searchParams).page ?? "1";
  const pageSize = (await searchParams).pageSize ?? "3";
  const priceMin = (await searchParams).priceMin ?? "0";
  const priceMax = (await searchParams).priceMax;
  const sort = (await searchParams).sort ?? "price_asc";

  const query = {
    page,
    pageSize,
    priceMin,
    ...(priceMax && { priceMax }),
    sort,
  };

  const parametrizedQuery = new URLSearchParams(query);

  // Fetch products from the API
  const { data: products, error }: { data: Products; error?: string } =
    await api(`products?${parametrizedQuery}`, { method: "GET" });
  // Fetch categories from the API
  const { data: categories }: { data: Category[] } = await api(`categories`, {
    method: "GET",
  });

  if (error) {
    return <div>Error loading products: {error}</div>;
  }
  // Handle empty product list
  if (products.products.length === 0) {
    return <div>No products available.</div>;
  }
  if (!categories) {
    return <div>No categories available.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {categories?.map((category) => (
          <div key={category.id} className="flex items-center hover:underline">
            <Link href={`/products/category/${category.slug}`}>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
      <ProductsGrid products={products.products} />
      <Pagination
        pages={Number(products.totalPages)}
        pageSize={Number(pageSize)}
        currentPage={Number(page)}
        query={query}
        url="products"
        className="mt-4"
      />
    </div>
  );
}
