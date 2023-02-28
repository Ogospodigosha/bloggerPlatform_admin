import React from 'react';
import {Form, Formik} from "formik";
import {formValidate} from "./formValidate";
import {Button, FormGroup} from "@mui/material";
import {NameInputForm} from "./NameInputForm";
import {WebsiteInputForm} from "./WebsiteInputForm";
import {DescriptionInputForm} from "./DescriptionInputForm";
import {useActions} from "../../../../../utils/useAction";
import {AsyncBlogsActions} from "../../../index";

export const AddBlogForm = () => {
    const initialValues = {name: '', description:'', websiteUrl: ''}
    const {addBlog} = useActions(AsyncBlogsActions)
    return (
        <>
            <Formik initialValues={initialValues}
                    validate={formValidate}
                    onSubmit={(values, actions) => {
                        debugger
                        if (values.name && values.websiteUrl && values.description)
                            // dispatch(registrationTC(values.email, values.password))
                            addBlog({name: values.name, websiteUrl: values.websiteUrl, description: values.description})
                            console.log('123123')
                    }}
            >
                <Form>
                    <FormGroup>
                        <div style={{ position: 'relative' }}>
                            <NameInputForm name={'name'} label="name"  />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <WebsiteInputForm name={'websiteUrl'} label={'websiteUrl'}  />
                        </div>
                        <div style={{ position: 'relative' }}>
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

