import { createAsyncThunk } from "@reduxjs/toolkit";
import { QUERY_PRODUCT } from "../../../services/apollo/queries";
import client from "../../../apollo/apolloApi";

const getProduct = createAsyncThunk(
  "products/getProduct",
  async (productId: string) => {
    try {
      const { data } = await client.query({
        query: QUERY_PRODUCT,
        variables: {
          getProductId: productId,
        },
      });
      console.log("Success");
      return data.getProduct;
    } catch (error) {
      console.error("Error connecting to the product server");
      throw error;
    }
  }
);

export default getProduct;
