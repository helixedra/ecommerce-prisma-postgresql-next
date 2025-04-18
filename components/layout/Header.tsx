import React from "react";
import Link from "next/link";
import { CartButton } from "@/components/cart/Cart";
import Search from "./Search";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-18">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <span>MemeMugs</span>
        </Link>
        <Search />
        <nav className="hidden md:flex gap-6">
          <Link
            href="/products"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <CartButton />
        </div>
      </div>
    </header>
  );
}
