export interface ProductsCardInterface {
  title: string | undefined;
  price: number;
  thumbnail: string | undefined;
  id: number;
  name: string;
  salePrice: number;
  quantity: number;
  description: string;
  category: string;
  discountPercentage: number;
  imageUrl: string;
  imageAlt: string;
}
