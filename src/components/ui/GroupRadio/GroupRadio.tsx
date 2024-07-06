import { FC } from 'react'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { Control, Controller } from 'react-hook-form'
import styles from './GroupRadio.module.scss'
interface FormData {
    topic: string
    preferredContactMethod: 'female' | 'male' | 'other'
}

interface GroupRadioProps {
    control: Control<FormData>
    name: keyof FormData
}

export const GroupRadio: FC<GroupRadioProps> = ({ control, name }) => {
    return (
        <FormControl className={styles.formControl}>
            <FormLabel className={styles.formLabel} id='demo-row-radio-buttons-group-label'>
                Preferred contact method
            </FormLabel>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <RadioGroup className={styles.radioGroup} row aria-labelledby='demo-row-radio-buttons-group-label' {...field}>
                        <FormControlLabel value='female' control={<Radio className={styles.radio} />} label='Female' classes={{ label: styles.label }} />
                        <FormControlLabel value='male' control={<Radio className={styles.radio} />} label='Male' classes={{ label: styles.label }} />
                        <FormControlLabel value='other' control={<Radio className={styles.radio} />} label='Other' classes={{ label: styles.label }} />
                    </RadioGroup>
                )}
            />
        </FormControl>
    )
}
