import React from 'react';
import {useField} from "formik";
import {TextField} from "@mui/material";
import  s from './NameInputForm.module.css'

type EmailInputFormType = {
    label: string
    name: string
}

export const NameInputForm: React.FC<EmailInputFormType> = ({label, name}) => {
    const [field, meta] = useField(name)

    return (
        <>
            <TextField
                fullWidth
                // focused={true}
                label={label}
                variant={'standard'}
                margin={'normal'}
                // disabled={IsLoading === 'loading'}
                {...field}
            />
            {meta.touched && meta.error ? <div className={s.error}>{meta.error}</div> : null}
        </>
    );
};

