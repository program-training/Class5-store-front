import { createAsyncThunk } from "@reduxjs/toolkit";
import { REGISTER_ORDER } from "../../services/apollo/mutations";
import client from "../../apollo/apolloApi";
import { CartItemFromClientInterface } from "../interfaces/CartItemsInterfaces";

interface OrderFromClient {
  cartItems: CartItemFromClientInterface[];
  email: string;
  price: number;
  shippingDetails: {
    address: string;
    contactNumber: string;
    orderType: string;
  };
}

const registerOrder = createAsyncThunk(
  "order/registerOrder",
  async (addOrder: OrderFromClient) => {
    try {
      const { data } = await client.mutate({
        mutation: REGISTER_ORDER,
        variables: {
          cart: addOrder,
        },
      });
      console.log("Success");
      return data.registerOrder;
    } catch (error) {
      console.error("Error connecting to the products server");
      throw error;
    }
  }
);

export default registerOrder;
