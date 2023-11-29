import { ProductsCardInterface } from "../../features/products/interfaces/ProductCardInterface";
export type productInCart = {
  productId: number;
  name: string;
  salePrice: number;
  requiredQuantity: number;
  description: string;
};
export type LocalCartType = {
  product: ProductsCardInterface;
  requiredQuantity: number;
  sum: number;
};
export type PropProductInCart = {
  productCart: LocalCartType;
};

export type NotInStock = {
  product: ProductsCardInterface;
  requiredQuantity: number;
};

export type NotInStockApterSub = {
  product: ProductsCardInterface;
  requiredQuantity: number;
  exist: number;
  missing: number;
};
