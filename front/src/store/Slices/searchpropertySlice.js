import { createSlice } from "@reduxjs/toolkit";
import { SearchPropAction } from "../actions/searchpropertyAction";

const initialState = {
    loading: false,
    searchdata: [],
    error: null,
    success: false,
};

const SearchPropSlice = createSlice({
    name: "searchprop",
    initialState,
    reducers: {

    },
    extraReducers: {
        [SearchPropAction.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [SearchPropAction.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.success = true;
            state.searchdata = payload;
        },
        [SearchPropAction.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export default SearchPropSlice.reducer;
