import { createSlice } from "@reduxjs/toolkit";
import { add_prop } from "../actions/addProperty";

const addPropSlice = createSlice({
    name: "addprop",
    initialState: {
      loading: false,
      refresh: false,
      propertyadded: false,
      error: null,
      U_id: null,
    },
    reducers: {},
    extraReducers: {
      [add_prop.pending]: (state, action) => {
        state.loading = true;
        state.error = null;
      },
      [add_prop.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.refresh = true;
        state.propertyadded = true;
        state.error = null;
        state.U_id = payload.U_id;
      },
      [add_prop.rejected]: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      },
    },
  });
  
  export default addPropSlice.reducer;
  