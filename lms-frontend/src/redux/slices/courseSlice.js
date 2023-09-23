import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";
import { json } from "react-router-dom";
const initialState = {
    courseList: []
}

export const  getAllCourses  = createAsyncThunk("/course/getAllCourses", async (data) => {
    try{
        const response = axiosInstance.get("/courses", data);
        toast.promise(response, {
            loading: 'Wait! fetching all courses',
            success: (data) => {
                return data?.data?.message;
            },
            error: 'Failed to load courses'
        });
        return await response;
    } catch(error){
        toast.error(error?.response?.data?.message);
    }
})

// export const  login  = createAsyncThunk("/auth/signin", async (data) => {
//     try{
//         const response = axiosInstance.post("user/login", data);
//         toast.promise(response, {
//             loading: 'Wait! authenticating your account',
//             success: (data) => {
//                 return data?.data?.message;
//             },
//             error: 'Failed to authenticate your account'
//         });
//         return await response;
//     } catch(error){
//         toast.error(error?.response?.data?.message);
//     }
// })

// export const  logout  = createAsyncThunk("/auth/logout", async () => {
//     try{
//         const response = axiosInstance.post("user/logout");
//         toast.promise(response, {
//             loading: 'Wait! logging out your account',
//             success: (data) => {
//                 return data?.data?.message;
//             },
//             error: 'Failed to logout your account'
//         });
//         return await response;
//     } catch(error){
//         toast.error(error?.response?.data?.message);
//     }
// })


const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: () => {
       
    }
});

export default courseSlice.reducer;