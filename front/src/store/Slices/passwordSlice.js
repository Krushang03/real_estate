import { createSlice } from "@reduxjs/toolkit";
import { ResetPasswordAction } from "../actions/password";

const UpdatePasswordSlice = createSlice({
    name: "password",
    initialState: {
        loading: false,
        refresh: false,
        error: null,
        passwordreset: "",
    },
    reducers: {},
    extraReducers: {
        [ResetPasswordAction.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [ResetPasswordAction.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.passwordreset = payload;
            state.error = null;
        },
        [ResetPasswordAction.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    },
});

export default UpdatePasswordSlice.reducer;
