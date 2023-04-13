import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, actions) => {
      return { ...state, ...actions.payload };
    },
    edit: (state, action) => {
      return { ...state, ...action.payload };
    },
    logOutUser: (state, action) => {
      return null;
    },
  },
});

export const { setUser, edit, logOutUser } = userSlice.actions;
export default userSlice.reducer;
