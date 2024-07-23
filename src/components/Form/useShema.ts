import * as yup from 'yup'

export const useShema = (isSimpleForm: boolean) => {
    const schema = yup.object().shape({
        firstName: yup
            .string()
            .required('This field is required')
            .matches(/^[a-zA-Z\s]*$/, 'Invalid name'),
        lastName: yup
            .string()
            .required('This field is required')
            .matches(/^[a-zA-Z\s]*$/, 'Invalid name'),
        phoneNumber: yup.string().required('This field is required'),
        email: yup
            .string()
            .required('This field is required')
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address'),
        topic: isSimpleForm ? yup.string() : yup.string().required('Betreff ist erforderlich'),
        preferredContactMethod: isSimpleForm ? yup.string() : yup.string().oneOf(['female', 'male', 'other']).required('Bevorzugte Kontaktmethode ist erforderlich'),
        message: yup.string().required('This field is required'),
        checkbox: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
    })
    return schema
}
