import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Slices/auth';
import addpropSlice from "./Slices/addpropSlice";
import getpropSlice from "./Slices/getProp";

const store = configureStore({
  reducer: {
    auth: authSlice,
    addprop: addpropSlice,
    getprop: getpropSlice,
  },
});
export default store;
