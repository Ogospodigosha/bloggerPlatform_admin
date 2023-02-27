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
    useEffect(() => {
        fetchBlogs()
    }, [])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh"}}>
            <Toolbar/>
            <div className={s.header}>Blogs</div>
            <Divider sx={{marginBottom: '23px'}}/>
            <div className={s.btnFlex}>
                <Button variant={'contained'} sx={{
                    marginRight: '64px',
                    "&.MuiButton-containedPrimary": {backgroundColor: '#F8346B'},
                    marginBottom: '29px'
                }}>Add blog</Button>
            </div>
            <div style={{display: 'flex'}}>
                <div className={s.widthDrawer}></div>
                <BlogsList items={blogs.items}/>
            </div>
        </Box>
    );
};

