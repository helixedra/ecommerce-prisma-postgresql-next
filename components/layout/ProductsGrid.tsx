import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/shared/Button";
import ProductCard from "../products/ProductCard";

export default function ProductsGrid({ products }: { products: any[] }) {
  return (
    <section className="py-8 md:py-12 lg:py-24">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Featured Mugs
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our most popular meme mugs that everyone loves.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
