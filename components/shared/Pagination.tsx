import React from "react";
import Link from "next/link";

export default async function Pagination({
  pages = 1,
  pageSize = 20,
  currentPage = 1,
  className = "",
  url = "",
  query,
}: {
  pages?: number;
  pageSize?: number;
  currentPage?: number;
  className?: string;
  query?: {};
  url?: string;
}) {
  const pagination = {
    currentPage: currentPage,
    itemsPerPage: pageSize,
    pages: Array.from({ length: pages }, (_, index) => index + 1),
  };

  const parametrizedQuery = (page: number) => {
    const queryParams = new URLSearchParams(query as any);
    queryParams.set("page", page.toString());
    return queryParams.toString();
  };

  return (
    <div className={`flex justify-center ${className}`}>
      {pagination.pages.map((page) => (
        <Link
          key={page}
          href={`/${url}?${parametrizedQuery(page)}`}
          className="mx-2 p-2 hover:bg-zinc-200 rounded-md text-zinc-700 border border-zinc-300 min-w-10 text-center"
        >
          {page}
        </Link>
      ))}
    </div>
  );
}
