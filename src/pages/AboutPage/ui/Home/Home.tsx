import { FC } from 'react'
import styles from './Home.module.scss'

export const Home: FC = () => {
    return (
        <section className={styles.main} id='home'>
            <div className={styles.main_wrapper}>
                <h1 className={styles.main_title}>Über uns</h1>
                <p className={styles.main_text}>Lorem ipsum dolor sit amet consectetur. Viverra vel sed in vitae enim blandit molestie. Lorem in neque faucibus eu adipiscing id a. Ac id lobortis pellentesque sit.</p>
            </div>
        </section>
    )
}
