import React, {useEffect} from 'react';
import s from "../../../blogs/blogsPage/blogsContent/BlogsContent.module.css";
import {Box, Button, Divider, Toolbar} from "@mui/material";
import {useSelector} from "react-redux";
import {AsyncPostsActions, PostsSelector} from "../../index";
import {useActions} from "../../../../utils/useAction";
import { Post } from './post/Post';


export const PostsContent = () => {
    const posts = useSelector(PostsSelector.selectPosts)
    const {fetchAllPosts} = useActions(AsyncPostsActions)
    useEffect(()=>{
        fetchAllPosts()
    },[])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh"}} className={s.box}>
            <Toolbar/>
            <div className={s.header}>Posts</div>
            <Divider sx={{marginBottom: '23px'}}/>
            <div className={s.btnFlex}>
                <Button variant={'contained'} sx={{
                    marginRight: '64px',
                    "&.MuiButton-containedPrimary": {backgroundColor: '#F8346B'},
                    marginBottom: '29px'
                }}>Add Post</Button>
            </div>
            <div style={{display: 'flex'}}>
                {
                    posts.items && posts.items.map((el) => <Post el={el} key={el.id}/>)
                }
            </div>
        </Box>
    );
}

