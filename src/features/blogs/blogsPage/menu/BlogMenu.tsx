import {Divider, IconButton, ListItem, ListItemAvatar, MenuItem, Menu } from '@mui/material';
import React, {useState} from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import s from '../blogsList/BlogList.module.css'
import {BlogType} from "../../../../api/BlogsApi";
import {useNavigate} from "react-router-dom";
import {DeleteModal} from "../../../modals/deleteModal/DeleteModal";




type PropsType = {
    el: BlogType
}


export const BlogMenu: React.FC<PropsType> = ({el}) => {
    const [openModal, setOpenModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
            event.stopPropagation()
        setAnchorEl(null);
    };
    const onclickHandler = (id: string)=>{
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
                    <div>
                        <IconButton

                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '149px',
                                },
                            }}
                            elevation={0}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={()=>deleteBlog(el.id)}>
                                <div style={{display:'flex'}}>
                                    <DeleteOutlineIcon fontSize={'medium'} style={{marginRight: '17px'}}/>
                                    <div>Delete</div>
                                </div>
                            </MenuItem>
                            <MenuItem onClick={()=>onclickHandler(el.id)}>
                                <div style={{display:'flex'}} >
                                    <>
                                        <ModeEditOutlineOutlinedIcon fontSize={'medium'} style={{marginRight: '17px'}} />
                                        <div>Edit</div>
                                    </>
                                </div>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
                <div className={s.website}>Website:<a className={s.link} href={el.websiteUrl}>{el.websiteUrl}</a></div>
                <div className={s.description}>{el.description}</div>
            </div>
        </ListItem>
    <Divider variant="fullWidth" key={el.name}/>
        </> );
};

