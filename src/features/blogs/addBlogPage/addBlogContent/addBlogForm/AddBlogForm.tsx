import React from 'react';
import {Form, Formik} from "formik";
import {formValidate} from "./formValidate";
import {Button, FormGroup} from "@mui/material";
import {NameInputForm} from "./nameInputForm/NameInputForm";
import {WebsiteInputForm} from "./websiteInputForm/WebsiteInputForm";
import {DescriptionInputForm} from "./descriptionInputForm/DescriptionInputForm";
import {useActions, useAppDispatch} from "../../../../../utils/useAction";
import {AsyncBlogsActions} from "../../../index";
import {useNavigate} from "react-router-dom";


export const AddBlogForm = () => {
    const initialValues = {name: '', description:'', websiteUrl: ''}
    const dispatch = useAppDispatch()
    const {addBlog} = useActions(AsyncBlogsActions)
    const navigate = useNavigate()

    return (
        <>
            <Formik initialValues={initialValues}
                    validate={formValidate}
                    onSubmit={async (values, actions) => {
                        debugger
                        if (values.name && values.websiteUrl && values.description) {
                            const thunk = AsyncBlogsActions.addBlog({
                                name: values.name,
                                websiteUrl: values.websiteUrl,
                                description: values.description
                            })
                            const resultAction = await dispatch(thunk)
                            if (AsyncBlogsActions.addBlog.fulfilled.match(resultAction)) {
                                const message = resultAction.payload
                                console.log(message)
                                if (message) {
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
                            }}  type={'submit'}>Add blog</Button>
                        </div>
                    </FormGroup>
                </Form>
            </Formik>
        </>
    );
};

