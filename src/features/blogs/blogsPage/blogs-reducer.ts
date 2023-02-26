import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BlogsApi, BlogsResponseType} from "../../../api/BlogsApi";

const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (param, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    // dispatch(setAppStatus({status: 'loading'}))
    try {
        const res = await BlogsApi.getBlogs()
        // dispatch(setAppStatus({status: 'succeeded'}))
        return {blogs: res.data}
    } catch (e) {
        return rejectWithValue(null)
    }
})
export const asyncActions = {
    fetchBlogs
}
const initialState = {} as BlogsResponseType
export const slice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchBlogs.fulfilled, (state, action)=>{
            return action.payload.blogs
        })
    },
})
export const blogsReducer = slice.reducer