"use client";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import React from "react";
import { useState } from "react";
import { RiSubtractLine, RiAddLine } from "react-icons/ri";

export default function ItemQuantity({
  item,
  quantity,
  updateQuantity,
  removeFromCart,
  cart,
}: {
  item: { id: number; name: string };
  quantity: number;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  cart: { id: number; quantity: number }[];
}) {
  const calculateLocalQuantity = () => {
    return cart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {} as Record<number, number>);
  };

  const [localQuantities, setLocalQuantities] = useState<
    Record<number, number>
  >(calculateLocalQuantity());

  const handleQuantityChange = (id: number, value: string) => {
    const parsedValue = parseInt(value, 10);
    setLocalQuantities((prev) => ({
      ...prev,
      [id]: isNaN(parsedValue) ? 0 : parsedValue,
    }));
  };

  const handleBlur = (id: number) => {
    const quantity = localQuantities[id];
    if (!quantity || quantity < 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, quantity);
    }
  };

  const handleKeyDown = (
    id: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const quantity = localQuantities[id];
      if (!quantity || quantity < 1) {
        removeFromCart(id);
      } else {
        updateQuantity(id, quantity);
      }
    }
  };

  const handleIncrease = (id: number) => {
    setLocalQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    updateQuantity(id, localQuantities[id] + 1);
  };

  const handleDecrease = (id: number) => {
    setLocalQuantities((prev) => {
      const newQuantity = Math.max((prev[id] || 0) - 1, 0);
      return {
        ...prev,
        [id]: newQuantity,
      };
    });

    const newQuantity = Math.max((localQuantities[id] || 0) - 1, 0);
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        size="md"
        id={`decrease-${item.id}`}
        onClick={() => handleDecrease(item.id)}
        aria-label={`Decrease quantity of ${item.name}`}
      >
        <RiSubtractLine />
      </Button>
      <Input
        className="w-16 text-center"
        id={`quantity-${item.id}`}
        name={`quantity-${item.id}`}
        autoComplete="off"
        aria-label={`Quantity of ${item.name}`}
        variant="default"
        size="md"
        value={localQuantities[item.id] || ""}
        onChange={(e: { target: { value: string } }) =>
          handleQuantityChange(item.id, e.target.value.trim())
        }
        onBlur={() => handleBlur(item.id)}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleKeyDown(item.id, e)
        }
      />
      <Button
        size="md"
        id={`increase-${item.id}`}
        onClick={() => handleIncrease(item.id)}
        aria-label={`Increase quantity of ${item.name}`}
      >
        <RiAddLine />
      </Button>
    </div>
  );
}
