import React from "react";
import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

export default function ItemImage({ src, alt }: ProductImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className="w-24 h-24 rounded-md object-cover"
      width={128}
      height={128}
      priority
    />
  );
}
