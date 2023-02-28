import React from 'react';
import {TextField} from "@mui/material";
import {useField} from "formik";
import  s from './DescriptipnInputForm.module.css'
type  DescriptionInputFormType = {
    label: string
    name: string

}
export const DescriptionInputForm:React.FC<DescriptionInputFormType> = ({name, label}) => {
    const [field, meta] = useField(name)
    return (
        <>
            <TextField
                label={label}
                fullWidth
                margin={'normal'}
                // disabled={IsLoading === 'loading'}
                {...field}
            />
            {meta.touched && meta.error ? <div className={s.error}>{meta.error}</div> : null}
        </>
    );
};

