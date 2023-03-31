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
    uptdateQuantity: (state, actions) => {
      const productExist = state.find(
        (product) => product.id === actions.payload.id
      );
      productExist.quantity = actions.payload.value;
    },
    deleteElement: (state, actions) => {
      return state.filter((item) => item.id !== actions.payload.id);
    },
  },
});
export const {
  addtoCart,
  setToken,
  uptdateQuantity,
  deleteElement,
} = productCartSlice.actions;

export default productCartSlice.reducer;
