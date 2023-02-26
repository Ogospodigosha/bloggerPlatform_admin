import {Divider, List, ListItem, ListItemAvatar} from '@mui/material';
import React from 'react';
import {BlogType} from "../../../../api/BlogsApi";
import s from './BlogList.module.css'

type PropsType={
    items: BlogType[]
}

export const BlogsList:React.FC<PropsType> = ({items}) => {
    return (
        <List sx={{width: '100%'  }} >
            {items?.map(el =>
                <>
                    <ListItem alignItems="flex-start" key={el.id} >
                        <ListItemAvatar>
                            <div className={s.avatar}><img className={s.img} /></div>
                        </ListItemAvatar>
                        <div className={s.div}>
                            <div className={s.blogName}  >{el.name}</div>
                            <div className={s.website}>Website:<a className={s.link} href={el.websiteUrl}>{el.websiteUrl}</a></div>
                            <div className={s.description}>{el.description}</div>
                        </div>
                    </ListItem>
                    <Divider variant="fullWidth"/>
                </>)}
        </List>
    );
};

