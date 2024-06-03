import { FC, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Button } from '../ui/Button/Button'
import { Checkbox } from '../ui/Checkbox/Checkbox'
import { InputOutlined } from '../ui/Input/InputOutlined'
import { MaskInput } from '../ui/MaskInput/MaskInput'
import { TextField } from '../ui/TextField/TextField'
import styles from './Form.module.scss'
import { Modal } from './Modal/Modal'

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
    message: yup.string().required('This field is required'),
    checkbox: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
})

interface FormProps {
    headline?: boolean
}
interface FormData {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    message: string
    checkbox?: boolean
}

const Form: FC<FormProps> = ({ headline = true }) => {
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

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} ${!headline && styles.form_small}`}>
                {headline && <h3 className={styles.form_title}>schnell uns kontaktieren</h3>}
                <div className={`${styles.form_wrapper} ${!headline && styles.form_wrapper_small}`}>
                    <div className={styles.name}>
                        <div className={styles.name_first}>
                            <label className={`${styles.name_first_label} ${styles.form_label}`}>Vorname</label>
                            <Controller
                                name={'firstName'}
                                control={control}
                                rules={{ required: true }}
                                render={() => <InputOutlined label={'Ihre Vorname'} type={'text'} onInput={(value) => setValue('firstName', value)} error={errors['firstName']} />}
                            />
                        </div>
                        <div className={styles.name_last}>
                            <label className={`${styles.name_last_label} ${styles.form_label}`}>Nachname</label>
                            <Controller
                                name={'lastName'}
                                control={control}
                                rules={{ required: true }}
                                render={() => <InputOutlined label={'Ihre Nachname'} type={'text'} onInput={(value) => setValue('lastName', value)} error={errors['lastName']} />}
                            />
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_phone}>
                            <label className={`${styles.info_phone_label} ${styles.form_label}`}>Telefon</label>
                            <Controller name={'phoneNumber'} control={control} rules={{ required: true }} render={() => <MaskInput label={'Ihre Telefonnummer'} onInput={(value) => setValue('phoneNumber', value)} error={errors['phoneNumber']} />} />
                        </div>
                        <div className={styles.info_email}>
                            <label className={`${styles.info_email_label} ${styles.form_label}`}>E-Mail</label>
                            <Controller name={'email'} control={control} rules={{ required: true }} render={() => <InputOutlined label={'Ihre E-Mail'} type={'email'} onInput={(value) => setValue('email', value)} error={errors['email']} />} />
                        </div>
                        <div className={styles.info_message}>
                            <label className={`${styles.info_message_label} ${styles.form_label}`}>Nachricht</label>
                            <Controller name={'message'} control={control} rules={{ required: true }} render={() => <TextField label={'Ihre Nachricht'} type={'text'} onInput={(value) => setValue('message', value)} error={errors['message']} />} />
                        </div>
                    </div>
                    <Controller
                        name={'checkbox'}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Checkbox
                                checked={checked}
                                onChange={(e) => {
                                    field.onChange(e)
                                    handleCheckboxChange(e)
                                }}
                                error={errors['checkbox']}
                            />
                        )}
                    />
                    <Button onClick={() => {}} type='submit'>
                        ABSENDEN
                    </Button>
                </div>
            </form>
            {isModalOpen && <Modal isModalOpen={isModalOpen} toggleModal={toggleModalHandler} />}
        </>
    )
}

export default Form
