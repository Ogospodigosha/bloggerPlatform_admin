import React, {useEffect} from 'react';
import {Box, Button,  Divider, Toolbar} from "@mui/material";
import s from './BlogsContent.module.css'


export const BlogsContent = () => {
    useEffect(()=>{},[])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh"}}>
            <Toolbar/>
            <div className={s.header}>Blogs</div>
            <Divider sx={{marginBottom: '23px'}}/>
            <div className={s.btnFlex}>
                <Button variant={'contained'} sx={{ marginRight:'64px',
                    "&.MuiButton-containedPrimary": {backgroundColor: '#F8346B'},
                    marginBottom: '29px'
                }}>Add blog</Button>
            </div>
        </Box>
    );
};

