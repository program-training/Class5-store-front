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

enum RegisterOrderType {
  "standard",
  "express",
  "pickup",
}

type RegisterShippingDetails = {
  address: string;
  contactNumber: string;
  orderType: RegisterOrderType;
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
}

const initialState: InitialState = {
  pending: false,
  error: "",
  registerOrder: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setShippingDetails: (state, action) => {
      if (state.registerOrder) {
        state.registerOrder.shippingDetails.orderType = action.payload;
      }
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

export const { setShippingDetails } = orderSlice.actions;
export default orderSlice.reducer;
