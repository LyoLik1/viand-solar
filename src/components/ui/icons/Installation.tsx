import { FC } from 'react'

interface InstallationProps {
    color?: string
}

export const Installation: FC<InstallationProps> = ({ color = '#FCD400' }) => {
    return (
        <svg width='53' height='52' viewBox='0 0 53 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_139_436)'>
                <path
                    d='M46.4062 3.14844C44.1552 3.14844 42.1854 4.37521 41.1303 6.19531H2.02344C1.18209 6.19531 0.5 6.87741 0.5 7.71875V47.3281C0.5 48.1695 1.18209 48.8516 2.02344 48.8516H46.4062C49.7663 48.8516 52.5 46.1179 52.5 42.7578V9.24219C52.5 5.88209 49.7663 3.14844 46.4062 3.14844ZM46.4062 45.8047C45.8103 45.8047 4.1011 45.8047 3.54688 45.8047V9.24219H40.3125V42.7578C40.3125 43.5992 40.9946 44.2812 41.8359 44.2812C42.6773 44.2812 43.3594 43.5992 43.3594 42.7578C43.3594 41.0778 44.7262 39.7109 46.4062 39.7109C48.0863 39.7109 49.4531 41.0778 49.4531 42.7578C49.4531 44.4379 48.0863 45.8047 46.4062 45.8047ZM49.4531 37.4818C48.5563 36.9619 47.5153 36.6641 46.4062 36.6641C45.2972 36.6641 44.2562 36.9619 43.3594 37.4818V9.24219C43.3594 7.56214 44.7262 6.19531 46.4062 6.19531C48.0863 6.19531 49.4531 7.56214 49.4531 9.24219V37.4818Z'
                    fill={color}
                />
                <path
                    d='M35.6406 12.2891H8.21875C7.37741 12.2891 6.69531 12.9712 6.69531 13.8125V41.2344C6.69531 42.0757 7.37741 42.7578 8.21875 42.7578H23.4531C23.8572 42.7578 24.2446 42.5972 24.5303 42.3115C24.8161 42.0259 24.9766 41.6384 24.9766 41.2344V38.1875C24.9766 36.2013 26.2501 34.507 28.0234 33.8782V41.2344C28.0234 42.0757 28.7055 42.7578 29.5469 42.7578H35.6406C36.482 42.7578 37.1641 42.0757 37.1641 41.2344V13.8125C37.1641 12.9712 36.482 12.2891 35.6406 12.2891ZM34.1172 39.7109H31.0703V32.0938C31.0703 31.2524 30.3882 30.5703 29.5469 30.5703C25.3468 30.5703 21.9297 33.9874 21.9297 38.1875V39.7109H9.74219V30.5703H15.8359V35.1406C15.8359 35.982 16.518 36.6641 17.3594 36.6641C18.2007 36.6641 18.8828 35.982 18.8828 35.1406V29.0469C18.8828 28.2055 18.2007 27.5234 17.3594 27.5234H9.74219V15.3359H18.8828V21.4297H14.3125C13.4712 21.4297 12.7891 22.1118 12.7891 22.9531C12.7891 23.7945 13.4712 24.4766 14.3125 24.4766H20.4062H26.5C27.3413 24.4766 28.0234 23.7945 28.0234 22.9531C28.0234 22.1118 27.3413 21.4297 26.5 21.4297H21.9297V15.3359H34.1172V39.7109Z'
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id='clip0_139_436'>
                    <rect width='52' height='52' fill='white' transform='translate(0.5)' />
                </clipPath>
            </defs>
        </svg>
    )
}