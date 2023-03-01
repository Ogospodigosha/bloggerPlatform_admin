import {List, } from '@mui/material';
import React from 'react';
import {BlogType} from "../../../../api/BlogsApi";
import {BlogMenu} from "../menu/BlogMenu";


type PropsType={
    items: BlogType[]
}

export const BlogsList:React.FC<PropsType> = ({items}) => {

    return (
        <List style={{marginRight: '64px', width: '100%' }}>
            {items?.map(el =>
                <>
                    <BlogMenu el={el} key={el.id}/>
                </>)}
        </List>
    );
};

