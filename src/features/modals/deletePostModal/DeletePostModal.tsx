import React from 'react';
import {useActions} from "../../../utils/useAction";
import {BasicModal} from "../basicModal/BasicModal";
import s from "../deleteModal/DeleteModal.module.css";
import {AsyncPostsActions, PostsSelector} from "../../posts";


type PropsType = {
    setOpenModal: (openModal: boolean)=>void
    openModal: boolean
    blogId: string
    postId: string
}
export const DeletePostModal:React.FC<PropsType> = ({openModal, setOpenModal, postId, blogId}) => {
    const {removePost} = useActions(AsyncPostsActions)

    const deletePost =()=>{
      removePost({blogId: blogId, postId:postId})
        setOpenModal(false)
    }
    const cancelHandler =()=>{
        setOpenModal(false)
    }
    return (
        <BasicModal setOpenModal={setOpenModal} openModal={openModal} title={'Delete a post'}>
            <div className={s.body}>Are you sure you want to delete this post?</div>
            <div className={s.flex}>
                <div>
                    <div
                        onClick={cancelHandler}
                        className={s.no}
                    >
                        No
                    </div>
                </div>
                <div>
                    <div
                        className={s.yes}
                        onClick={deletePost}
                    >
                        Yes
                    </div>
                </div>
            </div>
        </BasicModal>
    );
};

