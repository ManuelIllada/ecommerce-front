import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, actions) => {
      return { ...state, ...actions.payload };
    },
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
