import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BlogsApi, BlogsResponseType} from "../../../api/BlogsApi";
import {SetAppStatus} from "../../../app/app-reducer";

const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (param, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(SetAppStatus({status: 'loading'}))
    try {
        const res = await BlogsApi.getBlogs()
        dispatch(SetAppStatus({status: 'succeeded'}))
        return {blogs: res.data}
    } catch (e) {
        return rejectWithValue(null)
    }
})
const addBlog = createAsyncThunk('blogs/addBlogBlogs', async (param:{name:string,description: string,  websiteUrl: string }, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(SetAppStatus({status: 'loading'}))
    try {
        const res = await BlogsApi.createBlog( param.name,param.description,param.websiteUrl)
        dispatch(SetAppStatus({status: 'succeeded'}))
        return {blog: res.data}
    } catch (e) {
        return rejectWithValue(null)
    }
})
export const asyncActions = {
    fetchBlogs,
    addBlog
}
const initialState = {} as BlogsResponseType
export const slice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchBlogs.fulfilled, (state, action)=>{
            return action.payload.blogs
        });
        builder.addCase(addBlog.fulfilled, (state, action)=>{
            if (state.items) {
                state.items.push(action.payload.blog)
            }
        });
    },
})
export const blogsReducer = slice.reducer