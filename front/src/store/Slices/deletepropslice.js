import { createSlice } from "@reduxjs/toolkit";
import { del_prop_action } from "../actions/delPropAction";

const delPropSlice = createSlice({
    name: "delprop",
    initialState: {
      loading: false,
      error: null,
      
      msg: null,
      searchData: [],
    },
    reducers: {},
    extraReducers: {
      [del_prop_action.pending]: (state, action) => {
        state.loading = true;
        state.error = null;
      },
      [del_prop_action.fulfilled]: (state, { payload }) => {
        state.loading = false;
       
        state.msg = payload;
        state.error = null;
      },
      [del_prop_action.rejected]: (state, { payload }) => {
        state.loading = false;
        
        state.error = payload;
      },
    },
  });
  
  export default delPropSlice.reducer;
  