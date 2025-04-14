import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../cart/AddToCartButton";
import { Product } from "@/types/Product.type";
import Rating from "../shared/Rating";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-lg bg-background transition-colors flex flex-col h-[440px] border border-zinc-100 overflow-clip hover:shadow-lg group">
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.jpg"}
            alt={product.name}
            width={800}
            height={731}
            className="object-cover transition-transform group-hover:scale-110"
          />
        </Link>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/products/${product.id}`} className="hover:underline">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-muted-foreground flex-grow">
            {product.description}
          </p>
        </Link>
        <Rating productReviews={product.product_reviews} />
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold">${product.price}</span>
          <AddToCartButton product={product} size="lg" />
        </div>
      </div>
    </div>
  );
}
