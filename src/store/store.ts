import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import usersSlice from "../features/users/usersSlice";
import cartSlice from "../features/cart/cartSlice";
import themeModeSlice from "../features/themes/themeModeSlice";
import axiosInterceptors from "./services/axiosInterceptors";
import tokenSlice from "../features/token/tokenSlice";
import orderSlice from "../order/orderSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    order: orderSlice,
    users: usersSlice,
    cart: cartSlice,
    themeMode: themeModeSlice,
    token: tokenSlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      axiosInterceptors
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
