"use client";
import React from "react";

import { CartItem as CartItemType } from "@/context/CartContext";
import ItemImage from "./cart/ItemImage";
import ItemContent from "./cart/ItemContent";
import ItemQuantity from "./cart/ItemQuantity";
import ItemRemove from "./cart/ItemRemove";

interface CartItemProps {
  item: CartItemType;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cart: CartItemType[];
}

export default function CartItem({
  item,
  removeFromCart,
  updateQuantity,
  cart,
}: CartItemProps) {
  return (
    <div
      key={item.id}
      className="flex flex-col md:flex-row w-full p-4 items-center gap-4"
    >
      <div className="flex items-center gap-4">
        <ItemImage src={item.image} alt={item.name} />
        <ItemContent
          name={item.name}
          url={item.slug}
          description={item.description}
        />
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <ItemQuantity
          item={item}
          quantity={item.quantity}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          cart={cart}
        />
        <ItemRemove
          id={item.id}
          name={item.name}
          removeFromCart={removeFromCart}
        />
      </div>

      <div className="flex w-2/12 items-center justify-end text-xl font-bold text-zinc-900">
        {(Number(item.price) * item.quantity).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
    </div>
  );
}
