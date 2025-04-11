import React from "react";
import { twMerge } from "tailwind-merge";

export default function Center({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        `flex justify-center items-center w-full h-full ${className || ""}`
      )}
    >
      {children}
    </div>
  );
}
