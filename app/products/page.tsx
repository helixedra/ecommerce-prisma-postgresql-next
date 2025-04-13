import ProductsGrid from "@/components/layout/ProductsGrid";
import React from "react";
import api from "@/services/api";
import { Product } from "@/types/Product.type";

export default async function ProductsPage() {
  // Fetch products from the API
  const { data: products, error }: { data: Product[]; error?: string } =
    await api("products", { method: "GET" });

  // Handle error states
  if (error) {
    return <div>Error loading products: {error}</div>;
  }
  // Handle empty product list
  if (products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Products</h1>
      <ProductsGrid products={products} />
    </div>
  );
}
