"use client";

import { useCart } from "@/context/CartContext";
import Button from "../shared/Button";
import { RiShoppingCartLine } from "react-icons/ri";
import { Product } from "@/types/Product.type";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart, cart, toggleCart } = useCart();

  // Check if the product is already in the cart
  // If it is, get the quantity of that product
  const cartItem = cart.find((item) => item.id === product.id);
  const isInCart = !!cartItem;
  const itemCount = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      category_id: product.category_id,
      name: product.name,
      description: product.description,
      discount_price: product.discount_price,
      price: product.price,
      image: product.image,
      slug: product.slug,
      stock_quantity: product.stock_quantity,
    } as Product);
    toggleCart();
  };

  return (
    <>
      <Button
        title="Add to Cart"
        className="relative w-14"
        onClick={handleAddToCart}
        variant={isInCart ? "secondary" : "primary"}
      >
        <RiShoppingCartLine />
        {isInCart && (
          <span className="absolute -top-2 -right-2.5 bg-black border-2 border-white text-white p-1 text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
    </>
  );
}
