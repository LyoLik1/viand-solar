import { FC, useState } from 'react'
import { FormControl, FormHelperText } from '@mui/material'
import { TextField as TextFieldMui } from '@mui/material'
import { FieldError } from 'react-hook-form'
import styles from './TextField.module.scss'

interface TextFieldProps {
    label: string
    type: string
    onInput: (value: string) => void
    error: FieldError | undefined
}

export const TextField: FC<TextFieldProps> = ({ label, type, onInput, error }) => {
    const [value, setValue] = useState('')

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onInput(e.target.value)
    }

    return (
        <FormControl fullWidth error={!!error}>
            <TextFieldMui
                id='textField'
                type={type}
                multiline
                rows={4}
                placeholder={label}
                value={value}
                onChange={handleInput}
                inputProps={{
                    className: styles.textStyles
                }}
                classes={{ root: styles.inputRoot }}
            />
            {error && <FormHelperText className={styles.errorStyles}>{error.message}</FormHelperText>}
        </FormControl>
    )
}
