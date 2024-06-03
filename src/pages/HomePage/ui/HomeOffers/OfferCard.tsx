import { FC, ReactNode } from 'react'
import styles from './OfferCard.module.scss'

interface OfferCardProps {
    title: string
    img: ReactNode
    backgroundImage: string
    isHovered: boolean
}

export const OfferCard: FC<OfferCardProps> = ({ title, img, backgroundImage, isHovered }) => {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${backgroundImage})`, opacity: isHovered ? 1 : 0.7 }}>
            {img}
            <h3 className={`${styles.card_title} ${isHovered ? styles.card_title_hovered : ''}`}>{title}</h3>
        </div>
    )
}
