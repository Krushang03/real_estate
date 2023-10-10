import { createSlice } from "@reduxjs/toolkit";
import { SearchPropAction } from "../actions/searchpropertyAction";

const initialState = {
    loading: false,
    searchdata: [],
    searchdataNavigate: null,
    error: null,
    success: false,
};

const SearchPropSlice = createSlice({
    name: "searchprop",
    initialState,
    reducers: {
         ClearSearchData: (state) => {
            state.searchdata = null;
          },
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
export const { ClearSearchData } = SearchPropSlice.actions;
export default SearchPropSlice.reducer;
