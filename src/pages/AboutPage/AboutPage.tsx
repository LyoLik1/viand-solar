import { FC } from 'react'
import { CoresValue } from '../../components/CoresValue/CoresValue'
import { FormBg } from '../../components/FormBg/FormBg'
import styles from './AboutPage.module.scss'
import { About } from './ui/About/About'
import { Cores } from './ui/Cores/Cores'
import { Home } from './ui/Home/Home'
import { Map } from './ui/Map/Map'
import { Team } from './ui/Team/Team'

export const AboutPage: FC = () => {
    return (
        <main className={styles.main}>
            <Home />
            <Cores />
            <About />
            <CoresValue />
            <Team />
            <Map />
            <FormBg />
        </main>
    )
}
