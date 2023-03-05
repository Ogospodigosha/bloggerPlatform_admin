import {Divider, ListItem, ListItemAvatar } from '@mui/material';
import React, {useState} from 'react';
import s from '../blogsList/BlogList.module.css'
import {BlogType} from "../../../../api/BlogsApi";
import {useNavigate} from "react-router-dom";
import {DeleteModal} from "../../../modals/deleteModal/DeleteModal";
import {CommonMenu} from "../../../../components/menu/CommonMenu";





type PropsType = {
    el: BlogType
}


export const BlogMenu: React.FC<PropsType> = ({el}) => {
    const [openModal, setOpenModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')
    const navigate = useNavigate()
    const editHandler = (id: string)=>{
        debugger
        navigate(`/blog/edit/${id}`)
    }
    const deleteBlog = (id: string)=>{
        setDeleteId(id)
        setOpenModal(true)
    }
    return (
        <>
            <DeleteModal openModal={openModal} setOpenModal={setOpenModal} deleteId={deleteId}/>
        <ListItem alignItems="flex-start" key={el.id}  >
            <ListItemAvatar>
                <div className={s.avatar}><img className={s.img} /></div>
            </ListItemAvatar>
            <div className={s.div}>
                <div style={{display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
                    <div className={s.blogName}>{el.name}</div>
                    <CommonMenu el={el} deleteItemProps={deleteBlog} editItemProps={editHandler}/>
                </div>
                <div className={s.website}>Website:<a className={s.link} href={el.websiteUrl}>{el.websiteUrl}</a></div>
                <div className={s.description}>{el.description}</div>
            </div>
        </ListItem>
    <Divider variant="fullWidth" key={el.name}/>
        </> );
};

