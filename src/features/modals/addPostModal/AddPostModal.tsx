import React from 'react';
import {BasicModal} from "../basicModal/BasicModal";
import {AddPostForm} from "./addPostModal/AddPostForm";


type PropsType = {
    setOpenModal: (openModal: boolean)=>void
    openModal: boolean

}



export const AddPostModal:React.FC<PropsType> = ({openModal, setOpenModal}) => {
    return (
        <BasicModal setOpenModal={setOpenModal} openModal={openModal} title={'Add post'}>
            <div style={{width:'108px', height: '108px', border: '1px solid black', marginBottom:'24px'}}></div>
            <AddPostForm/>
        </BasicModal>
    );
};

