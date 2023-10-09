import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {  toast } from 'react-toastify';

const backendURL = "http://127.0.0.1:5000";

export const PropDealTrueAction = createAsyncThunk(
    "propdeal/update",
    async (id, { rejectWithValue }) => {
        try {
            const result = await axios.patch(
                `${backendURL}/change_prop_deal/${id}`,
                id,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            toast.success('Property deal has been updated', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            console.log(result, "res update property deal true");
            return result.data;
        } catch (error) {
            console.log(error, "err from update property deal true");
        }
    }
);

export const GetPropDealTrueAction = createAsyncThunk(
    "propdeal/get",
    async (data, { rejectWithValue }) => {
        try {
            const result = await axios.get(
                `${backendURL}/display_prop_deal`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(result, "res get property deal true");
            return result.data;
        } catch (error) {
            console.log(error, "err from get property deal true");
        }
    }
);