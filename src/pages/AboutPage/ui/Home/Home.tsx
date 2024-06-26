import { FC } from 'react'
import styles from './Home.module.scss'

export const Home: FC = () => {
    return (
        <section className={styles.main} id='home'>
            <div className={styles.main_wrapper}>
                <h1 className={styles.main_title}>Über uns</h1>
                <p className={styles.main_text}>Unsere Firma bietet seit August 2021 professionelle Dienstleistungen im Bereich der Installation von Solaranlagen an und garantiert unseren Kunden einen hochwertigen und zuverlässigen Service.</p>
            </div>
        </section>
    )
}
