import { FC } from 'react'
import s from './About.module.scss'

export const About: FC = () => {
    return (
        <div className={s.about}>
            <div className={s.about_text}>
                <div className={s.description}>
                    <p className={s.description_text}>
                        Dank unseres Expertenteams hält unser Unternehmen hohe Standards im Kundenservice ein und bietet umfassende Unterstützung und Beratung in allen Aspekten der Installation von Solarmodulen, um eine qualitativ hochwertige
                        Ausführung der Arbeit zu gewährleisten.
                    </p>
                    <p className={s.description_author}>Viktor Viand</p>
                    <p className={s.description_position}>Geschäftsführer </p>
                </div>
            </div>
        </div>
    )
}
