import { createSlice } from "@reduxjs/toolkit";
import type { SerializedError } from "@reduxjs/toolkit";

import registerOrder from "./services/registerOrder";

type CartItemSchema = {
  productId: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

type RegisterOrderType = "standard" | "express" | "pickup";

type RegisterShippingDetails = {
  address: string;
  contactNumber: string;
};
type RegisterOrder = {
  _id: string;
  cartItems: CartItemSchema[];
  orderTime: string;
  status: string;
  price: number;
  shippingDetails: RegisterShippingDetails;
};

interface InitialState {
  pending: boolean;
  error: string | SerializedError;
  registerOrder: RegisterOrder | null;
  orderType: RegisterOrderType;
  total: number;
}

const initialState: InitialState = {
  pending: false,
  error: "",
  registerOrder: null,
  orderType: "standard",
  total: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setShippingDetails: (state, action) => {
      if (state.orderType) {
        state.orderType = action.payload;
      }
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(registerOrder.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(registerOrder.fulfilled, (state, action) => {
      state.pending = false;
      state.registerOrder = action.payload;
      return state;
    });
    builder.addCase(registerOrder.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
  },
});

export const { setShippingDetails, setTotal } = orderSlice.actions;
export default orderSlice.reducer;
