import { FC, ReactNode } from 'react'
import { Button as ButtonMui } from '@mui/material'
import styles from './Button.module.scss'

interface ButtonProps {
    type?: 'button' | 'submit'
    children: ReactNode
    onClick: () => void
    // width?: string | number
    width?: 'smallest' | 'small' | 'medium' | 'half' | 'large' | 'full'
    typeButton?: 'yellow' | 'transparent' | 'transparentBg'
    disable?: boolean
}

export const Button: FC<ButtonProps> = ({ type = 'button', width = 'medium', children, onClick, typeButton = 'yellow', disable = false }) => {
    const buttonStyles = {
        yellow: styles.yellow,
        transparent: styles.transparent,
        transparentBg: styles.transparentBg
    }
    const buttonWidth = {
        smallest: styles.smallest,
        small: styles.small,
        medium: styles.medium,
        half: styles.half,
        large: styles.large,
        full: styles.full
    }
    return (
        <ButtonMui
            type={type}
            onClick={onClick}
            className={`${buttonStyles[typeButton]} ${buttonWidth[width]}`}
            sx={{
                padding: width < '50px' ? '10px 0' : '10px'
            }}
            disabled={disable}
        >
            {children}
        </ButtonMui>
    )
}
