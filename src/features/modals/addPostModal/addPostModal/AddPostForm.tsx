import React from 'react';
import {Form, Formik} from "formik";
import {Button, FormGroup} from "@mui/material";
import {NameInputForm} from "../../../../components/nameInputForm/NameInputForm";
import {DescriptionInputForm} from "../../../../components/descriptionInputForm/DescriptionInputForm";
import {useSelector} from "react-redux";
import {selectBlogs} from "../../../blogs/selectors";
import {BlogInputForm} from "./BlogInputForm";
import {formPostValidate} from "../../../../utils/formPostValidate";
import {BlogType} from "../../../../api/BlogsApi";


type PropsType = {
    blogs: BlogType[]
}

export const AddPostForm: React.FC<PropsType> = ({blogs}) => {
    // const blogs = useSelector(selectBlogs)
    // console.log(blogs.items)
    const initialValues = {name: '', blog:'', description: ''}
    return (
        <>
            <Formik initialValues={initialValues}
                    validate={formPostValidate}
                    onSubmit={async (values, actions) => {
                        console.log(values)
                        // debugger
                        // if (values.name && values.websiteUrl && values.description) {
                        //     const thunk = AsyncBlogsActions.addBlog({
                        //         name: values.name,
                        //         websiteUrl: values.websiteUrl,
                        //         description: values.description
                        //     })
                        //     const resultAction = await dispatch(thunk)
                        //     if (AsyncBlogsActions.addBlog.fulfilled.match(resultAction)) {
                        //         const message = resultAction.payload
                        //         console.log(message)
                        //         if (message) {
                        //             navigate('/blogs')
                        //         }
                        //     }
                        // }

                    }}
            >
                <Form>
                    <FormGroup>
                        <div style={{ position: 'relative', marginBottom:'24px' }}>
                            <NameInputForm name={'name'} label="name"  />
                        </div>
                        <div style={{ position: 'relative', marginBottom:'24px' }}>
                            <BlogInputForm name={'blog'} label={'blog'} blogs={blogs}  />
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

