import React from 'react';
import {useField} from "formik";


type PropsType = {
    name:string
    label: string
}

export const BlogInputForm:React.FC<PropsType> = ({label, name}) => {
    const [field, meta] = useField(name)
    return (
        <div>

        </div>
    );
};

