import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import getAllProducts from "./services/getAllProducts";
import { ProductsCardInterface } from "./interfaces/ProductCardInterface";
import getProduct from "./services/getProduct";
import checkProductsInStock from "./services/checkProductsInStock";

type InStock = {
  productId: number;
  requiredQuantity: number;
};
type NotInStock = {
  product: ProductsCardInterface;
  requiredQuantity: number;
};
type Response = {
  inStock: InStock[];
  notInStock: NotInStock[];
};

interface InitialState {
  productsBySale: number[];
  pending: boolean;
  error: string | SerializedError;
  products: ProductsCardInterface[];
  product: ProductsCardInterface | null;
  availabilityStatusProductsStock: Response;
}

const initialState: InitialState = {
  productsBySale: [],
  pending: false,
  error: "",
  products: [],
  product: null,
  availabilityStatusProductsStock: { inStock: [], notInStock: [] },
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
    builder.addCase(checkProductsInStock.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(checkProductsInStock.fulfilled, (state, action) => {
      state.pending = false;
      state.availabilityStatusProductsStock = action.payload;
      return state;
    });
    builder.addCase(checkProductsInStock.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
  },
});

export const { setBySale } = productsSlice.actions;
export default productsSlice.reducer;
