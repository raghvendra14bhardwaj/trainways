import { createSlice } from "@reduxjs/toolkit";

export const AuthenticaterSlice = createSlice({
  initialState: false,
  name: "authenticater",
  reducers: {
    authenticated: (state) => true,
    notAuthenticated: (state) => false,
  },
});

export const { authenticated, notAuthenticated } = AuthenticaterSlice.actions;
export default AuthenticaterSlice.reducer;
