export const formValidate = (values: FormikErrorType): FormikErrorType => {
    const errors: FormikErrorType = {}
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.websiteUrl) {
        errors.websiteUrl = 'Required'
    } else if (/^https?:\/\/(?:www\.)?[A-Z0-9._%+-]+[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.websiteUrl))
        errors.websiteUrl = 'websiteUrl must be a URL address'
    if (!values.description) {
        errors.description = 'Required';
    }

    return errors
}
export type FormikErrorType = {
    name?: string
    description?: string
    websiteUrl?: string
}