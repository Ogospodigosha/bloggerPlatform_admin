import {List, } from '@mui/material';
import React from 'react';
import {BlogType} from "../../../../api/BlogsApi";
import {BlogMenu} from "../menu/BlogMenu";


type PropsType={
    items: BlogType[]
}

export const BlogsList:React.FC<PropsType> = ({items}) => {

    return (
        <List style={{marginRight: '64px'}}>
            {items?.map(el =>
                <>
                    <BlogMenu el={el}/>
                </>)}
        </List>
    );
};

