import React, {useState} from 'react';
import {PostType} from "../../../../../api/PostsApi";
import s from './Post.module.css'
import {convertDataFormat} from "../../../../../utils/convertDataFormat";
import {IconButton, Menu, MenuItem} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import {DeletePostModal} from "../../../../modals/deletePostModal/DeletePostModal";

type PropsType = {
    el: PostType
}

export const Post:React.FC<PropsType> = ({el}) => {
    const [postId, setPostId] = useState('')
    const [blogId, setBlogId] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setAnchorEl(null);
    };
    const deletePost = (postId: string, blogId: string)=>{
        setBlogId(blogId)
        setPostId(postId)
        setOpenModal(true)
    }
    const onclickHandler = (id: string)=>{
        debugger
        // navigate(`/blog/edit/${id}`)
    }
    return (
        <div className={s.card}>
            <DeletePostModal setOpenModal={setOpenModal} openModal={openModal}  postId={postId} blogId={blogId} />
            <img className={s.img}/>
            <div className={s.flex}>
                <img className={s.smallImg}/>
                <div style={{marginRight:'auto'}}>
                        <div className={s.title}>
                            {el.title}
                        </div>
                    <div className={s.shortDescription}>
                        {el.shortDescription}
                    </div>
                    <div className={s.data}>
                        {el.createdAt !== undefined && convertDataFormat(el.createdAt)}
                    </div>

                </div>
                <div>
                    <IconButton style={{padding: '0px'}}

                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon  />
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
                        <MenuItem onClick={()=>deletePost(el.id, el.blogId)}>
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
        </div>
    );
};
