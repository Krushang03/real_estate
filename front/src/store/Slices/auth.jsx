import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../actions/authAction";

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
  refresh:false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Logout: (state) => {
      state.userToken = null;
      state.success = false;
      state.refresh=true;
      localStorage.removeItem("userInfo");
    },
  },
  extraReducers: {
    [registerUser.pending || loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled || loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload;
      state.userToken = payload.token;
    },
    [registerUser.rejected || loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { Logout } = authSlice.actions;
export default authSlice.reducer;
