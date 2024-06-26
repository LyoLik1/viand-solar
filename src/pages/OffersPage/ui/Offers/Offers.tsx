import { FC } from 'react'
import classNames from 'classnames'
import Img from '../../../../assets/img/card1-bg.png'
import { Button } from '../../../../components/ui/Button/Button'
import { useDevice } from '../../../../hooks/useDevice'
import styles from './Offers.module.scss'

export const Offers: FC = () => {
    const { isMobile } = useDevice()
    return (
        <section className={styles.main}>
            <div className={styles.offers_list}>
                <div className={styles.offers_item} id='offer-1'>
                    {isMobile ? (
                        <Button onClick={() => {}} typeButton='transparentBg' width='medium'>
                            mehr erfahren
                        </Button>
                    ) : null}
                    <img src={Img} className={styles.offers_item_img} alt='Offer 1 image' />
                    <div className={styles.offers_item_info}>
                        <h2 className={styles.offers_item_info_title}>Beratung und Planung</h2>
                        <p className={styles.offers_item_info_text}>
                            Unsere Experten stehen Ihnen von Anfang an zur Seite. Wir bieten eine umfassende Beratung und individuelle Planung, um die besten Lösungen für Ihre spezifischen Bedürfnisse zu entwickeln. Dabei berücksichtigen wir sowohl
                            technische Anforderungen als auch ästhetische Aspekte.
                        </p>
                        {isMobile ? null : (
                            <Button onClick={() => {}} typeButton='transparentBg' width='medium'>
                                mehr erfahren
                            </Button>
                        )}
                    </div>
                </div>
                <div className={classNames(styles.offers_item, isMobile ? '' : styles.offers_item_reverse)} id='offer-2'>
                    {isMobile ? (
                        <Button onClick={() => {}} typeButton='transparentBg' width='medium'>
                            mehr erfahren
                        </Button>
                    ) : null}
                    <img src={Img} className={styles.offers_item_img} alt='Offer 2 image' />
                    <div className={styles.offers_item_info}>
                        <h2 className={styles.offers_item_info_title}>Professionelle Installation</h2>
                        <p className={styles.offers_item_info_text}>
                            Unsere qualifizierten Techniker sorgen für eine fachgerechte und effiziente Installation Ihrer Solaranlage. Wir verwenden nur hochwertige Materialien und modernste Technik, um eine maximale Energieausbeute zu
                            gewährleisten.
                        </p>
                        {isMobile ? null : (
                            <Button onClick={() => {}} typeButton='transparentBg' width='medium'>
                                mehr erfahren
                            </Button>
                        )}
                    </div>
                </div>
                <div className={styles.offers_item} id='offer-3'>
                    {isMobile ? (
                        <Button onClick={() => {}} typeButton='transparentBg' width='medium'>
                            mehr erfahren
                        </Button>
                    ) : null}
                    <img src={Img} className={styles.offers_item_img} alt='Offer 3 image' />
                    <div className={styles.offers_item_info}>
                        <h2 className={styles.offers_item_info_title}>Wartung und Support</h2>
                        <p className={styles.offers_item_info_text}>
                            Ihre Bedürfnisse können sich im Laufe der Zeit ändern, und wir sind hier, um Sie dabei zu unterstützen. Ob Sie Ihre bestehende Solaranlage erweitern oder auf den neuesten Stand der Technik bringen möchten, wir bieten
                            maßgeschneiderte Lösungen, die sich Ihren Anforderungen anpassen. Unsere Experten beraten Sie gerne und entwickeln individuelle Erweiterungskonzepte.
                        </p>
                        {isMobile ? null : (
                            <Button onClick={() => {}} typeButton='transparentBg' width='medium'>
                                mehr erfahren
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
