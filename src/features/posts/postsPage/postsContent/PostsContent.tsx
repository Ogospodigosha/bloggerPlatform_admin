import React, {useEffect, useState} from 'react';
import s from "../../../blogs/blogsPage/blogsContent/BlogsContent.module.css";
import {Box, Button, Divider, Toolbar} from "@mui/material";
import {useSelector} from "react-redux";
import {AsyncPostsActions, PostsSelector} from "../../index";
import {useActions} from "../../../../utils/useAction";
import { Post } from './post/Post';
import {AddPostModal} from "../../../modals/addPostModal/AddPostModal";
import {AsyncBlogsActions, BlogsSelector} from "../../../blogs";


export const PostsContent = () => {
    const posts = useSelector(PostsSelector.selectPosts)
    const blogs = useSelector(BlogsSelector.selectBlogs)
    const [openModal, setOpenModal] = useState(false)
    const {fetchAllPosts} = useActions(AsyncPostsActions)
    const {fetchBlogs} = useActions(AsyncBlogsActions)
    const addPost = ()=>{
        setOpenModal(true)
    }
    useEffect(()=>{
        fetchAllPosts()
        fetchBlogs()
    },[])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh"}} className={s.box}>
            <AddPostModal openModal={openModal} setOpenModal={setOpenModal} blogs={blogs.items}/>
            <Toolbar/>
            <div className={s.header}>Posts</div>
            <Divider sx={{marginBottom: '23px'}}/>
            <div className={s.btnFlex}>
                <Button variant={'contained'} sx={{
                    marginRight: '64px',
                    "&.MuiButton-containedPrimary": {backgroundColor: '#F8346B'},
                    marginBottom: '29px'
                }} onClick={addPost}>Add Post</Button>
            </div>
            <div style={{display: 'flex'}}>
                {
                    posts.items && posts.items.map((el) => <Post el={el} key={el.id}/>)
                }
            </div>
        </Box>
    );
}

