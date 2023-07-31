import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Slices/auth';

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
export default store;