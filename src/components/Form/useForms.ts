import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useShema } from './useShema'

interface FormData {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    message: string
    checkbox?: boolean
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
