import axios from "axios";
import { productInCart } from "../types/productInCart";

export const checkCart = async (cart: productInCart[]) => {
  const body = { cart: [...cart] };
  const result = await axios.post(
    "http://localhost:3000/api/products/stock",
    body
  );
  console.log(result.data);
};
