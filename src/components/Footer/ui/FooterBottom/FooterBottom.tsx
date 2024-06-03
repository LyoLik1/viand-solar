import { FC } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { ROUTES } from '../../../../Routes'
import styles from './FooterBottom.module.scss'

const offersLink = [
    {
        name: 'Lorem ipsum1',
        link: `${ROUTES.OFFERS}#offer-1`
    },
    {
        name: 'Lorem ipsum2',
        link: `${ROUTES.OFFERS}#offer-2`
    },
    {
        name: 'Lorem ipsum3',
        link: `${ROUTES.OFFERS}#offer-3`
    }
]

const Links: FC = () => (
    <div className={styles.links}>
        <div className={styles.about}>
            <p className={styles.title}>UNTERNEHMEN</p>
            <ul className={styles.about_links}>
                <li>
                    <Link className={styles.link} to={`${ROUTES.ABOUT}#home`}>
                        Über uns
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} to={`${ROUTES.CONTACTS}#home`}>
                        Kontakt
                    </Link>
                </li>
            </ul>
        </div>
        <div className={styles.offers}>
            <p className={styles.title}>ANGEBOTE</p>
            <ul className={styles.offers_links}>
                {offersLink.map((offer) => (
                    <li key={offer.name}>
                        <Link className={styles.link} to={offer.link} key={offer.name}>
                            {offer.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

const ContactInfo: FC = () => (
    <div className={styles.contacts}>
        <p className={styles.title}>HAUPTSITZ</p>
        <ul className={styles.contacts_info}>
            <li className={styles.contacts_info_text}>Adresse: Lorem ipsum dolor sit.</li>
            <li className={styles.contacts_info_text}>Telefon: Lorem ipsum dolor sit.</li>
            <li className={styles.contacts_info_text}>E-Mail: Lorem ipsum dolor sit.</li>
        </ul>
    </div>
)

export const FooterBottom: FC = () => {
    return (
        <div className={styles.footer_bottom}>
            <ContactInfo />
            <Links />
        </div>
    )
}
