import React from 'react';
import {Button, TextField} from "@mui/material";
import {Formik} from "formik";
import {FormikErrorType} from "../AddBlogContent";

const Lala = () => {
    return (
        <Formik initialValues={{name: '', description:'', websiteUrl: ''}}
                validate={values => {
                    const errors: FormikErrorType = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }

                    if (!values.websiteUrl) {
                        errors.websiteUrl = 'Required'
                    } else if (/^https?:\/\/(?:www\.)?[A-Z0-9._%+-]+[A-Z0-9.-]+\.[A-Z]{2,4}.[A-Z]{2,4}$/i.test(values.websiteUrl))
                        errors.websiteUrl = 'websiteUrl must be a URL address'

                    if (!values.description) {
                        errors.description = 'Required';
                    }

                    return errors
                }}
                onSubmit={(values, actions) => {
                    debugger
                    if (values.name && values.websiteUrl && values.description)
                        // dispatch(registrationTC(values.email, values.password))
                        console.log('123123')
                }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="standard-basic"
                        label="Blog Name"
                        variant="standard"
                        fullWidth
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        style={{marginBottom: "24px"}}
                    />
                    {errors.name && touched.name && errors.name}
                    <TextField
                        style={{marginBottom: "54px"}}
                        id="standard-basic"
                        label="Website"
                        variant="standard"
                        fullWidth
                        type="text"
                        name="websiteUrl"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.websiteUrl}
                    />
                    {errors.websiteUrl && touched.websiteUrl && errors.websiteUrl}
                    <TextField
                        label="description"
                        type="text"
                        name="description"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        style={{marginBottom: '24px'}}
                    />
                    {errors.description && touched.description && errors.description}

                    <div style={{display: 'flex', justifyContent:'flex-end'}}>
                        <Button variant={'contained'} sx={{
                            marginRight: '64px',
                            "&.MuiButton-containedPrimary": {backgroundColor: '#F8346B'},
                            marginBottom: '29px'
                        }}  type={'submit'}>Add blog</Button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default Lala;