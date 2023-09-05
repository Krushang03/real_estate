import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {  useSelector } from "react-redux";

const backendURL = "http://127.0.0.1:5000";

export const my_prop = createAsyncThunk(
  "myprop/get",
  async (data, { rejectWithValue }) => {
    const { u_id } = useSelector((state) => state.addprop);

    try {
      const result = await axios.get(`${backendURL}/my_data`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: u_id,
        },
      });
      console.log(result, "res myprop");
      return result.data;
    } catch (error) {
      console.log(error, "error from myprop");
    }
  }
);
