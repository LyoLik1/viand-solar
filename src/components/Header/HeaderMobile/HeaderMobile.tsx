import { FC, ReactNode, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import CloseImg from '../../../assets/svg/close.svg'
import MenuImg from '../../../assets/svg/menu.svg'
import { Button } from '../../ui/Button/Button'
import styles from './HeaderMobile.module.scss'

interface MenuItemProps {
    name: string | ReactNode
    link: string
}

interface HeaderMobileProps {
    menyItems: MenuItemProps[]
}
export const HeaderMobile: FC<HeaderMobileProps> = ({ menyItems }) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [firstMenuItem, ...otherMenuItems] = menyItems

    const toggleMenuHandler = () => {
        setToggleMenu((prevState) => !prevState)
    }
    return (
        <div className={styles.header}>
            <Link className={styles.header_link} to={firstMenuItem.link}>
                {firstMenuItem.name}
            </Link>
            <div className={styles.nav}>
                <div className={styles.nav_button}>
                    <Button typeButton='transparent' onClick={toggleMenuHandler} width='small'>
                        <img src={MenuImg} alt='Menu img' />
                    </Button>
                </div>
                <div className={`${styles.nav_links} ${toggleMenu ? styles.nav_links_active : ''}`}>
                    <div className={styles.nav_links_wrapper}>
                        <div className={styles.nav_button_close}>
                            <Button onClick={toggleMenuHandler} typeButton='transparent' width='small'>
                                <img src={CloseImg} alt='Close img' />
                            </Button>
                        </div>
                        {otherMenuItems.map((item, index) => (
                            <Link onClick={toggleMenuHandler} className={styles.nav_links_link} to={`${item.link}#home`} key={index}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
