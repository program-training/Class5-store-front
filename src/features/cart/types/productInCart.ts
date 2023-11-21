import { ProductsCardInterface } from "../../products/interfaces/ProductCardInterface";

export type productInCart = {
  product: ProductsCardInterface;
  amount: number;
  sum: number;
};
export type PropProductInCart = {
  productCart: productInCart;
};
