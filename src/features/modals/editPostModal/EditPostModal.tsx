import React from 'react';
import {PostType} from "../../../api/PostsApi";
import {BasicModal} from "../basicModal/BasicModal";
import {EditPostForm} from "./editPostForm/EditPostForm";

type PropsType = {
    el: PostType
    setOpenModal:(openModal:boolean)=>void
    openModal:boolean
}

export const EditPostModal:React.FC<PropsType> = ({el,setOpenModal,openModal}) => {
    return (
        <BasicModal setOpenModal={setOpenModal} openModal={openModal} title={'Edit post'}>
            <div style={{width:'108px', height: '108px', border: '1px solid black', marginBottom:'24px'}}></div>
            <EditPostForm  setOpenModal={setOpenModal} el={el} openModal={openModal}/>
        </BasicModal>
    );
};

