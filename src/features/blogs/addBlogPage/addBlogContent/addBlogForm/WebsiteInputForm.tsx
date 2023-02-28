import React from 'react';
import {TextField} from "@mui/material";
import {useField} from "formik";


type WebsiteInputFormType = {
    label: string
    name: string

}

export const WebsiteInputForm:React.FC<WebsiteInputFormType> = ({name, label}) => {
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
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </>
    );
};

