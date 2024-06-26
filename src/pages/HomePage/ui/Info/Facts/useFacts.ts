import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface Fact {
    number: string
    text: string
    value: number
    endValue: number
    color: string
}

// Define the type for the props of the useFacts hook
type UseFactsProps = {
    facts: Fact[]
}
export const useFacts = ({ facts }: UseFactsProps) => {
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
    }, [facts])

    return factsRef
}
