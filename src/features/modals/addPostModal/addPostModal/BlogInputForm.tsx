import React from 'react';
import {useField} from "formik";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import s from "../../../../components/descriptionInputForm/DescriptipnInputForm.module.css";
import {BlogType} from "../../../../api/BlogsApi";


type PropsType = {
    name:string
    label: string
    blogs: BlogType[]
    changeBlogId: (id:string)=>void
}

export const BlogInputForm:React.FC<PropsType> = ({label, name, blogs, changeBlogId}) => {

    const [field, meta] = useField(name)
    const onClickHandler = (blogId: string)=>{
        changeBlogId(blogId)
    }
    return (
        <>

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">blog</InputLabel>
                    <Select
                        label={label}
                        placeholder={'Search blog'}
                        {...field}
                    >
                        {
                            blogs && blogs.map((el) =><MenuItem value={el.name} onClick={()=>onClickHandler(el.id)}>{el.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Box>
            {meta.touched && meta.error ? <div className={s.error}>{meta.error}</div> : null}
        </>
    );
};

