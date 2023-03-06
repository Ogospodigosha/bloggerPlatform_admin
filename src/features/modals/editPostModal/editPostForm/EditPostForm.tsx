import React from 'react';
import {PostType} from "../../../../api/PostsApi";
import {AsyncPostsActions} from "../../../posts";
import {Form, Formik} from "formik";
import {Button, FormGroup} from "@mui/material";
import {NameInputForm} from "../../../../components/nameInputForm/NameInputForm";
import {DescriptionInputForm} from "../../../../components/descriptionInputForm/DescriptionInputForm";
import {editPostValidate} from "./editPostValidate";
import {useAppDispatch} from "../../../../utils/useAction";

type PropsType = {
    el: PostType
    setOpenModal:(openModal:boolean)=>void
    openModal:boolean
}



export const EditPostForm:React.FC<PropsType> = ({setOpenModal, el}) => {
    const initialValues = {name: el.title ?? "",  description: el.content ?? ""}
    const dispatch = useAppDispatch()
    return (
        <>
            <Formik initialValues={initialValues}
                    validate={editPostValidate}
                    onSubmit={async (values, actions) => {
                        console.log(values)
                        if (values.name && values.description) {
                            const shortDescription = values.description.substring(0, 5)
                            const thunk = AsyncPostsActions.editPost({
                                postId: el.id,
                                blogId: el.blogId,
                                content: values.description,
                                title: values.name,
                                shortDescription: shortDescription
                            })
                            const resultAction = await dispatch(thunk)
                            if (AsyncPostsActions.editPost.fulfilled.match(resultAction)) {
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
                            }}  type={'submit'}>Publish</Button>
                        </div>
                    </FormGroup>
                </Form>
            </Formik>
        </>
    );
};

