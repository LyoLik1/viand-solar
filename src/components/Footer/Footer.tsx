import { FC, useState } from 'react'
import { Button } from '../ui/Button/Button'
import { Arrow } from '../ui/icons/Arrow'
import styles from './Footer.module.scss'
import { FooterBottom } from './ui/FooterBottom/FooterBottom'
import { FooterTop } from './ui/FooterTop/FooterTop'

export const Footer: FC = () => {
    const [isHover, setIsHover] = useState(false)

    const toggleHover = () => {
        setIsHover(!isHover)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <FooterTop />
                <FooterBottom />
            </div>
            <div className={styles.button_wrapper} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <Button className={styles.button} onClick={scrollToTop} width='small'>
                    <Arrow color={isHover ? 'black' : 'white'} />
                </Button>
            </div>
        </footer>
    )
}
