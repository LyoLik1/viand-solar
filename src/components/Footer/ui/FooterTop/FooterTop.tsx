import { FC } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import LogoImg from '../../../../assets/svg/logo.svg'
import { Facebook } from '../../../ui/icons/Facebook'
import { Twitter } from '../../../ui/icons/Twitter'
import { WhatsApp } from '../../../ui/icons/WhatsApp'
import styles from './FooterTop.module.scss'

const networks = [
    {
        image: <Facebook />,
        link: 'https://www.facebook.com/',
        label: 'Facebook'
    },
    {
        image: <Twitter />,
        link: 'https://x.com/',
        label: 'Twitter'
    },
    {
        image: <WhatsApp />,
        link: 'https://web.whatsapp.com/',
        label: 'WhatsApp'
    }
]

const NetworksLinks: FC = () => {
    return (
        <ul className={styles.links}>
            {networks.map((network) => (
                <li key={network.link}>
                    <Link to={network.link} className={styles.link} aria-label={network.label}>
                        {network.image}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export const FooterTop: FC = () => {
    return (
        <div className={styles.footer_top}>
            <div className={styles.footer_top_links}>
                <img className={styles.footer_top_logo} src={LogoImg} alt='Logo Viand Solar' />
                <NetworksLinks />
            </div>
            <p className={styles.footer_top_description}>
                Lorem ipsum dolor sit amet consectetur. Tortor pulvinar ut orci non leo neque interdum ut. Pellentesque ipsum quis mi enim tempus aliquam pellentesque luctus. Vel magna augue tempor leo leo morbi.
            </p>
        </div>
    )
}
