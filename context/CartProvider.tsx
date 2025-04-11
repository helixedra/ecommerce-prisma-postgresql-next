"use client";

import { CartProvider } from "@/context/CartContext";

export function Provider({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
