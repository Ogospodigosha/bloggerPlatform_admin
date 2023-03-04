import React from 'react';
import {PostType} from "../../../../../api/PostsApi";
import s from './Post.module.css'
import {convertDataFormat} from "../../../../../utils/convertDataFormat";

type PropsType = {
    el: PostType
}

export const Post:React.FC<PropsType> = ({el}) => {
    const onClickHandler =(id: string)=>{
        // navigate(`/post/${id}`)
    }
    return (
        <div>
            <img className={s.img}/>
            <div className={s.flex}>
                <img className={s.smallImg}/>
                <div>
                    <div className={s.title} onClick={()=>onClickHandler(el.id)}>
                        {el.title}
                    </div>
                    <div className={s.shortDescription}>
                        {el.shortDescription}
                    </div>
                    <div className={s.data}>
                        {el.createdAt !== undefined && convertDataFormat(el.createdAt)}
                    </div>
                </div>
            </div>
        </div>
    );
};
