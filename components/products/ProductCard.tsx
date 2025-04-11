import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../cart/AddToCartButton";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="rounded-lg bg-background transition-colors flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.jpg"}
            alt={product.name}
            width={800}
            height={731}
            className="object-cover transition-transform group-hover:scale-105"
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
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold">${product.price}</span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
