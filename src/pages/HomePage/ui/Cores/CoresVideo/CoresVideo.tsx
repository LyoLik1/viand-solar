import { FC } from 'react'
import VideoImg from '../../../../../assets/img/footer-image.webp'
import styles from './CoresVideo.module.scss'

export const CoresVideo: FC = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.main_title}>Wir sind Viand Solar</h1>
            <p className={styles.main_text}>Lorem ipsum dolor sit amet consectetur.</p>
            <img src={VideoImg} className={styles.main_img} alt='video' />
        </div>
    )
}
