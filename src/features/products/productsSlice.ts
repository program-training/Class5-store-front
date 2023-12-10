import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import getAllProducts from "./services/getAllProducts";
import { ProductsCardInterface } from "./interfaces/ProductCardInterface";
import getProduct from "./services/GetProduct";

interface InitialState {
  productsBySale: number[];
  pending: boolean;
  error: string | SerializedError;
  products: ProductsCardInterface[];
  product: ProductsCardInterface | null;
}

const initialState: InitialState = {
  productsBySale: [],
  pending: false,
  error: "",
  products: [],
  product: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setBySale: (state, action: PayloadAction<number[]>) => {
      state.productsBySale = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllProducts.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.pending = false;
      state.products = action.payload;
      return state;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
    builder.addCase(getProduct.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.pending = false;
      state.product = action.payload;
      return state;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
  },
});

export const { setBySale } = productsSlice.actions;
export default productsSlice.reducer;
