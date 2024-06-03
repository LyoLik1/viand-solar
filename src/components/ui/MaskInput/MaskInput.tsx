import { FC, useState } from 'react'
import { FormControl, FormHelperText } from '@mui/material'
import { FieldError } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styles from './MaskInput.module.scss'

interface InputOutlinedProps {
    label: string
    onInput: (value: string) => void
    error: FieldError | undefined
}

export const MaskInput: FC<InputOutlinedProps> = ({ label, onInput, error }) => {
    const [isFocused, setIsFocused] = useState(false)
    const [value, setValue] = useState('')

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        if (value === '') {
            setIsFocused(false)
        }
    }

    const handleInput = (value: string) => {
        setValue(value)
        onInput(value)
    }

    return (
        <FormControl fullWidth error={!!error}>
            {!isFocused && value === '' ? (
                <input type='text' placeholder={label} className={styles.placeholderInput} onFocus={handleFocus} />
            ) : (
                <PhoneInput
                    country={'de'}
                    value={value}
                    onChange={handleInput}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    inputProps={{
                        autoFocus: true,
                        name: 'phone',
                        required: true,
                        className: styles.phoneInput
                    }}
                    dropdownClass={styles.dropdown}
                />
            )}
            {error && <FormHelperText className={styles.errorStyles}>{error.message}</FormHelperText>}
        </FormControl>
    )
}
