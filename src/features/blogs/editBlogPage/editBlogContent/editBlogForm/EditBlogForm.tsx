import React from 'react';
import {formValidate} from "../../../../../utils/formValidate";

import {Form, Formik} from "formik";
import {Button, FormGroup} from "@mui/material";
import {NameInputForm} from "../../../../../components/nameInputForm/NameInputForm";
import {WebsiteInputForm} from "../../../../../components/websiteInputForm/WebsiteInputForm";
import {
    DescriptionInputForm
} from "../../../../../components/descriptionInputForm/DescriptionInputForm";

import {BlogType} from "../../../../../api/BlogsApi";
import {AsyncBlogsActions} from "../../../index";
import {useAppDispatch} from "../../../../../utils/useAction";
import {useNavigate} from "react-router-dom";


type PropsType = {
    blog: BlogType
}

export const EditBlogForm:React.FC<PropsType> = React.memo(({blog}) => {
    const dispatch = useAppDispatch()
    console.log(blog)
    const initialValues = {name: blog?.name ?? "", description: blog?.description ?? "", websiteUrl: blog?.websiteUrl ?? ""}
    const navigate = useNavigate()
    return (
        <>
            <Formik initialValues={initialValues}
                    enableReinitialize={true}
                    validate={formValidate}
                    onSubmit={async (values, actions) => {
                        debugger
                        if (values.name && values.websiteUrl && values.description) {
                            const thunk = AsyncBlogsActions.editBlog({
                                name: values.name,
                                websiteUrl: values.websiteUrl,
                                description: values.description,
                                id: blog.id
                            })
                            const resultAction = await dispatch(thunk)
                            if (AsyncBlogsActions.editBlog.fulfilled.match(resultAction)) {
                                if (resultAction.payload === undefined) {
                                    navigate('/blogs')
                                }
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
                            <WebsiteInputForm name={'websiteUrl'} label={'websiteUrl'}  />
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
                            }}  type={'submit'}>Edit blog</Button>
                        </div>
                    </FormGroup>
                </Form>
            </Formik>
        </>
    );
});

