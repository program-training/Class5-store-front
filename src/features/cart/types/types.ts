import { NotInStock, productInCart } from "../../../order/types/types";

export type localCheckCartType = {
  inStock: productInCart[];
  notInStock: NotInStock[];
};
