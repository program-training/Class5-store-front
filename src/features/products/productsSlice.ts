import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  productsBySale: number[];
}

const initialState: InitialState = {
  productsBySale: [],
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
