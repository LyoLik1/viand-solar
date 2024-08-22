import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { smtpexpressClient } from '../../config'
import { useShema } from './useShema'

interface FormData {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    message: string
    checkbox?: boolean
    sex?: 'man' | 'woman' | 'other' | null
    topic?: string | null
    preferredContactMethod?: 'phone' | 'email' | null
}

export const useForms = (isSimpleForm: boolean) => {
    const schema = useShema(isSimpleForm)
    const {
        setValue,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            message: '',
            checkbox: false,
            sex: null,
            topic: '',
            preferredContactMethod: null
        }
    })

    const [checked, setChecked] = useState(false)
    const [isError, setIsError] = useState<unknown>()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    const toggleModalHandler = () => {
        setIsModalOpen(!isModalOpen)
    }

    const onSubmit = async (data: FormData) => {
        try {
            await smtpexpressClient.sendApi.sendMail({
                subject: 'Übermittlung eines neuen Kontaktformulars',
                message: `<p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                           <p><strong>Email:</strong> ${data.email}</p>
                           <p><strong>Telefon:</strong> ${data.phoneNumber}</p>
                           <p><strong>Anrede:</strong> ${data.sex}</p>
                           <p><strong>Bevorzugte Kontaktmethode:</strong> ${data.preferredContactMethod}</p>
                           <p><strong>Betreff:</strong> ${data.topic}</p>
                           <p><strong>Nachricht:</strong></p><p>${data.message}</p>`,
                sender: {
                    name: `${data.firstName} ${data.lastName}`,
                    email: 'info@viand-solar.de'
                },
                recipients: {
                    email: 'info@viand-solar.de'
                }
            })
            toggleModalHandler()
        } catch (error) {
            setIsError(error)
        }
    }

    return {
        setValue,
        handleSubmit,
        isError,
        control,
        errors,
        checked,
        isModalOpen,
        handleCheckboxChange,
        toggleModalHandler,
        onSubmit
    }
}
