import { createSlice } from "@reduxjs/toolkit";
import { my_prop_pending_Action } from "../actions/myProperty";

const myPropSlice = createSlice({
    name: "myprop",
    initialState: {
        usersproppendding: [],
        u_id: "",
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [my_prop_pending_Action.pending]: (state, action) => {
            state.loading = true;
            state.usersproppendding = null;
            state.error = null;
        },
        [my_prop_pending_Action.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.usersproppendding = payload;
            state.error = null;
        },
        [my_prop_pending_Action.rejected]: (state, { payload }) => {
            state.loading = false;
            state.usersproppendding = null;
            state.error = payload;
        },
    },
});

export default myPropSlice.reducer;
