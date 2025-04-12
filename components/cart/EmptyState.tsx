import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

export default function EmptyState() {
  return (
    <div className=" flex flex-col py-20 text-zinc-400 items-center text-center border border-zinc-200 rounded-xl">
      <RiShoppingCartLine size={64} />
      <div className="mt-4 font-semibold">Your Cart is Empty</div>
    </div>
  );
}
