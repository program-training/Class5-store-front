import { ProductsCardInterface } from "../../products/interfaces/ProductCardInterface";

export type productInCart = {
  productId: number;
  amount: number;
};

export type LocalCartType = {
  product: ProductsCardInterface;
  amount: number;
  sum: number;
};
export type PropProductInCart = {
  productCart: LocalCartType;
};