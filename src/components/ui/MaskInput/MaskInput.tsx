import { FC, useState } from 'react'
import { FormControl, FormHelperText } from '@mui/material'
import classNames from 'classnames'
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

    const handleInput = (value: string) => {
        setValue(value)
        onInput(value)
    }

    return (
        <FormControl fullWidth error={!!error}>
            <PhoneInput
                country={isFocused ? 'de' : ''}
                placeholder={label}
                value={value}
                onChange={handleInput}
                onFocus={handleFocus}
                inputProps={{
                    name: 'phone',
                    required: true,
                    className: classNames(styles.phoneInput, !isFocused && styles.phoneInput_unfocused)
                }}
                dropdownClass={classNames(styles.dropdown)}
                buttonClass={isFocused || value.length > 0 ? '' : styles.btn}
            />
            {error && <FormHelperText className={styles.errorStyles}>{error.message}</FormHelperText>}
        </FormControl>
    )
}
