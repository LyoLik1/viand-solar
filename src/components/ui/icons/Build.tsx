import { FC } from 'react'

interface BuildProps {
    color?: string
}

export const Build: FC<BuildProps> = ({ color = '#FCD400' }) => {
    return (
        <svg width='53' height='52' viewBox='0 0 53 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_139_441)'>
                <path
                    d='M50.9766 27.5234C51.8179 27.5234 52.5 26.8413 52.5 26V14.625C52.5 13.7837 51.8179 13.1016 50.9766 13.1016C49.9146 13.1016 29.168 13.1016 28.0234 13.1016V3.25C28.0234 2.40866 27.3413 1.72656 26.5 1.72656H10.25C9.40866 1.72656 8.72656 2.40866 8.72656 3.25V13.1016H2.02344C1.18209 13.1016 0.5 13.7837 0.5 14.625V26C0.5 26.8413 1.18209 27.5234 2.02344 27.5234H8.72656V35.8516H2.02344C1.18209 35.8516 0.5 36.5337 0.5 37.375V48.75C0.5 49.5913 1.18209 50.2734 2.02344 50.2734H50.9766C51.8179 50.2734 52.5 49.5913 52.5 48.75V37.375C52.5 36.5337 51.8179 35.8516 50.9766 35.8516H44.2734V27.5234H50.9766ZM49.4531 24.4766C47.8232 24.4766 37.7597 24.4766 36.1484 24.4766V16.1484H49.4531V24.4766ZM33.1016 24.4766C31.5059 24.4766 21.5046 24.4766 19.8984 24.4766V16.1484H33.1016V24.4766ZM11.7734 4.77344H24.9766V13.1016C23.3809 13.1016 13.3796 13.1016 11.7734 13.1016V4.77344ZM3.54688 24.4766V16.1484H16.8516V24.4766C15.2396 24.4766 5.17645 24.4766 3.54688 24.4766ZM11.7734 27.5234H24.9766V35.8516C23.3809 35.8516 13.3796 35.8516 11.7734 35.8516V27.5234ZM3.54688 38.8984H16.8516V47.2266H3.54688V38.8984ZM19.8984 38.8984H33.1016V47.2266H19.8984V38.8984ZM49.4531 38.8984V47.2266H36.1484V38.8984H49.4531ZM41.2266 35.8516C39.6309 35.8516 29.6296 35.8516 28.0234 35.8516V27.5234H41.2266V35.8516Z'
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id='clip0_139_441'>
                    <rect width='52' height='52' fill='white' transform='translate(0.5)' />
                </clipPath>
            </defs>
        </svg>
    )
}
