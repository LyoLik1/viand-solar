import { FC } from 'react'
import { FormHelperText } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import styles from './GroupRadio.module.scss'

interface GroupRadioProps {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    label: string
    options: { value: string; label: string }[]
    error?: string
    defaultValue?: string
}

export const GroupRadio: FC<GroupRadioProps> = ({ value, onChange, name, label, options, error, defaultValue = '' }) => {
    return (
        <FormControl fullWidth error={!!error} className={styles.formControl}>
            <FormLabel id={`${name}-radio-buttons-group-label`} className={styles.formLabel}>
                {label}
            </FormLabel>
            <RadioGroup aria-labelledby={`${name}-radio-buttons-group-label`} value={value || defaultValue} onChange={onChange} className={styles.radioGroup} row>
                {options.map((option) => (
                    <FormControlLabel key={option.value} value={option.value} control={<Radio className={styles.radio} />} label={option.label} classes={{ label: styles.label }} />
                ))}
            </RadioGroup>
            {error && <FormHelperText className={styles.errorStyles}>{error}</FormHelperText>}
        </FormControl>
    )
}
