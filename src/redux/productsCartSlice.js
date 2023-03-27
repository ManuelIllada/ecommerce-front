import { createSlice } from "@reduxjs/toolkit";

export const productCartSlice = createSlice({
  name: "productsCart",
  initialState: [],
  reducers: {
    setToken: (state, actions) => {
      return { ...state, ...actions.payload };
    },
    addtoCart: (state, actions) => {
      const productExist = state.find(
        (product) => product.id === actions.payload.id
      );
      if (productExist) {
        return state.map((item) => {
          if (item.id !== actions.payload.id) return item;
          return { ...item, quantity: Number(item.quantity) + 1 };
        });
      } else {
        state.push({ ...actions.payload, quantity: 1 });
      }
    },
  },
});
export const { addtoCart, setToken } = productCartSlice.actions;

export default productCartSlice.reducer;
