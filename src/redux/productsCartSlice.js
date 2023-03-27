import { createSlice } from "@reduxjs/toolkit";

export const productCartSlice = createSlice({
  name: "productsCart",
  initialState: [],
  reducers: {
    setToken: (state, actions) => {
      return { ...state, ...actions.payload };
    },
    addtoCart: (state, actions) => {
      state.push(actions.payload);
      return state;
    },
  },
});
export const { addtoCart, setToken } = productCartSlice.actions;

export default productCartSlice.reducer;
