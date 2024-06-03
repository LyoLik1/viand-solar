import { FC } from 'react'

interface FacebookProps {
    width?: string
    height?: string
}

export const Facebook: FC<FacebookProps> = ({ width = '25px', height = '25px' }) => {
    return (
        <svg width={width} height={height} viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M17.7083 2H14.5833C13.202 2 11.8772 2.54873 10.9005 3.52549C9.92373 4.50224 9.375 5.827 9.375 7.20833V10.3333H6.25V14.5H9.375V22.8333H13.5417V14.5H16.6667L17.7083 10.3333H13.5417V7.20833C13.5417 6.93207 13.6514 6.66711 13.8468 6.47176C14.0421 6.27641 14.3071 6.16667 14.5833 6.16667H17.7083V2Z'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}
