import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './OfferCard.module.scss'

interface OfferCardProps {
    title: string
    img: ReactNode
    backgroundImage: string
    isHovered: boolean
}

export const OfferCard: FC<OfferCardProps> = ({ title, img, backgroundImage, isHovered }) => {
    return (
        <div className={styles.card} style={{ transition: 'all 0.3s', backgroundImage: `url(${backgroundImage})`, opacity: isHovered ? 1 : 0.6 }}>
            {img}
            <h3 className={classNames(styles.card_title, isHovered ? styles.card_title_hovered : '')}>{title}</h3>
        </div>
    )
}
