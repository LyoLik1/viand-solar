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
                    Lorem ipsum dolor sit amet consectetur. Eu amet nibh purus porta in at est. Ac massa tristique in at. Orci eu integer vel senectus maecenas pulvinar augue venenatistyles. Sed et est vitae lobortis magna fusce convallis amet.
                </p>
                <div className={styles.info_buttons}>
                    <Button onClick={() => navigator(ROUTES.OFFERS)} width={isTablet || isMobile ? 'full' : 'half'} typeButton='transparent'>
                        zu unseren angeboten
                    </Button>
                    <Button onClick={() => navigator(ROUTES.ABOUT)} width={isTablet || isMobile ? 'full' : 'half'}>
                        Mehr über uns erfahren
                    </Button>
                </div>
            </div>
        </section>
    )
}
