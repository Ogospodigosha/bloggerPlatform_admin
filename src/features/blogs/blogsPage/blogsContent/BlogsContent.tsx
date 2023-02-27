import React, {useEffect} from 'react';
import {Box, Button, Divider, Toolbar} from "@mui/material";
import s from './BlogsContent.module.css'
import {useSelector} from "react-redux";
import {AsyncBlogsActions, BlogsSelector} from "../../index";
import {useActions} from "../../../../utils/useAction";
import {BlogsList} from "../blogsList/BlogsList";


export const BlogsContent = () => {
    const blogs = useSelector(BlogsSelector.selectBlogs)
    const {fetchBlogs} = useActions(AsyncBlogsActions)
    const addBlog = ()=>{}
    useEffect(() => {
        fetchBlogs()
    }, [])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh"}} className={s.box}>
            <Toolbar/>
                <div className={s.header}>Blogs</div>
            <Divider sx={{marginBottom: '23px'}}/>
            <div className={s.btnFlex}>
                <Button variant={'contained'} sx={{
                    marginRight: '64px',
                    "&.MuiButton-containedPrimary": {backgroundColor: '#F8346B'},
                    marginBottom: '29px'
                }} onClick={addBlog}>Add blog</Button>
            </div>
            <div style={{display: 'flex'}}>
                <BlogsList items={blogs.items}/>
            </div>
        </Box>
    );
};

