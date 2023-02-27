import { Box, Breadcrumbs, Button, Divider,  Link, TextField, Toolbar } from '@mui/material';

import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./AddBlogContent.module.css";
import WestIcon from '@mui/icons-material/West';

export const AddBlogContent = () => {
    const addBlog = ()=>{

    }
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh"}} className={s.box}>
            <Toolbar/>
            <Breadcrumbs separator="⏵" aria-label="breadcrumb">
                <Link underline="none" color="black" href="/" className={s.header} >
                    Blogs
                </Link>
                <Link underline="none" color="black" className={s.nameBlog}>
                    add
                </Link>
            </Breadcrumbs>
            <Divider sx={{marginBottom:'35px', marginTop: '7px'}}/>
            <NavLink to={'/'} className={s.link}>
                <div className={s.flex}>
                    <WestIcon className={s.colorIcon}/>
                    <div className={s.margin}>Back to blogs</div>
                </div>
            </NavLink>
            <div style={{width: '100%', height: '312px', backgroundColor: 'white', marginBottom: '24px'}}></div>
            <TextField id="standard-basic" label="Blog Name" variant="standard" fullWidth style={{marginBottom: "24px"}}/>
            <TextField id="standard-basic" label="Website" variant="standard" fullWidth style={{marginBottom: "54px"}}/>
            <textarea style={{backgroundColor: 'inherit', width: '100%', height:"120px", marginBottom: '24px', marginRight: '64px'}}></textarea>
            <div style={{display: 'flex', justifyContent:'flex-end'}}>
                <Button variant={'contained'} sx={{
                    marginRight: '64px',
                    "&.MuiButton-containedPrimary": {backgroundColor: '#F8346B'},
                    marginBottom: '29px'
                }} onClick={addBlog}>Add blog</Button>
            </div>
        </Box>
    );
};

