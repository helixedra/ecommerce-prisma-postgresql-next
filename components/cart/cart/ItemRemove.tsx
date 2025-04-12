import Button from "@/components/shared/Button";
import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
export default function ItemRemove({
  id,
  removeFromCart,
  name,
}: {
  id: number;
  removeFromCart: (id: number) => void;
  name: string;
}) {
  return (
    <>
      <Button
        size="md"
        variant="ghost"
        onClick={() => removeFromCart(id)}
        className="px-3 py-1"
        aria-label={`Remove "${name}" from cart`}
      >
        <RiDeleteBin7Line />
      </Button>
    </>
  );
}
