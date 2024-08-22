import { FC } from 'react'
import { Facts } from './Facts/Facts'
import styles from './Info.module.scss'
export const Info: FC = () => {
    return (
        <section className={styles.info}>
            <Facts />
        </section>
    )
}
