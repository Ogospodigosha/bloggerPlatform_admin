export const formPostValidate = (values: FormikErrorType): FormikErrorType => {
    const errors: FormikErrorType = {}
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.description) {
        errors.description = 'Required';
    }
    if (!values.blog) {
        errors.blog = 'Required'
    }

    return errors
}
export type FormikErrorType = {
    name?: string
    blog?: string
    description?: string
}