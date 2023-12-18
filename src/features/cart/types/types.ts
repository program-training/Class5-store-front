import { NotInStock, productInCart } from "../../../order/types/types";

export type localCheckCartType = {
  inStock: productInCart[];
  notInStock: NotInStock[];
};

export type ShippingTypes = {
  onPick: (pick: ShippingType) => void;
  shipping: ShippingType;
};

export type ShippingType = "standard" | "pickup" | "express";
