import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, actions) => {
      return { ...state, ...actions.payload };
    },
    logOut(state, action) {
      return null;
    },
  },
});
export const { setUser, logOut } = userSlice.actions;

export default userSlice.reducer;
