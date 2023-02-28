import React from 'react';
import {useField} from "formik";
import {TextField} from "@mui/material";


type EmailInputFormType = {
    label: string
    name: string

}

export const NameInputForm: React.FC<EmailInputFormType> = ({label, name}) => {
    const [field, meta] = useField(name)
    return (
        <>
            <TextField
                // className={s.field}
                label={label}
                variant={'standard'}
                margin={'normal'}
                // disabled={IsLoading === 'loading'}
                {...field}
            />
            {/*/!*{errors.name && touched.name && errors.name}*!/ className={s.error}*/}
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </>
    );
};

