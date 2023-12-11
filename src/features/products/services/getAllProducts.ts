import { createAsyncThunk } from "@reduxjs/toolkit";
import { QUERY_PRODUCTS } from "../../../services/apollo/queries";
import client from "../../../apollo/apolloApi";

const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
  try {
    const { data } = await client.query({ query: QUERY_PRODUCTS });
    console.log("Success");
    return data.getProducts;
  } catch (error) {
    console.error("Error connecting to the products server");
    throw error;
  }
});

export default getAllProducts;
