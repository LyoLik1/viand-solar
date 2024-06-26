import { FC } from 'react'
import PersonImg from '../../../../assets/img/person.png'
import Form from '../../../../components/Form/Form'
import styles from './ContactsForm.module.scss'

export const ContactsForm: FC = () => {
    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Uns kontaktieren</h2>
            <p className={styles.text}>Verwenden Sie den Formular, um uns schnell zu kontaktieren.</p>
            <div className={styles.contact}>
                <img className={styles.contact_person} src={PersonImg} alt='Worker' />
                <div className={styles.contact_form}>
                    <Form headline={false} />
                </div>
            </div>
        </div>
    )
}
