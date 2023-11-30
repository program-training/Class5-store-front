import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import ProductInterface from "./interfaces/ProductInterface";
import { create } from "domain";
import axios from "axios";
import { BASE_URL } from "../../App";
import ProductInterface from "./interfaces/ProductInterface";


export const getAllProducts = createAsyncThunk("products/getAllProducts", async (_, thunkAPI) => {
  try {
    const{data} = await axios.get(`${BASE_URL}/products`);
    return data;

  } catch (error) {
    return thunkAPI.rejectWithValue(error)
    
  }
}



  const initialState = {
    productsBySale: [],
    allProducts: null,
    error: '',
    pending: false,
  };





const initialState: InitialState = {
  productsBySale: [],
  allProducts: null,
  error: "",
  pending: false
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setBySale: (state, action: PayloadAction<number[]>) => {
      state.productsBySale = action.payload;
    },
  },
});

export const { setBySale } = productsSlice.actions;
export default productsSlice.reducer;
