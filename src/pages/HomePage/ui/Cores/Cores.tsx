import { FC } from 'react'
import { CoresValue } from '../../../../components/CoresValue/CoresValue'
import styles from './Cores.module.scss'
import { CoresVideo } from './CoresVideo/CoresVideo'

export const Cores: FC = () => {
    return (
        <section className={styles.main} id='cores'>
            <CoresVideo />
            <CoresValue />
        </section>
    )
}
