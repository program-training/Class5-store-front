import axios from "axios";
import { productInCart } from "../types/productInCart";

export const checkCart = async (cart: productInCart[]) => {
  const body = [...cart];
  const result = axios.post("http://localhost:3000/api/products/stock", body);
};
