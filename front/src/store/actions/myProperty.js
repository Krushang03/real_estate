import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://127.0.0.1:5000";

export const my_prop_Action = createAsyncThunk(
  "myprop/pendding",
  async (data, { rejectWithValue }) => {
    try {
      const userDetail = JSON.parse(localStorage.getItem("userInfo"));
      const result = await axios.get(`${backendURL}/my_data/${userDetail.u_id}/${data}`, data ,{
        headers: {
          "Content-Type": "application/json",
          // "Authorization": userDetail.token,
        },
      });
      console.log(result, "res rejected my prop");
      return result.data;
    } catch (error) {
      console.log(error, "error from rejected my prop");
    }
  }
);
