import React, {useState} from 'react';
import {Form, Formik} from "formik";
import {Button, FormGroup} from "@mui/material";
import {NameInputForm} from "../../../../components/nameInputForm/NameInputForm";
import {DescriptionInputForm} from "../../../../components/descriptionInputForm/DescriptionInputForm";
import {BlogInputForm} from "./BlogInputForm";
import {formPostValidate} from "../../../../utils/formPostValidate";
import {BlogType} from "../../../../api/BlogsApi";
import { useAppDispatch} from "../../../../utils/useAction";
import {AsyncPostsActions} from "../../../posts";


type PropsType = {
    blogs: BlogType[]
    setOpenModal: (openModal: boolean)=>void
}

export const AddPostForm: React.FC<PropsType> = ({blogs, setOpenModal}) => {
    const dispatch = useAppDispatch()
    const [blogId, setBlogId] = useState('')
    const changeBlogId =(id: string)=>{
        setBlogId(id)
    }

    const initialValues = {name: '', blog:'', description: ''}
    return (
        <>
            <Formik initialValues={initialValues}
                    validate={formPostValidate}
                    onSubmit={async (values, actions) => {
                        console.log(values)
                        if (values.name && values.blog && values.description) {
                            const thunk = AsyncPostsActions.addPost({
                                blogId:blogId,
                                title: values.name,
                                shortDescription: 'test',
                                content:values.description
                            })
                            const resultAction = await dispatch(thunk)
                            if (AsyncPostsActions.addPost.fulfilled.match(resultAction)) {
                                const message = resultAction.payload
                                setOpenModal(false)
                            }
                        }
                    }}
            >
                <Form>
                    <FormGroup>
                        <div style={{ position: 'relative', marginBottom:'24px' }}>
                            <NameInputForm name={'name'} label="name"  />
                        </div>
                        <div style={{ position: 'relative', marginBottom:'24px' }}>
                            <BlogInputForm name={'blog'} label={'blog'} blogs={blogs}  changeBlogId={changeBlogId}/>
                        </div>
                        <div style={{ position: 'relative', marginBottom:'24px' }}>
                            <DescriptionInputForm
                                label={'description'}
                                name={'description'}

                            />
                        </div>
                        <div style={{display: 'flex', justifyContent:'flex-end'}}>
                            <Button variant={'contained'} sx={{
                                marginRight: '64px',
                                "&.MuiButton-containedPrimary": {backgroundColor: '#F8346B'},
                                marginBottom: '29px'
                            }}  type={'submit'}>Add blog</Button>
                        </div>
                    </FormGroup>
                </Form>
            </Formik>
        </>
    );
};

