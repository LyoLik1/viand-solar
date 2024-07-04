import { FC, ReactNode } from 'react'
import { Button as ButtonMui } from '@mui/material'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps {
    type?: 'button' | 'submit'
    children: ReactNode
    onClick: () => void
    // width?: string | number
    width?: 'smallest' | 'small' | 'medium' | 'half' | 'large' | 'full'
    height?: 'medium'

    typeButton?: 'yellow' | 'transparent' | 'transparentBg'
    disable?: boolean
    className?: string
}

export const Button: FC<ButtonProps> = ({ type = 'button', width = 'medium', height, className, children, onClick, typeButton = 'yellow', disable = false }) => {
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
    const buttonHeight = {
        medium: styles.mediumHeight
    }
    return (
        <ButtonMui
            type={type}
            onClick={onClick}
            className={classNames(buttonStyles[typeButton], buttonWidth[width], height && buttonHeight[height], className)}
            sx={{
                padding: width < '50px' ? '10px 0' : '10px'
            }}
            disabled={disable}
        >
            {children}
        </ButtonMui>
    )
}
