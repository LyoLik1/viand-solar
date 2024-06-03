import { FC } from 'react'
import { FormBg } from '../../components/FormBg/FormBg'
import styles from './OffersPage.module.scss'
import { Offers } from './ui/Offers/Offers'
import { OffersHome } from './ui/OffersHome/OffersHome'
export const OffersPage: FC = () => {
    return (
        <main className={styles.main}>
            <OffersHome />
            <Offers />
            <FormBg />
        </main>
    )
}
