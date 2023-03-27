import { configureStore } from "@reduxjs/toolkit";
import productCartReducer from "./productsCartSlice";

export const store = configureStore({
  reducer: {
    productCart: productCartReducer,
  },
});
