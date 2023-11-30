import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import usersSlice from "../features/users/usersSlice";
import cartSlice from "../features/cart/cartSlice";
import themeModeSlice from "../features/themes/themeModeSlice";
import axiosInterceptors from "./services/axiosInterceptors";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    users: usersSlice,
    cart: cartSlice,
    themeMode: themeModeSlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      axiosInterceptors
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
