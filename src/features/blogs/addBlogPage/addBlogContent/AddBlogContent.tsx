import { Box, Breadcrumbs, Button, Divider,  Link, TextField, Toolbar } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./AddBlogContent.module.css";
import WestIcon from '@mui/icons-material/West';



export type FormikErrorType = {
    name?: string
    description?: string
    websiteUrl?: string
}


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
            {/*<TextField id="standard-basic" label="Blog Name" variant="standard" fullWidth style={{marginBottom: "24px"}}/>*/}
            {/*<TextField id="standard-basic" label="Website" variant="standard" fullWidth style={{marginBottom: "54px"}}/>*/}
            {/*/!*<textarea style={{backgroundColor: 'inherit', width: '100%', height:"120px", marginBottom: '24px', marginRight: '64px'}}></textarea>*!/*/}
            {/*<div style={{display: 'flex', justifyContent:'flex-end'}}>*/}
            {/*    <Button variant={'contained'} sx={{*/}
            {/*        marginRight: '64px',*/}
            {/*        "&.MuiButton-containedPrimary": {backgroundColor: '#F8346B'},*/}
            {/*        marginBottom: '29px'*/}
            {/*    }} onClick={addBlog}>Add blog</Button>*/}
            {/*</div>*/}
           <Formik initialValues={{name: '', description:'', websiteUrl: ''}}
                   validate={values => {
                       const errors: FormikErrorType = {};
                       if (!values.name) {
                           errors.name = 'Required';
                       }

                       if (!values.websiteUrl) {
                           errors.websiteUrl = 'Required'
                       } else if (/^https?:\/\/(?:www\.)?[A-Z0-9._%+-]+[A-Z0-9.-]+\.[A-Z]{2,4}.[A-Z]{2,4}$/i.test(values.websiteUrl))
                           errors.websiteUrl = 'websiteUrl must be a URL address'

                       if (!values.description) {
                           errors.description = 'Required';
                       }

                        return errors
                   }}
                   onSubmit={(values, actions) => {
                       debugger
                       if (values.name && values.websiteUrl && values.description)
                           // dispatch(registrationTC(values.email, values.password))
                           console.log('123123')
                   }}
           >
               {({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     isSubmitting,
                     /* and other goodies */
                 }) => (
                   <form onSubmit={handleSubmit}>
                       <TextField
                           id="standard-basic"
                           label="Blog Name"
                           variant="standard"
                           fullWidth
                           type="text"
                           name="name"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name}
                           style={{marginBottom: "24px"}}
                       />
                       {errors.name && touched.name && errors.name}
                       <TextField
                           style={{marginBottom: "54px"}}
                           id="standard-basic"
                           label="Website"
                           variant="standard"
                           fullWidth
                           type="text"
                           name="websiteUrl"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.websiteUrl}
                       />
                       {errors.websiteUrl && touched.websiteUrl && errors.websiteUrl}
                       <TextField
                           label="description"
                           type="text"
                           name="description"
                           fullWidth
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.description}
                           style={{marginBottom: '24px'}}
                       />
                       {errors.description && touched.description && errors.description}

                       <div style={{display: 'flex', justifyContent:'flex-end'}}>
                           <Button variant={'contained'} sx={{
                               marginRight: '64px',
                               "&.MuiButton-containedPrimary": {backgroundColor: '#F8346B'},
                               marginBottom: '29px'
                           }} onClick={addBlog} type={'submit'}>Add blog</Button>
                       </div>
                   </form>
               )}
           </Formik>
        </Box>
    );
};

