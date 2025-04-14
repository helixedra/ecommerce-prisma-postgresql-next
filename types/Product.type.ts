import { Review } from "./Review.type";

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
  product_reviews: Review[];
  product_images: {
    id: number;
    product_id: number;
    url: string;
    alt_text: string;
    is_primary: boolean;
    created_at: string;
  }[];
};
