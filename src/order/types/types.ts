<<<<<<< HEAD
import { ProductsCardInterface } from "../../features/products/interfaces/ProductCardInterface";
export type productInCart = {
  product: ProductsCardInterface;
  requiredQuantity: number;
  sumProductInCart: number;
};

export type ProductToCheck = {
  productId: number;
  requiredQuantity: number;
};

export type PropProductInCart = {
  productCart: productInCart;
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
=======
import { ProductsCardInterface } from "../../features/products/interfaces/ProductCardInterface";
export type productInCart = {
  product: ProductsCardInterface;
  requiredQuantity: number;
  sumProductInCart: number;
};

export type PropProductInCart = {
  productCart: productInCart;
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
>>>>>>> acc98a17e7c3d9fdbc16a561a0b091def3e2d3d8
