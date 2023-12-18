import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { productInCart } from "../../order/types/types";
import {
  handelAddOne,
  handelCart,
  removeItemFromCart,
  handelSubOne,
} from "./utils/functions";
import { ProductsCardInterface } from "../products/interfaces/ProductCardInterface";
import cancelProductsInOrder from "./services/cancelProductsInOrder";

interface InitialState {
  cartItems: productInCart[];
  openMessage: boolean;
  pending: boolean;
  error: string | SerializedError;
}
interface CertSet {
  id: number;
  toRemove: number;
}
const initialState: InitialState = {
  cartItems: [],
  pending: false,
  error: "",
  openMessage: false,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    pullFromLocalStorage(state) {
      const cartList = JSON.parse(localStorage.getItem("cartItem") || "[]");
      state.cartItems = cartList;
    },
    addToCart(state, action: PayloadAction<ProductsCardInterface>) {
      const cartItems = [...state.cartItems];
      state.cartItems = handelCart(action.payload, cartItems);
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      return state;
    },
    addOne(state, action: PayloadAction<number>) {
      const cartItems = [...state.cartItems];
      state.cartItems = handelAddOne(action.payload, cartItems);
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      return state;
    },
    subOne(state, action: PayloadAction<number>) {
      const cartItems = [...state.cartItems];
      state.cartItems = handelSubOne(action.payload, cartItems);
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      return state;
    },
    removeItem(state, action: PayloadAction<number>) {
      const cartItems = [...state.cartItems];
      state.cartItems = removeItemFromCart(action.payload, cartItems);
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      return state;
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem("cartItem");
    },
    setAfterCheck(state, action: PayloadAction<CertSet>) {
      const cartItems = [...state.cartItems];
      state.cartItems = handelSubOne(
        action.payload.id,
        cartItems,
        action.payload.toRemove
      );
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      return state;
    },
    setOpen(state, action: PayloadAction<boolean>) {
      state.openMessage = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(cancelProductsInOrder.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(cancelProductsInOrder.fulfilled, (state) => {
      state.pending = false;
      return state;
    });
    builder.addCase(cancelProductsInOrder.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
  },
});

export const {
  pullFromLocalStorage,
  setOpen,
  addToCart,
  addOne,
  subOne,
  removeItem,
  clearCart,
  setAfterCheck,
} = cartSlice.actions;
export default cartSlice.reducer;
