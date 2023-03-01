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
                // InputLabelProps={{ shrink: true }}
                label={label}
                // focused={true}
                fullWidth
                margin={'normal'}
                // disabled={IsLoading === 'loading'}
                size={'medium'}
                {...field}

            />
            {meta.touched && meta.error ? <div className={s.error}>{meta.error}</div> : null}
        </>
    );
};

