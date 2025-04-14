export type Review = {
  id: number;
  product_id: number;
  user_id: number;
  rating: number;
  comment: string;
  is_approved: boolean;
  created_at: string;
  updated_at?: string;
  users: {
    first_name: string;
    last_name: string;
  };
};
