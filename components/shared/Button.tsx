import React from "react";
import clsx from "clsx";

export default function Button({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}: {
  variant?: "default" | "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  [key: string]: any;
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  const variantStyles = {
    default: "bg-zinc-200 text-zinc-800 hover:bg-zinc-300",
    primary: "bg-zinc-900 text-white hover:bg-zinc-700",
    secondary: "border border-zinc-900 hover:text-zinc-800",
    ghost: "bg-transparent text-zinc-800 hover:bg-zinc-100",
  };
  const sizeStyles = {
    sm: "px-2 text-base h-8",
    md: "px-4 text-lg h-10",
    lg: "px-6 text-xl h-12",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
