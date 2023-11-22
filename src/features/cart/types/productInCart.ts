import  ProductInterface from "../../products/interfaces/ProductInterface";

export type productInCart = {
  product: ProductInterface;
  amount: number;
  sum: number;
};
export type PropProductInCart = {
  productCart: productInCart;
};
