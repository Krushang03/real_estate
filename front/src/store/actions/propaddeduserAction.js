import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://127.0.0.1:5000";

export const GetPropertyUserAction = createAsyncThunk(
  "getprop/userdetails",
  async (id, { rejectWithValue }) => {
    const userDetail = JSON.parse(localStorage.getItem("userInfo"));
    const token = userDetail.token;
    console.log(token);
    try {
      const result = await axios.get(`${backendURL}/prop_adder_data/${id}`,id, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: token,
        },
      });
      console.log(result, "res getprop user details");
      return result.data;
    } catch (error) {
      console.log(error, "error from getprop user details");
    }
  }
);
