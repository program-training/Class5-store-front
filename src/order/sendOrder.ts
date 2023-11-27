import axios from "axios";
import { OrderFromClientInterface } from "./interfaces/OrdersInterfaces";

export const registerOrder = async (order: OrderFromClientInterface) => {
  try {
    const { data } = await axios.post("http://localhost/api/orders", order);
    return data;
  } catch (error) {
    console.log(error);
  }
};
