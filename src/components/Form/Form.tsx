import { FC } from 'react'
import classNames from 'classnames'
import { Controller } from 'react-hook-form'
import { Button } from '../ui/Button/Button'
import { Checkbox } from '../ui/Checkbox/Checkbox'
import { GroupRadio } from '../ui/GroupRadio/GroupRadio'
import { InputOutlined } from '../ui/Input/InputOutlined'
import { MaskInput } from '../ui/MaskInput/MaskInput'
import { TextField } from '../ui/TextField/TextField'
import styles from './Form.module.scss'
import { Modal } from './Modal/Modal'
import { useForms } from './useForms'

interface FormProps {
    headline?: boolean
}

const Form: FC<FormProps> = ({ headline = true }) => {
    const { setValue, handleSubmit, control, errors, checked, isModalOpen, handleCheckboxChange, toggleModalHandler, onSubmit } = useForms()

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={classNames(styles.form, !headline && styles.form_small)}>
                {headline && <h3 className={styles.form_title}>schnell uns kontaktieren</h3>}
                <div className={classNames(styles.form_wrapper, !headline && styles.form_wrapper_small)}>
                    <div className={styles.name}>
                        <div className={styles.name_first}>
                            <label className={classNames(styles.name_first_label, styles.form_label)}>Vorname</label>
                            <Controller
                                name={'firstName'}
                                control={control}
                                rules={{ required: true }}
                                render={() => <InputOutlined label={'Ihre Vorname'} type={'text'} onInput={(value) => setValue('firstName', value)} error={errors['firstName']} />}
                            />
                        </div>
                        <div className={styles.name_last}>
                            <label className={classNames(styles.name_last_label, styles.form_label)}>Nachname</label>
                            <Controller
                                name={'lastName'}
                                control={control}
                                rules={{ required: true }}
                                render={() => <InputOutlined label={'Ihre Nachname'} type={'text'} onInput={(value) => setValue('lastName', value)} error={errors['lastName']} />}
                            />
                        </div>
                    </div>
                    {!headline ? (
                        <>
                            <div className={styles.info}>
                                <div className={styles.info_contact}>
                                    <div className={styles.info_phone}>
                                        <label className={classNames(styles.info_phone_label, styles.form_label)}>Telefon</label>
                                        <Controller
                                            name={'phoneNumber'}
                                            control={control}
                                            rules={{ required: true }}
                                            render={() => <MaskInput label={'Ihre Telefonnummer'} onInput={(value) => setValue('phoneNumber', value)} error={errors['phoneNumber']} />}
                                        />
                                    </div>
                                    <div className={styles.info_email}>
                                        <label className={classNames(styles.info_email_label, styles.form_label)}>E-Mail</label>
                                        <Controller
                                            name={'email'}
                                            control={control}
                                            rules={{ required: true }}
                                            render={() => <InputOutlined label={'Ihre E-Mail'} type={'email'} onInput={(value) => setValue('email', value)} error={errors['email']} />}
                                        />
                                    </div>
                                </div>
                                <div className={styles.additional}>
                                    <div className={styles.additional_topic}>
                                        <label className={classNames(styles.additional_topic_label, styles.form_label)}>Betreff</label>
                                        <Controller name={'topic'} control={control} rules={{ required: true }} render={() => <InputOutlined label={'Betreff'} onInput={(value) => setValue('topic', value)} error={errors['topic']} type={'text'} />} />
                                    </div>
                                    <div className={styles.additional_contacts}>
                                        <GroupRadio control={control} name='preferredContactMethod' />
                                    </div>
                                </div>
                                <div className={styles.info_message}>
                                    <label className={classNames(styles.info_message_label, styles.form_label)}>Nachricht</label>
                                    <Controller
                                        name={'message'}
                                        control={control}
                                        rules={{ required: true }}
                                        render={() => <TextField label={'Ihre Nachricht'} type={'text'} onInput={(value) => setValue('message', value)} error={errors['message']} />}
                                    />
                                </div>
                            </div>

                            <div className={styles.confirm}>
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
                                <Button onClick={() => {}} className={styles.button_contact} type='submit' height='medium'>
                                    ABSENDEN
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.info}>
                                <div className={styles.info_phone}>
                                    <label className={classNames(styles.info_phone_label, styles.form_label)}>Telefon</label>
                                    <Controller
                                        name={'phoneNumber'}
                                        control={control}
                                        rules={{ required: true }}
                                        render={() => <MaskInput label={'Ihre Telefonnummer'} onInput={(value) => setValue('phoneNumber', value)} error={errors['phoneNumber']} />}
                                    />
                                </div>
                                <div className={styles.info_email}>
                                    <label className={classNames(styles.info_email_label, styles.form_label)}>E-Mail</label>
                                    <Controller name={'email'} control={control} rules={{ required: true }} render={() => <InputOutlined label={'Ihre E-Mail'} type={'email'} onInput={(value) => setValue('email', value)} error={errors['email']} />} />
                                </div>
                                <div className={styles.info_message}>
                                    <label className={classNames(styles.info_message_label, styles.form_label)}>Nachricht</label>
                                    <Controller
                                        name={'message'}
                                        control={control}
                                        rules={{ required: true }}
                                        render={() => <TextField label={'Ihre Nachricht'} type={'text'} onInput={(value) => setValue('message', value)} error={errors['message']} />}
                                    />
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
                            <Button onClick={() => {}} className={styles.button} type='submit'>
                                ABSENDEN
                            </Button>
                        </>
                    )}
                </div>
            </form>
            {isModalOpen && <Modal isModalOpen={isModalOpen} toggleModal={toggleModalHandler} />}
        </>
    )
}

export default Form
