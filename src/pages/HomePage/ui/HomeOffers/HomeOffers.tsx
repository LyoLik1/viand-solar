import { FC, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Card1BgImage from '../../../../assets/img/card1-bg.png'
import { Button } from '../../../../components/ui/Button/Button'
import { Service } from '../../../../components/ui/icons/Service'
import { Installation } from '../../../../components/ui/icons/Installation'
import { Planing } from '../../../../components/ui/icons/Planing'
import { useDevice } from '../../../../hooks/useDevice'
import { ROUTES } from '../../../../Routes'
import styles from './HomeOffers.module.scss'
import { OfferCard } from './OfferCard'

interface OfferProps {
    image: ReactNode
    title: string
    bgImage: string
    link: string
}

export const HomeOffers: FC = () => {
    const { isDesktop } = useDevice()
    const navigator = useNavigate()
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index)
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null)
    }

    const offers: OfferProps[] = [
        {
            image: <Planing color={hoveredIndex === 0 ? '#FFFFFF' : '#FCD400'} />,
            title: 'Beratung und Planung',
            bgImage: Card1BgImage,
            link: `${ROUTES.OFFERS}#offer-1`
        },
        {
            image: <Installation color={hoveredIndex === 1 ? '#FFFFFF' : '#FCD400'} />,
            title: 'Installation',
            bgImage: Card1BgImage,
            link: `${ROUTES.OFFERS}#offer-2`
        },
        {
            image: <Service color={hoveredIndex === 2 ? '#FFFFFF' : '#FCD400'} />,
            title: 'Wartung und Support',
            bgImage: Card1BgImage,
            link: `${ROUTES.OFFERS}#offer-3`
        }
    ]

    return (
        <section className={styles.main}>
            <h3 className={styles.main_title}>Unsere Dienstleistungen</h3>
            <p className={styles.main_text}>Wir bieten professionellen Service in den folgenden Aspekten an.</p>
            <div className={styles.offers}>
                {offers.map((offer, index) => (
                    <Link key={index} to={offer.link} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} className={styles.offers_offer}>
                        <OfferCard title={offer.title} img={offer.image} backgroundImage={offer.bgImage} isHovered={hoveredIndex === index} />
                    </Link>
                ))}
            </div>
            <div className={styles.main_info}>
                <span className={styles.main_info_text}>Erfahren Sie mehr über unsere Leistungen</span>
                <Button onClick={() => navigator(ROUTES.OFFERS)} width={isDesktop ? 'large' : 'medium'}>
                    Leistungen anzeigen
                </Button>
            </div>
        </section>
    )
}
