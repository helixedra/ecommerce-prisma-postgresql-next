import React from "react";
import Link from "next/link";

export default function ItemContent({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description?: string;
}) {
  return (
    <div>
      <Link
        href={"/products/" + url}
        className="flex items-center hover:underline"
        aria-label={name}
        title={name}
      >
        <p className="font-medium text-gray-700">{name}</p>
      </Link>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
}
