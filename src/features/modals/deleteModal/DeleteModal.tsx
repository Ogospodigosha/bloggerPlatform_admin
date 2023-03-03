import React from 'react';
import {BasicModal} from "../basicModal/BasicModal"
import s from './DeleteModal.module.css'
import {useActions} from "../../../utils/useAction";
import {AsyncBlogsActions} from "../../blogs";

type PropsType = {
    setOpenModal: (openModal: boolean)=>void
    openModal: boolean
    deleteId: string
}

export const DeleteModal:React.FC<PropsType> = ({openModal, setOpenModal, deleteId}) => {
    const {removeBlog} = useActions(AsyncBlogsActions)
    const deleteBlog =()=>{
        removeBlog({id:deleteId})
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
                        onClick={deleteBlog}
                    >
                        Yes
                    </div>
                </div>
            </div>
        </BasicModal>
    );
};

