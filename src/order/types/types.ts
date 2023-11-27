import { ProductsCardInterface } from "../../features/products/interfaces/ProductCardInterface";
export type productInCart = {
  productId: number;
  requiredQuantity: number;
};
export type LocalCartType = {
  product: ProductsCardInterface;
  requiredQuantity: number;
  sum: number;
};
export type PropProductInCart = {
  productCart: LocalCartType;
}
