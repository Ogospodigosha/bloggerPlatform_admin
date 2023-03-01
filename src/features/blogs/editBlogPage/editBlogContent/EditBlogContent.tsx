import React, {useEffect, useState} from 'react';
import {Box, Breadcrumbs, Divider, Link, Toolbar} from "@mui/material";
import s from "../../addBlogPage/addBlogContent/AddBlogContent.module.css";
import {NavLink, useParams} from "react-router-dom";
import WestIcon from "@mui/icons-material/West";


export const EditBlogContent = () => {
    const {blogName} = useParams()

    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh"}} className={s.box}>
            <Toolbar/>
            <Breadcrumbs separator="⏵" aria-label="breadcrumb">
                <Link underline="none" color="black" href="/" className={s.header} >
                    Blogs
                </Link>
                <Link underline="none" color="black" className={s.nameBlog}>
                    {blogName}
                </Link>
                <Link underline="none" color="black" className={s.nameBlog}>
                    Edit
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
            {/*<AddBlogForm/>*/}
        </Box>
    );
};
