import { FC } from 'react'
import { FormBg } from '../../components/FormBg/FormBg'
import styles from './HomePage.module.scss'
import { Cores } from './ui/Cores/Cores'
import { Home } from './ui/Home/Home'
import { HomeOffers } from './ui/HomeOffers/HomeOffers'
import { Info } from './ui/Info/Info'

export const HomePage: FC = () => {
    return (
        <main className={styles.main}>
            <Home />
            <Cores />
            <HomeOffers />
            <Info />
            <FormBg />
        </main>
    )
}
