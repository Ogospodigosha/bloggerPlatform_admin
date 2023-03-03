import React from 'react';
import {BasicModal} from "../basicModal/BasicModal"
import s from './DeleteModal.module.css'

type PropsType = {
    setOpenModal: (openModal: boolean)=>void
    openModal: boolean
}

export const DeleteModal:React.FC<PropsType> = ({openModal, setOpenModal}) => {
    const deleteBlog =()=>{

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

