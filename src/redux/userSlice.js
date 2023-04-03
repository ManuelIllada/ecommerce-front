import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, actions) => {
      return { ...state, ...actions.payload };
    },
    logOutUser: (state, action) => {
      return null;
    },
  },
});
export const { setUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
