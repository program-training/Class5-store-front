import {
  CartItemFromClientInterface,
  CartItemInterface,
} from "./CartItemsInterfaces";
import { ShippingDetailsInterface } from "./ShippingDetailsInterface";

export interface OrderFromClientInterface {
  email: string;
  price: number;
  cartItems: CartItemFromClientInterface[];
  shippingDetails: ShippingDetailsInterface;
}

export interface OrdersInterface {
  _id?: string;
  cartItems: CartItemInterface[];
  status: "pending" | "processing" | "shipped" | "delivered" | "completed";
  email: string;
  price: number;
  orderTime: Date;
  shippingDetails: ShippingDetailsInterface;
}
