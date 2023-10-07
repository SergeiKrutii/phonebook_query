import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isFetchCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    setCurrentUser: (state, { payload }) => {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.isLoggedIn = true;
    },
    outState: (state, _) => {
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, outState, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
