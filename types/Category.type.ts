import { Product } from "./Product.type";
export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  parent_id?: number;
  created_at?: Date;
  categories?: Category;
  other_categories: Category[];
  products: Product[];
}
