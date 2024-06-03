import { FC } from 'react'
import { Facts } from './Facts/Facts'
import styles from './Info.module.scss'
import { Reviews } from './Reviews/Reviews'
export const Info: FC = () => {
    return (
        <section className={styles.info}>
            <Reviews />
            <Facts />
        </section>
    )
}
