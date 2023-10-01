import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

const backendURL = "http://127.0.0.1:5000";

export const del_prop_action = createAsyncThunk(
  "deleteproperty",
  async (ids, { rejectWithValue }) => {
    try {
      const result = await axios.delete(`${backendURL}/del_re/${ids.id}`, ids, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": ids.uid,
           
        },
      });
      toast.success('Successfully property deleted', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });


      return result.data;
    } catch (error) {
      console.log(error, "error from delete property");
    }
  }
);


