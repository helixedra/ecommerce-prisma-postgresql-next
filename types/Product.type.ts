export type Product = {
  id: number;
  category_id: number;
  created_at: string;
  description: string;
  discount_price: number | null;
  image: string;
  is_active: boolean;
  is_featured: boolean;
  name: string;
  price: string;
  slug: string;
  stock_quantity: number;
  updated_at: string;
};
