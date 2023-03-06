import React, {useState} from 'react';
import {PostType} from "../../../../../api/PostsApi";
import s from './Post.module.css'
import {convertDataFormat} from "../../../../../utils/convertDataFormat";
import {DeletePostModal} from "../../../../modals/deletePostModal/DeletePostModal";
import {CommonMenu} from "../../../../../components/menu/CommonMenu";
import {useNavigate} from "react-router-dom";
import {CssBaseline} from "@mui/material";

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
    // const onclickHandler = (id: string)=>{
    //     debugger
    //     navigate(`/blog/edit/${id}`)
    // }
    return (
        <div className={s.card}>
            <CssBaseline/>
            {/*<CustomizedSnackbars/>*/}
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
                <CommonMenu el={el} deletePostProps={deletePost} blogId={el.blogId} />
            </div>
        </div>
    );
};
