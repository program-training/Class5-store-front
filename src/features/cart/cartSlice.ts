import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { productInCart } from "../../order/types/types";
import {
  handelAddOne,
  handelCart,
  removeItemFromCart,
  handelSubOne,
} from "./utils/functions";

interface InitialState {
  cart: productInCart[];
}

const initialState: InitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    pullFromLocalStorage(state) {
      const cartList = JSON.parse(localStorage.getItem("cartItem") || "[]");
      state.cart = cartList;
    },
    addToCart(state, action: PayloadAction<number>) {
      const cartItems = [...state.cart];
      state.cart = handelCart(action.payload, cartItems);
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
      return state;
    },
    addOne(state, action: PayloadAction<number>) {
      const cartItems = [...state.cart];
      state.cart = handelAddOne(action.payload, cartItems);
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
      return state;
    },
    subOne(state, action: PayloadAction<number>) {
      const cartItems = [...state.cart];
      state.cart = handelSubOne(action.payload, cartItems);
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
      return state;
    },
    removeItem(state, action: PayloadAction<number>) {
      const cartItems = [...state.cart];
      state.cart = removeItemFromCart(action.payload, cartItems);
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
      return state;
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cartItem");
    },
  },
});

export const {
  pullFromLocalStorage,
  addToCart,
  addOne,
  subOne,
  removeItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
