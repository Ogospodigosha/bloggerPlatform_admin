import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BlogsApi, BlogsResponseType} from "../../../api/BlogsApi";
import {SetAppStatus} from "../../../app/app-reducer";
import {handleServerNetworkError} from "../../../utils/handleServerNetworkError";

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
        handleServerNetworkError(e, dispatch)
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
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})
 const editBlog = createAsyncThunk('blogs/editBlog', async (param:{id:string, name: string, description: string, websiteUrl: string}, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(SetAppStatus({status: 'loading'}))
    try {
        const res = await BlogsApi.editBlog(param.name, param.description, param.websiteUrl, param.id)
        dispatch(SetAppStatus({status: 'succeeded'}))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})
const removeBlog = createAsyncThunk('blogs/removeBlog', async (param:{id:string}, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(SetAppStatus({status: 'loading'}))
    try {
        const res = await BlogsApi.deleteBlog(param.id)
        dispatch(fetchBlogs())
        dispatch(SetAppStatus({status: 'succeeded'}))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})
export const asyncActions = {
    fetchBlogs,
    addBlog,
    editBlog,
    removeBlog

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