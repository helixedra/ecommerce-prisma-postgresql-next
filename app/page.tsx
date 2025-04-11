"use client";
import Cart from "@/components/cart/Cart";
import Hero from "@/components/layout/Hero";
import ProductsGrid from "@/components/layout/ProductsGrid";
import Section from "@/components/layout/Section";
import { useQueryClient, useQuery } from "@tanstack/react-query";

type User = {
  id: string;
  username: string;
  email: string;
};

export default function Home() {
  // const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/products");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users.</div>;
  }
  if (!data) {
    return <div>No users found.</div>;
  }
  return (
    <>
      <Cart />
      <Hero />
      <ProductsGrid products={data} />
      <Section />
    </>
  );
}
