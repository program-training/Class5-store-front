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
  iconButton: boolean;
}

const initialState: InitialState = {
  cart: [],
  iconButton: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    pullFromLocalStorage(state) {
      const cartList = JSON.parse(localStorage.getItem("cartItem") || "[]");
      cartList.length ? (state.iconButton = true) : (state.iconButton = false);
      state.cart = cartList;
    },
    addToCart(state, action: PayloadAction<ProductsCardInterface>) {
      const cartItems = [...state.cart];
      state.cart = handelCart(action.payload, cartItems);
      state.iconButton = true;
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
      !state.cart.length
        ? (state.iconButton = false)
        : (state.iconButton = true);
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
      return state;
    },
    clearCart(state) {
      state.cart = [];
      state.iconButton = false;
      localStorage.removeItem("cartItem");
    },
    setIconDisabled(state, action: PayloadAction<boolean>) {
      state.iconButton = action.payload;
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
  setIconDisabled,
} = cartSlice.actions;
export default cartSlice.reducer;
