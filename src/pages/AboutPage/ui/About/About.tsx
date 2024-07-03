import { FC } from 'react'
import PersonImg from '../../../../assets/img/person.png'
import QuotesImg from '../../../../assets/svg/quotes.svg'
import s from './About.module.scss'

export const About: FC = () => {
    return (
        <div className={s.about}>
            <div className={s.about_wrapper}>
                <img alt='CEO photo' className={s.about_img} src={PersonImg} />
                <div className={s.about_text}>
                    <div className={s.im_wrapper}>
                        <img className={s.img} alt='Quotes' src={QuotesImg} />
                    </div>
                    <div className={s.description}>
                        <p className={s.description_text}>
                            Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi. Odio
                            massa purus vel praesent arcu enim elit felis viverra.
                            <br /> <br /> Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet eleifend amet. Vet suspendisse faucibus tempor ipsum integer.
                        </p>
                        <p className={s.description_author}>Courtney Alexander</p>
                        <p className={s.description_position}>CEO - Createx Construction Bureau </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
