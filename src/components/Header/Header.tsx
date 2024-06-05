import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import ChatImg from '../../assets/svg/chat.svg'
import LogoImg from '../../assets/svg/logo.svg'
import PhoneImg from '../../assets/svg/phone.svg'
import { useDevice } from '../../hooks/useDevice'
import { ROUTES } from '../../Routes'
import styles from './Header.module.scss'
import { HeaderMobile } from './HeaderMobile/HeaderMobile'

const menuItems = [
    {
        name: <img src={LogoImg} alt='Logo of company' />,
        link: `${ROUTES.HOME}`
    },
    {
        name: 'Heim',
        link: `${ROUTES.HOME}`
    },
    {
        name: 'Über uns',
        link: `${ROUTES.ABOUT}`
    },
    {
        name: 'Angebote',
        link: `${ROUTES.OFFERS}`
    },
    {
        name: 'Kontakt',
        link: `${ROUTES.CONTACTS}`
    }
]

export const Header: FC = () => {
    const location = useLocation()
    const { isDesktop } = useDevice()
    return (
        <header className={`${styles.header} ${location.pathname === ROUTES.OFFERS ? styles.header_transparent : ''}`}>
            {isDesktop ? (
                <div className={styles.header_wrapper}>
                    <nav>
                        <ul className={styles.nav}>
                            {menuItems.map((item, index) => (
                                <li key={index} className={styles.nav_link_wrapper}>
                                    <Link className={styles.nav_link} to={`${item.link}#home`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.contacts}>
                        {' '}
                        {/* Update phone number */}
                        <a target='_blank' href='tel:+123456789' className={styles.phone} rel='noreferrer'>
                            <img src={PhoneImg} alt='Phone image' />
                            <div className={styles.phone_info}>
                                <span className={styles.phone_info_text}>Telefon</span>
                                <span className={styles.phone_info_link}>(405) 555-0128</span>
                            </div>
                        </a>
                        <a target='_blank' href='mailto:example@example.com' className={styles.email} rel='noreferrer'>
                            {' '}
                            {/* Update email */}
                            <img src={ChatImg} alt='Email img' />
                            <div className={styles.email_info}>
                                <span className={styles.email_info_text}>E-Mail</span>
                                <span className={styles.email_info_link}>(405) 555-0128</span>
                            </div>
                        </a>
                    </div>
                </div>
            ) : (
                <HeaderMobile menyItems={menuItems} />
            )}
        </header>
    )
}
