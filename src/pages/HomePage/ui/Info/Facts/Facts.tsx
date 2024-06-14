import { FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { gsap } from 'gsap'
import styles from './Facts.module.scss'

const facts = [
    {
        number: '98%',
        text: 'Lorem ipsum1',
        value: 98,
        endValue: 105,
        color: '#F89828'
    },
    {
        number: '20',
        text: 'Lorem ipsum2',
        value: 20,
        endValue: 25,
        color: '#F52F6E'
    },
    {
        number: '9452',
        text: 'Lorem ipsum3',
        value: 9452,
        endValue: 11700,
        color: '#5A87FC'
    },
    {
        number: '100%',
        text: 'Lorem ipsum4',
        value: 100,
        endValue: 100,
        color: '#03CEA4'
    }
]

export const Facts: FC = () => {
    const factsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const animateCircle = (circle: SVGCircleElement, factValue: number, endValue: number, index: number) => {
            const radius = circle.r.baseVal.value
            const circumference = 2 * Math.PI * radius

            circle.style.strokeDasharray = `${circumference}`
            circle.style.strokeDashoffset = `${circumference}`

            gsap.to(circle, {
                strokeDashoffset: circumference - (circumference * factValue) / endValue,
                duration: 2.5,
                ease: 'linear'
            })

            gsap.to(`.fact_number_${index}`, {
                innerText: '0',
                duration: 0.1,
                onComplete: () => {
                    gsap.to(`.fact_number_${index}`, {
                        innerText: factValue + (facts[index].number.includes('%') ? '%' : ''),
                        duration: 2.5,
                        roundProps: 'innerText',
                        ease: 'linear',
                        snap: { innerText: 1 }
                    })
                }
            })
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.getAttribute('data-index')
                        if (index !== null) {
                            const fact = facts[parseInt(index)]
                            const circle = entry.target.querySelector(`.circle_${index}`) as SVGCircleElement
                            if (circle) {
                                animateCircle(circle, fact.value, fact.endValue, parseInt(index))
                            }
                        }
                    }
                })
            },
            { threshold: 0.5 }
        )

        const factsElements = factsRef.current?.querySelectorAll('.fact') || []
        factsElements.forEach((fact) => observer.observe(fact))

        return () => {
            factsElements.forEach((fact) => observer.unobserve(fact))
        }
    }, [])

    return (
        <div className={styles.main}>
            <h3 className={styles.title}>Some facts and figures</h3>
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
