import { createAsyncThunk } from "@reduxjs/toolkit";
// import { QUERY_PRODUCT } from "../../../services/apollo/queries";
import client from "../../../apollo/apolloApi";
import { MUTATION_CANCEL } from "../../../services/apollo/mutations";
import { ProductToCheck } from "../../../order/types/types";

const cancelProductsInOrder = createAsyncThunk(
  "cart/cancelProductsInOrder",
  async (cancelCart: ProductToCheck) => {
    try {
      await client.mutate({
        mutation: MUTATION_CANCEL,
        variables: {
          cart: cancelCart,
        },
      });
      console.log("Success");
    } catch (error) {
      console.error("Error connecting to the products server");
      throw error;
    }
  }
);

export default cancelProductsInOrder;
