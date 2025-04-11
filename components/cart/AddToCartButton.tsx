"use client";

import { useCart } from "@/context/CartContext";
import Button from "../shared/Button";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <>
      <Button onClick={() => addToCart(product)}>Add To Cart</Button>
    </>
  );
}
