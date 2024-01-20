import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action);
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
    addToTotal: (state, action) => {
      state.total += action.payload;
    },
    removeFromTotal: (state, action) => {
      state.total -= action.payload;
    },
  },
});
export const { addToCart, removeFromCart, addToTotal, removeFromTotal } =
  cartSlice.actions;

export const favoritesSlice = createSlice({
  name: "favorite",
  initialState: {
    fav: [],
  },
  reducers: {
    addToFav: (state, action) => {
      state.fav.push(action.payload);
    },
    removeFromFav: (state, action) => {
      state.fav = state.fav.filter((item) => item.id != action.payload.id);
    },
  },
});

export const { addToFav, removeFromFav } = favoritesSlice.actions;

export const sortedProductSlice = createSlice({
  name: "sort",
  initialState: {
    sortedContent: [],
  },
  reducers: {
    addToSortedContent: (state, action) => {
      state.sortedContent = action.payload;
    },
  },
});

export const { addToSortedContent } = sortedProductSlice.actions;
