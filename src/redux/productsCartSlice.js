import { createSlice } from "@reduxjs/toolkit";

export const productCartSlice = createSlice({
  name: "productsCart",
  initialState: [],
  reducers: {
    SetToken: (state, actions) => {
      return { ...state, ...actions.payload };
    },
    AddtoCart: (state) => {
      return null;
    },
  },
});
export const { SetToken, AddtoCart } = productCartSlice.actions;

export default productCartSlice.reducer;
