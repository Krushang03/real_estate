import { createSlice } from "@reduxjs/toolkit";
import {GetPropertyUserAction} from "../actions/propaddeduserAction"

const getpropuserdetailsSlice = createSlice({
    name: "getpropuserdetails",
    initialState: {
      getusersdetails: [],
      loading: false,
      refresh: false,
      error: null,
      searchData: [],
    },
    reducers: {},
    extraReducers: {
      [GetPropertyUserAction.pending]: (state, action) => {
        state.loading = true;
        state.getusersdetails = null;
        state.error = null;
      },
      [GetPropertyUserAction.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.refresh = true;
        state.getusersdetails = payload;
        state.error = null;
      },
      [GetPropertyUserAction.rejected]: (state, { payload }) => {
        state.loading = false;
        state.getusersdetails = null;
        state.error = payload;
      }
    },
  });

export default getpropuserdetailsSlice.reducer;
