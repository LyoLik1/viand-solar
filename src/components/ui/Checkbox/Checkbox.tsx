// Checkbox.tsx

import { FC } from 'react'
import { Checkbox as CheckboxMui, CheckboxProps, FormControl, FormHelperText } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import { FieldError } from 'react-hook-form'
import styles from './Checkbox.module.scss'

interface CustomCheckboxProps extends CheckboxProps {
    checked?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error: FieldError | undefined
}

export const Checkbox: FC<CustomCheckboxProps> = ({ checked, onChange, error }) => {
    return (
        <FormControl fullWidth error={!!error}>
            <FormControlLabel
                control={<CheckboxMui classes={{ root: styles.checkboxStyles }} checked={checked} onChange={onChange} />}
                label='Ich bin damit einverstanden, Nachrichten von Viand Solar zu erhalten.'
                classes={{ label: styles.textStyles }}
            />
            {error && <FormHelperText className={styles.errorStyles}>{error.message}</FormHelperText>}
        </FormControl>
    )
}
