import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 px-4 md:px-6 mb-8">
        <div className="flex-1 space-y-4">
          <div className="text-lg font-semibold">MemeMugs</div>
          <p className="text-sm text-muted-foreground">
            Making your coffee breaks funnier since 2023.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="text-sm font-semibold">Shop</div>
          <nav className="flex flex-col gap-2">
            <Link href="/products" className="text-sm hover:underline">
              All Products
            </Link>
            <Link href="/bestsellers" className="text-sm hover:underline">
              Bestsellers
            </Link>
            <Link href="/new" className="text-sm hover:underline">
              New Arrivals
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="text-sm font-semibold">Company</div>
          <nav className="flex flex-col gap-2">
            <Link href="/about" className="text-sm hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact
            </Link>
            <Link href="/faq" className="text-sm hover:underline">
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="text-sm font-semibold">Legal</div>
          <nav className="flex flex-col gap-2">
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:underline">
              Terms of Service
            </Link>
            <Link href="/shipping" className="text-sm hover:underline">
              Shipping Policy
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-t py-6 border-t-zinc-200">
        <div className="flex max-w-[1400px] px-6 mx-auto flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2023 MemeMugs. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
