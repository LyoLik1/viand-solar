import { FC } from 'react'
import classNames from 'classnames'
import ComfortImg from '../../assets/svg/comfort.svg'
import QualityImg from '../../assets/svg/quality.svg'
import SafetyImg from '../../assets/svg/safety.svg'
import styles from './CoresValue.module.scss'

const ValueItem: FC<{ imgSrc: string; title: string; text: string; styleClass: string }> = ({ imgSrc, title, text, styleClass }) => (
    <div className={classNames(styles.value, styleClass)}>
        <img src={imgSrc} className={styles.value_img} alt={`${title} icon`} />
        <h3 className={styles.value_title}>{title}</h3>
        <p className={styles.value_text}>{text}</p>
    </div>
)

export const CoresValue: FC = () => {
    return (
        <div className={styles.main}>
            <h2 className={styles.main_title}>Unsere Kernwerte</h2>
            <p className={styles.main_text}>Unsere Mission ist es, die höchsten Standards bei der Installation von Solarmodulen zu setzen.</p>
            <div className={styles.values}>
                <ValueItem imgSrc={QualityImg} title='Qualität' text='Unsere Verpflichtung zu höchster Qualität stellt sicher, dass jede Installation präzise und zuverlässig ist.' styleClass={styles.quality} />
                <ValueItem imgSrc={SafetyImg} title='Sicherheit' text='Unsere zertifizierten Fachleute gewährleisten, dass jede Installation den höchsten Sicherheitsstandards entspricht.' styleClass={styles.safety} />
                <ValueItem imgSrc={ComfortImg} title='Komfort' text='Von der ersten Beratung bis zur Installation und darüber hinaus bieten wir einen umfassenden Service, der auf Ihre Bedürfnisse zugeschnitten ist.' styleClass={styles.comfort} />
            </div>
        </div>
    )
}
