import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SetAppStatus } from "../../../app/app-reducer";
import {PostsApi, PostsResponseType} from "../../../api/PostsApi";
import {handleServerNetworkError} from "../../../utils/handleServerNetworkError";



const initialState = {} as PostsResponseType



const fetchPostsById = createAsyncThunk('posts/fetchPostsById', async (param:{id: string}, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(SetAppStatus({status: 'loading'}))
    try {
        const res = await PostsApi.getPostsById(param.id)
        dispatch(SetAppStatus({status: 'succeeded'}))
        return {posts: res.data}
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})
const fetchAllPosts = createAsyncThunk('posts/fetchAllPosts', async (param, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(SetAppStatus({status: 'loading'}))
    try {
        const res = await PostsApi.getAllPosts()
        dispatch(SetAppStatus({status: 'succeeded'}))
        return {posts: res.data}
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})
const removePost = createAsyncThunk('posts/removePost', async (param:{blogId:string, postId:string}, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(SetAppStatus({status: 'loading'}))
    try {
        const res = await PostsApi.removePost(param.blogId, param.postId)
        dispatch(SetAppStatus({status: 'succeeded'}))
        dispatch(fetchAllPosts())
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})
const addPost = createAsyncThunk('posts/addPostPost', async (param:{blogId:string, title:string, shortDescription: string, content: string}, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(SetAppStatus({status: 'loading'}))
    try {
        const res = await PostsApi.addPost(param.blogId, param.title, param.shortDescription, param.content)
        dispatch(SetAppStatus({status: 'succeeded'}))
        dispatch(fetchAllPosts())
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})
export const asyncActions ={
    fetchPostsById,
    fetchAllPosts,
    removePost,
    addPost
}

export const slice = createSlice({
    name:'posts',
    initialState: initialState,
    reducers:{},
    extraReducers: builder=>{
        builder.addCase(fetchPostsById.fulfilled, (state, action)=>{
            return action.payload.posts
        });
        builder.addCase(fetchAllPosts.fulfilled, (state, action)=>{
            return action.payload.posts
        });

    }
})
export const postsReducer = slice.reducer