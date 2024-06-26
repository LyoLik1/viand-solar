import { FC } from 'react'
import styles from './ContactsHome.module.scss'

export const ContactsHome: FC = () => {
    return (
        <section className={styles.main} id='home'>
            <div className={styles.main_wrapper}>
                <h1 className={styles.main_title}>kontakt</h1>
            </div>
        </section>
    )
}
