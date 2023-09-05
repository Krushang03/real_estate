import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://127.0.0.1:5000";

export const add_prop = createAsyncThunk(
  "addprop/add",
  async (data, { rejectWithValue }) => {
    const userDetail = JSON.parse(localStorage.getItem("userInfo"));
    const token = userDetail.token;
    try {
      const result = await axios.post(`${backendURL}/add_prop`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      console.log(result, "res");
      return result.data;
    } catch (error) {
      console.log(error, "error from addprop");
    }
  }
);


