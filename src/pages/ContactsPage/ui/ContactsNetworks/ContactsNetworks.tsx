import { FC } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { Facebook } from '../../../../components/ui/icons/Facebook'
import { Twitter } from '../../../../components/ui/icons/Twitter'
import { WhatsApp } from '../../../../components/ui/icons/WhatsApp'
import styles from './ContactsNetworks.module.scss'

const networks = [
    {
        image: <Facebook width='50px' height='50px' />,
        link: 'https://www.facebook.com/'
    },
    {
        image: <Twitter width='50px' height='50px' />,
        link: 'https://www.facebook.com/'
    },
    {
        image: <WhatsApp width='50px' height='50px' />,
        link: 'https://www.facebook.com/'
    }
]

export const ContactsNetworks: FC = () => {
    return (
        <section className={styles.main}>
            <h3 className={styles.title}>Entdecken Sie uns auf</h3>
            <ul className={styles.networks}>
                {networks.map((network) => (
                    <li key={network.link}>
                        <Link to={network.link} className={styles.link}>
                            {network.image}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
