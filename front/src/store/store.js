import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Slices/auth';
import addpropSlice from "./Slices/addpropSlice";
import getpropSlice from "./Slices/getProp";
import myPropertySlice from "./Slices/myPropertySlice";
import singlePropertySlice from "./Slices/singlePropertySlice";
import GetUpdateProfileSlice from "./Slices/profilegetupdateSlice"
import UpdatePasswordSlice from "./Slices/passwordSlice";
import deletepropslice from "./Slices/deletepropslice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    addprop: addpropSlice,
    getprop: getpropSlice,
    myprop: myPropertySlice,
    singleprop: singlePropertySlice,
    getupdateprofile: GetUpdateProfileSlice,
    password: UpdatePasswordSlice,
    delprop: deletepropslice,
  },
});
export default store;
