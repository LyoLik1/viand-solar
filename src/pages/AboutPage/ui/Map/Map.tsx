import { FC } from 'react'
import styles from './Map.module.scss'

export const Map: FC = () => {
    return (
        <section className={styles.map}>
            <h3 className={styles.map_title}>Sie finden uns hier</h3>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586.7298207643971!2d7.273960541349757!3d52.692560962961345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b791a849dca71d%3A0xee1706caa50939dc!2sAndersenweg%202%2C%2049716%20Meppen!5e0!3m2!1sen!2sde!4v1720293378132!5m2!1sen!2sde'
                width='100%'
                height='80%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Google Maps'
            ></iframe>
            <p className={styles.map_text}>Wir arbeiten vor Ort im Umkreis von 300 Kilometern.</p>
        </section>
    )
}
