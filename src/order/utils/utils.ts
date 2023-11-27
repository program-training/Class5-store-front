
import axios from "axios";
export const sendEmail = async (email: string) => {
  try {
    const { data } = await axios.post("http://localhost:3000/api/users/user", {
      email,
    });
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

import { OrderFromClientInterface } from "../interfaces/OrdersInterfaces";

export const registerOrder = async (order: OrderFromClientInterface) => {
  try {
    const { data } = await axios.post("http://localhost/api/orders", order);
    return data;
  } catch (error) {
    console.log(error);
  }
};

