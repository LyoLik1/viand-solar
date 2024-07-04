import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

interface FormData {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    message: string
    checkbox?: boolean
}

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
    topic: yup.string().required('This field is required'),
    message: yup.string().required('This field is required'),
    checkbox: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
})

export const useForms = () => {
    const {
        setValue,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            checkbox: false
        }
    })

    const [checked, setChecked] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    const toggleModalHandler = () => {
        setIsModalOpen(!isModalOpen)
    }

    const onSubmit = async (data: FormData) => {
        try {
            toggleModalHandler()
            const { checkbox, ...sortedData } = data

            if (checkbox) {
                console.log(sortedData)
            }
        } catch (error) {
            // console.log(error)
        }
    }

    return {
        setValue,
        handleSubmit,
        control,
        errors,
        checked,
        isModalOpen,
        handleCheckboxChange,
        toggleModalHandler,
        onSubmit
    }
}
