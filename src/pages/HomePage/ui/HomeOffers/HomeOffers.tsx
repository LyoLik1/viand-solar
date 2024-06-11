import { FC, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Card1BgImage from '../../../../assets/img/card1-bg.png'
import { Button } from '../../../../components/ui/Button/Button'
import { Build } from '../../../../components/ui/icons/Build'
import { Installation } from '../../../../components/ui/icons/Installation'
import { Paint } from '../../../../components/ui/icons/Paint'
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
            image: <Build color={hoveredIndex === 0 ? '#FFFFFF' : '#FCD400'} />,
            title: 'Lorem ipsum',
            bgImage: Card1BgImage,
            link: `${ROUTES.OFFERS}#offer-1`
        },
        {
            image: <Paint color={hoveredIndex === 1 ? '#FFFFFF' : '#FCD400'} />,
            title: 'Lorem ipsum',
            bgImage: Card1BgImage,
            link: `${ROUTES.OFFERS}#offer-2`
        },
        {
            image: <Installation color={hoveredIndex === 2 ? '#FFFFFF' : '#FCD400'} />,
            title: 'Lorem ipsum',
            bgImage: Card1BgImage,
            link: `${ROUTES.OFFERS}#offer-3`
        }
    ]

    return (
        <section className={styles.main}>
            <h2 className={styles.main_title}>Unsere Angebote</h2>
            <p className={styles.main_text}>Lorem ipsum dolor sit amet consectetur.</p>
            <div className={styles.offers}>
                {offers.map((offer, index) => (
                    <Link key={index} to={offer.link} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} className={styles.offers_offer}>
                        <OfferCard title={offer.title} img={offer.image} backgroundImage={offer.bgImage} isHovered={hoveredIndex === index} />
                    </Link>
                ))}
            </div>
            <div className={styles.main_info}>
                <span className={styles.main_info_text}>Erfahren Sie mehr über unsere Angebote</span>
                <Button onClick={() => navigator(ROUTES.OFFERS)} width={isDesktop ? 'large' : 'medium'}>
                    angebote anzeigen
                </Button>
            </div>
        </section>
    )
}
