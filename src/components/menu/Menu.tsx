import React from 'react';
import {IconButton, Menu, MenuItem} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import {BlogType} from "../../api/BlogsApi";


type PropsType = {
    el: BlogType
    deleteItemProps: (id: string)=>void
    editItemProps: (id: string)=>void
}

export const CommonMenu:React.FC<PropsType> = ({el, deleteItemProps, editItemProps}) => {
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
    const deleteItem = (id: string)=>{
        deleteItemProps(id)
    }
    const editItem =(id: string)=>{
        editItemProps(id)
    }
    return (
        <div >
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
                <MenuItem onClick={()=>deleteItem(el.id)}>
                    <div style={{display:'flex'}}>
                        <DeleteOutlineIcon fontSize={'medium'} style={{marginRight: '17px'}}/>
                        <div>Delete</div>
                    </div>
                </MenuItem>
                <MenuItem onClick={()=>editItem(el.id)}>
                    <div style={{display:'flex'}} >
                        <>
                            <ModeEditOutlineOutlinedIcon fontSize={'medium'} style={{marginRight: '17px'}} />
                            <div>Edit</div>
                        </>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
};

