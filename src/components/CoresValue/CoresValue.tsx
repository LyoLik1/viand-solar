import { FC } from 'react'
import ComfortImg from '../../assets/svg/comfort.svg'
import QualityImg from '../../assets/svg/quality.svg'
import SafetyImg from '../../assets/svg/safety.svg'
import styles from './CoresValue.module.scss'

export const CoresValue: FC = () => {
    return (
        <div className={styles.main}>
            <h2 className={styles.main_title}>Our core values</h2>
            <p className={styles.main_text}>Our mission is to set the highest standards for construction sphere.</p>
            <div className={styles.values}>
                <div className={`${styles.value} ${styles.quality}`}>
                    <img src={QualityImg} className={styles.value_img} alt='Quality icon' />
                    <h3 className={styles.value_title}>Quality</h3>
                    <p className={styles.value_text}>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                </div>
                <div className={`${styles.value} ${styles.safety}`}>
                    <img src={SafetyImg} className={styles.value_img} alt='Safety icon' />
                    <h3 className={styles.value_title}>Safety</h3>
                    <p className={styles.value_text}>Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.</p>
                </div>
                <div className={`${styles.value} ${styles.comfort}`}>
                    <img src={ComfortImg} className={styles.value_img} alt='Comfort icon' />
                    <h3 className={styles.value_title}>Comfort</h3>
                    <p className={styles.value_text}>Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>
                </div>
            </div>
        </div>
    )
}
