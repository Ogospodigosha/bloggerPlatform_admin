import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {SetAppStatus} from "../../../app/app-reducer";
import {BlogsApi, BlogType} from "../../../api/BlogsApi";
import {handleServerNetworkError} from "../../../utils/handleServerNetworkError";

const fetchBlog = createAsyncThunk('blog/fetchBlog', async (param:{id:string}, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(SetAppStatus({status: 'loading'}))
    try {
        const res = await BlogsApi.getBlog(param.id)
        dispatch(SetAppStatus({status: 'succeeded'}))
        return {blog: res.data}
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})

export const asyncActions = {
    fetchBlog
}

const initialState = {} as BlogType
export const slice = createSlice({
    name:'blog',
    initialState: initialState,
    reducers:{},
    extraReducers: builder=>{
        builder.addCase(fetchBlog.fulfilled, (state, action)=>{
            return action.payload.blog
        });

    }
})
export const blogReducer = slice.reducer