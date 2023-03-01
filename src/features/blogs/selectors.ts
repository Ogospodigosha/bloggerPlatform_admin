import {AppRootState} from "../../app/store";

export const selectBlogs = (state:AppRootState)=> state.blogs
export const selectBlog = (state:AppRootState)=> state.blog