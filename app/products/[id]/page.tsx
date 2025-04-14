import React from "react";
import Image from "next/image";
import api from "@/services/api";
import { EmblaCarousel } from "@/components/shared/ImageCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Product } from "@/types/Product.type";
import Rating from "@/components/shared/Rating";
import AddToCartButton from "@/components/cart/AddToCartButton";
import Reviews from "@/components/product-page/Reviews";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response: { data: Product; error?: string } = await api(
    `products/id/${id}`,
    {
      method: "GET",
    }
  );

  const product = response.data;
  const error = response.error;
  if (error) {
    return <div>Error loading product: {error}</div>;
  }

  const OPTIONS: EmblaOptionsType = {};

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* gallery */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex md:flex-col gap-2 order-2 md:order-1">
            <EmblaCarousel options={OPTIONS}>
              {product.product_images.length > 0
                ? product.product_images.map((img, idx) => (
                    <Image
                      key={idx}
                      src={img.url}
                      alt={`preview-${idx}`}
                      width={1920}
                      height={760}
                      className="object-cover w-full h-auto"
                    />
                  ))
                : []}
            </EmblaCarousel>
          </div>
        </div>
        {/* product details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-2">
              <a href="#reviews" className="hover:underline">
                <Rating productReviews={product.product_reviews} />
              </a>
            </div>

            <p className="text-zinc-700 leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="text-3xl font-semibold">
                {Number(product.price).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
              <AddToCartButton
                product={product}
                label="Add to Cart"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <Reviews reviews={product.product_reviews} />
    </div>
  );
}
