import { ProductCardInterface } from "../../products/interfaces/ProductCardInterface";

export type productInCart = {
  product: ProductCardInterface;
  amount: number;
  sum: number;
};
export type PropProductInCart = {
  productCart: productInCart;
};
