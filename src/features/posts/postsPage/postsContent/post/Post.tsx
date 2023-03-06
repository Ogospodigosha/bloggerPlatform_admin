import React, {useState} from 'react';
import {PostType} from "../../../../../api/PostsApi";
import s from './Post.module.css'
import {convertDataFormat} from "../../../../../utils/convertDataFormat";
import {DeletePostModal} from "../../../../modals/deletePostModal/DeletePostModal";
import {CommonMenu} from "../../../../../components/menu/CommonMenu";
import {CssBaseline} from "@mui/material";
import {EditPostModal} from "../../../../modals/editPostModal/EditPostModal";


type PropsType = {
    el: PostType
}

export const Post:React.FC<PropsType> = ({el}) => {
    const [postId, setPostId] = useState('')
    const [blogId, setBlogId] = useState('')
    const [openModal, setOpenModal] = useState(false)
    // const navigate = useNavigate()
    const deletePost = (postId: string, blogId: string)=>{
        setBlogId(blogId)
        setPostId(postId)
        setOpenModal(true)
    }
    const onclickHandler = (postId: string)=>{
        setOpenModal(true)

    }
    return (
        <div className={s.card}>
            <CssBaseline/>
            <DeletePostModal setOpenModal={setOpenModal} openModal={openModal}  postId={postId} blogId={blogId} />
            <EditPostModal el={el}   setOpenModal={setOpenModal} openModal={openModal}/>
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
                <CommonMenu el={el} deletePostProps={deletePost} blogId={el.blogId} editPostProps={onclickHandler}/>
            </div>
        </div>
    );
};
