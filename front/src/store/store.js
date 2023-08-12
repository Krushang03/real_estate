import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Slices/auth';
import addpropSlice from "./Slices/addpropSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    addprop: addpropSlice,
  },
});
export default store;
