import { FC } from 'react'
import Form from '../../../../components/Form/Form'
import styles from './ContactsForm.module.scss'

export const ContactsForm: FC = () => {
    return (
        <section className={styles.main} id='form'>
            <h2 className={styles.title}>Uns kontaktieren</h2>
            <p className={styles.text}>Verwenden Sie den Formular, um uns schnell zu kontaktieren.</p>
            <div className={styles.contact}>
                <div className={styles.contact_form}>
                    <Form headline={false} />
                </div>
            </div>
        </section>
    )
}
