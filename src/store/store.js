import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api";
import { cartSlice, favoritesSlice } from "./reducers";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartSlice.reducer,
    fav: favoritesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
