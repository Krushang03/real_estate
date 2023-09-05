import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Slices/auth';
import addpropSlice from "./Slices/addpropSlice";
import getpropSlice from "./Slices/getProp";
import myPropertySlice from "./Slices/myPropertySlice";
import singlePropertySlice from "./Slices/singlePropertySlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    addprop: addpropSlice,
    getprop: getpropSlice,
    myprop: myPropertySlice,
    singleprop: singlePropertySlice
  },
});
export default store;
