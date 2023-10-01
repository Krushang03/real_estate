import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://127.0.0.1:5000";

export const my_prop_pending_Action = createAsyncThunk(
  "myprop/pendding",
  async (id, { rejectWithValue }) => {
    try {
      // const uid = JSON.parse(localStorage.getItem("U_id"));
      const result = await axios.get(`${backendURL}/pendding_my_data/${id}`, id , {
        headers: {
          "Content-Type": "application/json",
          // Authorization: uid,
        },
      });
      console.log(result, "res rejected my prop");
      return result.data;
    } catch (error) {
      console.log(error, "error from rejected my prop");
    }
  }
);
