import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import InstallationImg from '../../../../assets/svg/installationOffer.svg'
import PlaningImg from '../../../../assets/svg/planingOffer.svg'
import SupportImg from '../../../../assets/svg/supportOffer.svg'
import { Button } from '../../../../components/ui/Button/Button'
import { useDevice } from '../../../../hooks/useDevice'
import { ROUTES } from '../../../../Routes'
import styles from './Offers.module.scss'

const OfferItem: FC<{ id: string; title: string; text: string; reverse?: boolean; img: ReactNode }> = ({ id, title, text, reverse, img }) => {
    const { isMobile } = useDevice()
    const navigator = useNavigate()

    return (
        <div className={classNames(styles.offers_item, reverse && styles.offers_item_reverse)} id={id}>
            {isMobile && (
                <Button onClick={() => navigator(ROUTES.CONTACTS)} typeButton='transparentBg' width='medium'>
                    Uns kontaktieren
                </Button>
            )}
            {img}
            <div className={styles.offers_item_info}>
                <h2 className={styles.offers_item_info_title}>{title}</h2>
                <p className={styles.offers_item_info_text}>{text}</p>
                {!isMobile && (
                    <Button onClick={() => navigator(ROUTES.CONTACTS)} typeButton='transparentBg' width='medium'>
                        Uns kontaktieren
                    </Button>
                )}
            </div>
        </div>
    )
}

export const Offers: FC = () => (
    <section className={styles.main}>
        <div className={styles.offers_list}>
            <OfferItem
                id='service-1'
                title='Beratung und Planung'
                text='Unsere Experten stehen Ihnen von Anfang an zur Seite. Wir bieten eine umfassende Beratung und individuelle Planung, um die besten Lösungen für Ihre spezifischen Bedürfnisse zu entwickeln. Dabei berücksichtigen wir sowohl technische Anforderungen als auch ästhetische Aspekte.'
                img={<img src={PlaningImg} alt='Beratung und Planung' className={styles.offers_item_img} />}
            />
            <OfferItem
                id='service-2'
                title='Professionelle Installation'
                text='Unsere qualifizierten Techniker sorgen für eine fachgerechte und effiziente Installation Ihrer Solaranlage. Wir verwenden nur hochwertige Materialien und modernste Technik, um eine maximale Energieausbeute zu gewährleisten.'
                reverse
                img={<img src={InstallationImg} alt='Professionelle Installation' className={styles.offers_item_img} />}
            />
            <OfferItem
                id='service-3'
                title='Wartung und Support'
                text='Ihre Bedürfnisse können sich im Laufe der Zeit ändern, und wir sind hier, um Sie dabei zu unterstützen. Ob Sie Ihre bestehende Solaranlage erweitern oder auf den neuesten Stand der Technik bringen möchten, wir bieten maßgeschneiderte Lösungen, die sich Ihren Anforderungen anpassen. Unsere Experten beraten Sie gerne und entwickeln individuelle Erweiterungskonzepte.'
                img={<img src={SupportImg} alt='Wartung und Support' className={styles.offers_item_img} />}
            />
        </div>
    </section>
)
