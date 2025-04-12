import React from "react";
import clsx from "clsx";

export default function Input({
  label,
  variant = "default",
  size = "md",
  className = "",
  id,
  ...props
}: {
  label?: string;
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
  [key: string]: any;
}) {
  const baseStyles =
    "block rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyles = {
    default: "text-zinc-800 border border-zinc-300 focus:border-zinc-400 ",
    primary: "text-white border border-zinc-500 focus:border-zinc-500",
    secondary: "text-zinc-800 border border-zinc-900 focus:border-zinc-700",
  };
  const sizeStyles = {
    sm: "px-2 py-1 text-sm h-8",
    md: "px-3 py-2 text-base h-10",
    lg: "px-4 py-3 text-lg h-12",
  };

  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-zinc-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    </div>
  );
}
