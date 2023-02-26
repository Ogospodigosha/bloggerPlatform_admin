import React from 'react';
import {Box, CssBaseline} from "@mui/material";
import {BlogsContent} from "./blogsContent/BlogsContent";


export const BlogsPage = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <div style={{width:'252px'}}></div>
            <BlogsContent/>
        </Box>
    );
};

