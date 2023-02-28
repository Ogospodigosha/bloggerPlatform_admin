import { Box, Breadcrumbs, Button, Divider,  Link, TextField, Toolbar } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./AddBlogContent.module.css";
import WestIcon from '@mui/icons-material/West';
import {AddBlogForm} from "./addBlogForm/AddBlogForm";



export const AddBlogContent = () => {
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
           <AddBlogForm/>
        </Box>
    );
};

