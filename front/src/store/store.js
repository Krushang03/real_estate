import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Slices/auth';
import addpropSlice from "./Slices/addpropSlice";
import getpropSlice from "./Slices/getProp";
import myPropertySlice from "./Slices/myPropertySlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    addprop: addpropSlice,
    getprop: getpropSlice,
    myprop: myPropertySlice
  },
});
export default store;
