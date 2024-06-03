import { forwardRef, useCallback, useImperativeHandle, useState } from 'react'
import { FormControl, FormHelperText, OutlinedInput } from '@mui/material'
import { FieldError } from 'react-hook-form'
import styles from './InputOutlined.module.scss'

interface InputOutlinedProps {
    label: string
    type: string
    onInput: (value: string) => void
    error: FieldError | undefined
}

interface InputOutlinedRef {
    clearInput: () => void
    getValue: () => string
    setValue: (value: string) => void
}

export const InputOutlined = forwardRef<InputOutlinedRef, InputOutlinedProps>(({ label, type, onInput, error }, ref) => {
    const [value, setValue] = useState('')

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onInput(e.target.value)
    }

    const handleClearButtonClick = useCallback(() => {
        setValue('')
        onInput('')
    }, [onInput])

    useImperativeHandle(
        ref,
        () => ({
            clearInput: () => handleClearButtonClick(),
            getValue: () => value,
            setValue: (newValue: string) => setValue(newValue)
        }),
        [value, handleClearButtonClick]
    )

    return (
        <FormControl fullWidth error={!!error}>
            <OutlinedInput
                id='input'
                type={type}
                inputRef={ref}
                placeholder={label}
                value={value}
                inputProps={{
                    className: styles.textStyles
                }}
                classes={{ root: styles.inputStyles, focused: styles.inputStylesFocus }}
                onChange={handleInput}
            />
            {error && <FormHelperText className={styles.errorStyles}>{error.message}</FormHelperText>}
        </FormControl>
    )
})
