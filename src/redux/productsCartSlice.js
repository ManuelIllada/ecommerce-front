import { createSlice, current } from "@reduxjs/toolkit";

export const productCartSlice = createSlice({
  name: "productsCart",
  initialState: [],
  reducers: {
    /*  setToken: (state, actions) => {
      return { ...state, ...actions.payload };
    }, */
    addtoCart: (state, actions) => {
      console.log(current.state);
      /*  state.push(actions.payload); */
      return state;
    },
  },
});
export const { addtoCart } = productCartSlice.actions;

export default productCartSlice.reducer;
