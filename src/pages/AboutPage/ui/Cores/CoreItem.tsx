import { FC } from 'react'
import styles from './Cores.module.scss'

interface CoreItemProps {
    imgSrc: string
    number: string
    text: string
}

const CoreItem: FC<CoreItemProps> = ({ imgSrc, number, text }) => (
    <div className={styles.core}>
        <img className={styles.core_img} src={imgSrc} alt={text} />
        <p className={styles.core_number}>{number}</p>
        <p className={styles.core_text}>{text}</p>
    </div>
)

export default CoreItem
