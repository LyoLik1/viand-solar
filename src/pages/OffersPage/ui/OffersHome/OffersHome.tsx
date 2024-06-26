import { FC } from 'react'
import styles from './OffersHome.module.scss'

export const OffersHome: FC = () => {
    return (
        <section className={styles.main} id='home'>
            <div className={styles.main_wrapper}>
                <h1 className={styles.main_title}>leistungen</h1>
                <p className={styles.main_text}>Komplette Solarenergie-Lösungen für Ihr Zuhause und Ihr Unternehmen.</p>
            </div>
        </section>
    )
}
