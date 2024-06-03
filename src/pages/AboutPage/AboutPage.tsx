import { FC } from 'react'
import { CoresValue } from '../../components/CoresValue/CoresValue'
import { FormBg } from '../../components/FormBg/FormBg'
import styles from './AboutPage.module.scss'
import { Home } from './ui/Home/Home'
import { Map } from './ui/Map/Map'
import { Team } from './ui/Team/Team'

export const AboutPage: FC = () => {
    return (
        <main className={styles.main}>
            <Home />
            <CoresValue />
            <Team />
            <Map />
            <FormBg />
        </main>
    )
}
