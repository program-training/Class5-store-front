import axios from "axios";
import { productInCart } from "../types/productInCart";

export const checkCart = async (cart: productInCart[]) => {
  const body = { cart: [...cart] };
  const result = await axios.post(
    "https://app-store-server1.onrender.com/api/products/stock",
    body
  );
  console.log(result.data);
};
