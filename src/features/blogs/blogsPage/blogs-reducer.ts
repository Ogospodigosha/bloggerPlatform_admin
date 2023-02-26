import {createSlice} from "@reduxjs/toolkit";
import {BlogsResponseType} from "../../../api/BlogsApi";



const initialState = {} as BlogsResponseType
export const slice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {

    },
})
export const blogsReducer = slice.reducer