import { createSlice } from "@reduxjs/toolkit";
import { add_prop } from "../actions/addProperty";

const addPropSlice = createSlice({
    name: "addprop",
    initialState: {
      users: [],
      loading: false,
      refresh: false,
      error: null,
      searchData: [],
    },
    reducers: {},
    extraReducers: {
      [add_prop.pending]: (state, action) => {
        state.loading = true;
        state.users = null;
        state.error = null;
      },
      [add_prop.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.refresh = true;
        state.users = payload;
        state.error = null;
      },
      [add_prop.rejected]: (state, { payload }) => {
        state.loading = false;
        state.users = null;
        state.error = payload;
      }
    },
  });
  
  export default addPropSlice.reducer;
  