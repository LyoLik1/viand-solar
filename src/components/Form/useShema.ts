import * as yup from 'yup'

export const useShema = (isSimpleForm: boolean) => {
    return yup.object().shape({
        firstName: yup
            .string()
            .required('Dieser Feld ist erforderlich')
            .matches(/^[a-zA-Z\s]*$/, 'Invalid name'),
        lastName: yup
            .string()
            .required('Dieser Feld ist erforderlich')
            .matches(/^[a-zA-Z\s]*$/, 'Invalid name'),
        phoneNumber: yup.string().required('Dieser Feld ist erforderlich'),
        email: yup
            .string()
            .required('Dieser Feld ist erforderlich')
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'E-Mail Addresse ist falsch'),
        topic: isSimpleForm ? yup.string().nullable().notRequired() : yup.string().required('Betreff ist erforderlich'),
        preferredContactMethod: isSimpleForm ? yup.string().nullable().notRequired() : yup.string().oneOf(['Telefon', 'E-mail']).required('Bevorzugte Kontaktmethode ist erforderlich'),
        sex: isSimpleForm ? yup.string().nullable().notRequired() : yup.string().oneOf(['Herr', 'Frau', 'Andere']).required('Bevorzugte Kontaktmethode ist erforderlich'),
        message: yup.string().required('Dieser Feld ist erforderlich'),
        checkbox: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
    })
}
