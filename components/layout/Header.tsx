import React from "react";
import Link from "next/link";
import { RiShoppingBagFill } from "react-icons/ri";
import Button from "@/components/shared/Button";
import { CartIndicator } from "../cart/Cart";

export default function Header() {
  return (
    <header className="">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-18">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <span>MemeMugs</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="secondary" size="md" className="relative">
              <RiShoppingBagFill />
              <CartIndicator />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
