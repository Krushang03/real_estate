import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

const backendURL = "http://127.0.0.1:5000";

export const ResetPasswordAction = createAsyncThunk(
    "password/reset",
    async (data, { rejectWithValue }) => {
        const userDetail = JSON.parse(localStorage.getItem("userInfo"));
        const token = userDetail.token;
        try {
            const result = await axios.patch(`${backendURL}/change_user_password`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            toast.success('Reset Password Successfully', {
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
            console.log(error, "error from reset password");
        }
    }
);


