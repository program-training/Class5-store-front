import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../apollo/apolloApi";
import { MUTATION_CHECK_IN_STOCK } from "../../../services/apollo/mutations";
import { ProductToCheck } from "../../../order/types/types";

const checkProductsInStock = createAsyncThunk(
  "products/checkProductsInStock",
  async (checkCart: ProductToCheck[]) => {
    try {
      const { data } = await client.mutate({
        mutation: MUTATION_CHECK_IN_STOCK,
        variables: {
          cart: checkCart,
        },
      });
      return data.checkProductsInStock;
    } catch (error) {
      console.error("Error connecting to the products server");
      throw error;
    }
  }
);

export default checkProductsInStock;
