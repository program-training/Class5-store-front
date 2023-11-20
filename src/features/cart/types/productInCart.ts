import { ProductCardInterface } from "../../products/interfaces/ProductCardInterface";

export type productInCart = {
  product: ProductCardInterface;
  quantity: number;
};
export type PropProductInCart = {
  productCart: productInCart;
};
