export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  gallery?: string[];
  price: number;
  // discount: Discount;
  rating: number;
};
