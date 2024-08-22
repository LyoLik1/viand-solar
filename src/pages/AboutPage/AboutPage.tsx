import { FC } from 'react'
import { CoresValue } from '../../components/CoresValue/CoresValue'
import { FormBg } from '../../components/FormBg/FormBg'
import styles from './AboutPage.module.scss'
import { About } from './ui/About/About'
import { Cores } from './ui/Cores/Cores'
import { Home } from './ui/Home/Home'
import { Map } from './ui/Map/Map'

export const AboutPage: FC = () => {
    return (
        <main className={styles.main}>
            <Home />
            <Cores />
            <About />
            <CoresValue />
            <Map />
            <FormBg />
        </main>
    )
}
