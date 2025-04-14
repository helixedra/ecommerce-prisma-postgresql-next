import Hero from "@/components/layout/Hero";
import ProductsGrid from "@/components/layout/ProductsGrid";
import Section from "@/components/layout/Section";
import api from "@/services/api";
import { Product } from "@/types/Product.type";

export default async function Home() {
  // Fetch products from the API
  const {
    data: products,
    error,
  }: { data: { products: Product[] }; error?: string } = await api(
    "products?page=1&pageSize=12&sort=featured",
    { method: "GET" }
  );

  // Handle error states
  if (error) {
    return <div>Error loading products: {error}</div>;
  }
  // Handle empty product list
  if (products.products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <>
      <Hero />
      <section className="py-8 md:py-12 lg:py-24">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Featured Mugs
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our most popular meme mugs that everyone loves.
              </p>
            </div>
          </div>
          <ProductsGrid products={products.products} />
        </div>
      </section>

      <Section />
    </>
  );
}
