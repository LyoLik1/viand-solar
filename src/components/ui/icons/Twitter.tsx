import { FC } from 'react'

interface TwitterProps {
    width?: string
    height?: string
}

export const Twitter: FC<TwitterProps> = ({ width = '25px', height = '25px' }) => {
    return (
        <svg width={width} height={height} viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M18.4908 3H21.6856L14.7064 10.9427L22.9168 21.75H16.4877L11.4533 15.1948L5.69183 21.75H2.49391L9.95954 13.2552L2.0835 3H8.67516L13.2272 8.99167L18.4908 3ZM17.37 19.8458H19.1408L7.71266 4.80417H5.81266L17.37 19.8458Z'
                fill='black'
            />
        </svg>
    )
}
