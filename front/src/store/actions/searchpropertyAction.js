import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://127.0.0.1:5000";

export const SearchPropAction = createAsyncThunk(
    "Searchproperty",
    async (item, { rejectWithValue }) => {
        const searchdata = JSON.stringify(item)
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json'
                },
            }
            const result = await axios.post(
                `${backendURL}/search_prop`,
                searchdata, config,

            );
            return result.data;
        } catch (error) {
            console.log(error, "err from search prop");
        }
    }
);
