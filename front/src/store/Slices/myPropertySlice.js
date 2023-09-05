import { createSlice } from "@reduxjs/toolkit";
import { add_prop } from "../actions/addProperty";

const myPropSlice = createSlice({
    name: "myprop",
    initialState: {
        usersprop: [],
        u_id: "",
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [add_prop.pending]: (state, action) => {
            state.loading = true;
            state.usersprop = null;
            state.error = null;
        },
        [add_prop.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.usersprop = payload;
            state.error = null;
        },
        [add_prop.rejected]: (state, { payload }) => {
            state.loading = false;
            state.usersprop = null;
            state.error = payload;
        },
    },
});

export default myPropSlice.reducer;
