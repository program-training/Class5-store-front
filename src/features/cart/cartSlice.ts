import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { productInCart } from "../../order/types/types";
import {
  handelAddOne,
  handelCart,
  removeItemFromCart,
  handelSubOne,
} from "./utils/functions";
import { ProductsCardInterface } from "../products/interfaces/ProductCardInterface";

interface InitialState {
  cart: productInCart[];
  openMessage: boolean;
}
interface CertSet {
  id: number;
  toRemove: number;
}

const initialState: InitialState = {
  cart: [],
  openMessage: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    pullFromLocalStorage(state) {
      const cartList = JSON.parse(localStorage.getItem("cartItem") || "[]");
      state.cart = cartList;
    },
    addToCart(state, action: PayloadAction<ProductsCardInterface>) {
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
    clearCart(state) {
      state.cart = [];
      localStorage.removeItem("cartItem");
    },
    setAfterCheck(state, action: PayloadAction<CertSet>) {
      const cartItems = [...state.cart];
      state.cart = handelSubOne(
        action.payload.id,
        cartItems,
        action.payload.toRemove
      );
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
      return state;
    },
    setOpen(state, action: PayloadAction<boolean>) {
      state.openMessage = action.payload;
    },
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
