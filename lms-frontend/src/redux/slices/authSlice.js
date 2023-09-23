import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";
import { json } from "react-router-dom";
const initialState = {
    isLoggedIn :  localStorage.getItem("isLoggedIn") ||  false,
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem("data") || {}
}

export const  createAccount  = createAsyncThunk("/auth/signup", async (data) => {
    try{
        const response = axiosInstance.post("user/registor", data);
        toast.promise(response, {
            loading: 'Wait! creating your account',
            success: (data) => {
                return data?.data?.message;
            },
            error: 'Failed to create your account'
        });
        return await response;
    } catch(error){
        toast.error(error?.response?.data?.message);
    }
})

export const  login  = createAsyncThunk("/auth/signin", async (data) => {
    try{
        const response = axiosInstance.post("user/login", data);
        toast.promise(response, {
            loading: 'Wait! authenticating your account',
            success: (data) => {
                return data?.data?.message;
            },
            error: 'Failed to authenticate your account'
        });
        return await response;
    } catch(error){
        toast.error(error?.response?.data?.message);
    }
})

export const  logout  = createAsyncThunk("/auth/logout", async () => {
    try{
        const response = axiosInstance.post("user/logout");
        toast.promise(response, {
            loading: 'Wait! logging out your account',
            success: (data) => {
                return data?.data?.message;
            },
            error: 'Failed to logout your account'
        });
        return await response;
    } catch(error){
        toast.error(error?.response?.data?.message);
    }
})


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled,  (state,action) => {
            console.log(action);
            // localStorage.setItem("data", JSON.stringify(action?.payload?.data))
        })
        .addCase(logout.fulfilled, (state) => {
            localStorage.clear();
            state.isLoggedIn = false;
            state.role = " ";
            state.data =  {};
        } )
    }
});

export default authSlice.reducer;