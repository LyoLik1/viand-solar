import { FC } from 'react'
import styles from './ContactsPage.module.scss'
import { ContactsForm } from './ui/ContactsForm/ContactsForm'
import { ContactsHome } from './ui/ContactsHome/ContactsHome'
import { ContactsNetworks } from './ui/ContactsNetworks/ContactsNetworks'

export const ContactsPage: FC = () => {
    return (
        <main className={styles.main}>
            <ContactsHome />
            <ContactsForm />
            <ContactsNetworks />
        </main>
    )
}
