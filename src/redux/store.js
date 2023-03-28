import { configureStore } from "@reduxjs/toolkit";
import productCartReducer from "./productsCartSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    productCart: productCartReducer,
    user: userReducer,
  },
});
