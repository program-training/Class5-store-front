export interface CartItemFromClientInterface {
  productId: number;
  name: string;
  salePrice: string;
  quantity: number;
  description: string;
}

export interface CartItemInterface {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
}
