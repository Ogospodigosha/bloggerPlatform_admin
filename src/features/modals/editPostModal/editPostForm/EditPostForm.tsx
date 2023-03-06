import React from 'react';
import {PostType} from "../../../../api/PostsApi";

type PropsType = {
    el: PostType
    setOpenModal:(openModal:boolean)=>void
    openModal:boolean
}
export const EditPostForm:React.FC<PropsType> = ({setOpenModal, el}) => {
    return (
        <div>

        </div>
    );
};

