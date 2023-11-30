// import jwt from "jsonwebtoken";
import axios from "axios";
import { OrderFromClientInterface } from "../interfaces/OrdersInterfaces";
import { productInCart } from "../types/types";
import { BASE_URL } from "../../App";
export const registerUser = async (email: string) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/users/user`, {
      email,
    });
    localStorage.setItem("token", data);
    // const decodedToken = jwt.decode(data);
    // return decodedToken;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export const registerOrder = async (order: OrderFromClientInterface) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/orders`, order);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const checkCart = async (cart: productInCart[]) => {
  const body = [...cart];
  const result = await axios.post(`${BASE_URL}/api/products/stock`, body);
  return result.data;
};
