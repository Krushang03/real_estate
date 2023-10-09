import { createSlice } from "@reduxjs/toolkit";
import { PropDealTrueAction } from "../actions/propdealtrueAction"
import { GetPropDealTrueAction } from "../actions/propdealtrueAction"

const initialState = {
    loading2: false,
    isloading: false,
    gettruepropdealdata: [],
    Updatedata: [],
    error: null,
    iserror: null,
    success2: false,
    issuccess: false,
};

const PropertyDealCngAndGetSlice = createSlice({
    name: "propertydeal",
    initialState,
    reducers: {

    },
    extraReducers: {
        [GetPropDealTrueAction.pending]: (state) => {
            state.loading2 = true;
            state.error = null;
        },
        [GetPropDealTrueAction.fulfilled]: (state, { payload }) => {
            state.loading2 = false;
            state.success2 = true;
            state.gettruepropdealdata = payload;
        },
        [GetPropDealTrueAction.rejected]: (state, action) => {
            state.loading2 = false;
            state.error = action.payload;
            state.success2 = false;
        },
        [PropDealTrueAction.pending]: (state) => {
            state.isloading = true;
            state.iserror = null;
        },
        [PropDealTrueAction.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            state.issuccess = true;
            state.Updatedata = payload;
        },
        [PropDealTrueAction.rejected]: (state, action) => {
            state.isloading = false;
            state.iserror = action.payload;
            state.issuccess = false;
        },

    },
});

export default PropertyDealCngAndGetSlice.reducer;