import { FC } from 'react'
import ArrowUpImg from '../../assets/svg/arrow-up.svg'
import { Button } from '../ui/Button/Button'
import styles from './Footer.module.scss'
import { FooterBottom } from './ui/FooterBottom/FooterBottom'
import { FooterTop } from './ui/FooterTop/FooterTop'

export const Footer: FC = () => {
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
            <div className={styles.button}>
                <Button onClick={scrollToTop} width='smallest'>
                    <img src={ArrowUpImg} alt='arrow up button' />
                </Button>
            </div>
        </footer>
    )
}
