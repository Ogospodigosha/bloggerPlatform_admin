import React from 'react';
import {styled, TextField} from "@mui/material";
import {useField} from "formik";
import  s from './WebsiteInputForm.module.css'

type WebsiteInputFormType = {
    label: string
    name: string

}




export const WebsiteInputForm:React.FC<WebsiteInputFormType> = ({name, label}) => {

    const [field, meta] = useField(name)
    return (
        <>
            <TextField
                label={label}
                fullWidth
                variant={'standard'}
                margin={'normal'}
                // disabled={IsLoading === 'loading'}
                {...field}
            />
            {meta.touched && meta.error ? <div className={s.error}>{meta.error}</div> : null}
        </>
    );
};

