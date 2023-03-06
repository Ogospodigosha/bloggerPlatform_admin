export const editPostValidate = (values: FormikErrorType): FormikErrorType => {
    const errors: FormikErrorType = {}
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.description) {
        errors.description = 'Required';
    }


    return errors
}
export type FormikErrorType = {
    name?: string
    description?: string
}