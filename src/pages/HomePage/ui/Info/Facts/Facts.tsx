import { FC } from 'react'
import classNames from 'classnames'
import styles from './Facts.module.scss'
import { useFacts } from './useFacts'

const facts = [
    {
        number: '98%',
        text: 'Zufriedene Kunde',
        value: 98,
        endValue: 105,
        color: '#F89828'
    },
    {
        number: '5520',
        text: 'Stunden bei der Arbeit',
        value: 5520,
        endValue: 5520,
        color: '#5A87FC'
    },
    {
        number: '100%',
        text: 'Erfolgreich abgeschlossene Projekte',
        value: 100,
        endValue: 100,
        color: '#03CEA4'
    }
]

export const Facts: FC = () => {
    const factsRef = useFacts({ facts })

    return (
        <div className={styles.main}>
            <h3 className={styles.title}>Einige Fakten über uns</h3>
            <div className={styles.facts} ref={factsRef}>
                {facts.map((fact, index) => (
                    <div className={classNames(styles.fact, 'fact')} key={fact.text} data-index={index}>
                        <svg width='148' height='148' viewBox='0 0 148 148' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <circle cx='74' cy='74' r='71' stroke={fact.color} opacity={0.3} strokeWidth='6' />
                            <circle
                                cx='74'
                                cy='74'
                                r='71'
                                stroke={fact.color}
                                strokeWidth='6'
                                className={`circle circle_${index}`}
                                style={{
                                    transform: 'rotate(-90deg)',
                                    transformOrigin: 'center',
                                    strokeDasharray: '0',
                                    strokeDashoffset: '0'
                                }}
                            />
                        </svg>
                        <span className={classNames(styles.fact_count, `fact_number_${index}`)}>0</span>
                        <p className={styles.fact_text}>{fact.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
