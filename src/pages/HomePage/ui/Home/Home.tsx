import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoImg from '../../../../assets/svg/logoLarge.svg'
import { Button } from '../../../../components/ui/Button/Button'
import { useDevice } from '../../../../hooks/useDevice'
import { ROUTES } from '../../../../Routes'
import styles from './Home.module.scss'

export const Home: FC = () => {
    const { isTablet, isMobile } = useDevice()
    const navigator = useNavigate()
    return (
        <section className={styles.home} id='home'>
            <div className={styles.info}>
                <img className={styles.info_img} src={LogoImg} alt='Logo Viand Solar' />
                <p className={styles.info_text}>
                    Bei Viand Solar sind wir darauf spezialisiert, nachhaltige und effiziente Solarenergielösungen anzubieten, die auf Ihre individuellen Bedürfnisse zugeschnitten sind. Unsere hochmodernen Solarmodule und professionellen
                    Installationsdienste helfen Ihnen, Energiekosten zu sparen und gleichzeitig Ihren CO2-Fußabdruck zu reduzieren.
                </p>
                <div className={styles.info_buttons}>
                    <Button onClick={() => navigator(ROUTES.OFFERS)} width={isTablet || isMobile ? 'full' : 'half'} typeButton='transparent'>
                        zu unseren leistungen
                    </Button>
                    <Button onClick={() => navigator(ROUTES.ABOUT)} width={isTablet || isMobile ? 'full' : 'half'}>
                        Mehr über uns erfahren
                    </Button>
                </div>
            </div>
        </section>
    )
}
