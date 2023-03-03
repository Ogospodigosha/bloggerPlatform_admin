import React from 'react';
import s from "../../../blogs/blogsPage/blogsContent/BlogsContent.module.css";
import {Box, Button, Divider, Toolbar} from "@mui/material";


export const PostsContent = () => {
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
                }}>Add blog</Button>
            </div>
            <div style={{display: 'flex'}}>
               laallaalala
            </div>
        </Box>
    );
}

