import { FC } from 'react'
import PesonImg from '../../../../assets/img/person.png'
import styles from './Team.module.scss'

const team = [
    {
        img: <img src={PesonImg} className={styles.member_img} alt='Peson img' />,
        name: 'Courtney Alexander1',
        position: 'CEO, Co-Founder'
    },
    {
        img: <img src={PesonImg} className={styles.member_img} alt='Peson img' />,
        name: 'Courtney Alexander2',
        position: 'CEO, Co-Founder'
    },
    {
        img: <img src={PesonImg} className={styles.member_img} alt='Peson img' />,
        name: 'Courtdddfdfdfsdney Alexander',
        position: 'CEO, Co-Founder'
    },
    {
        img: <img src={PesonImg} className={styles.member_img} alt='Peson img' />,
        name: 'Courtney Alexander3',
        position: 'CEO, Co-Founder'
    },
    {
        img: <img src={PesonImg} className={styles.member_img} alt='Peson img' />,
        name: 'Courtney Alexander4',
        position: 'CEO, Co-Founder'
    },
    {
        img: <img src={PesonImg} className={styles.member_img} alt='Peson img' />,
        name: 'Courtney Alexander5',
        position: 'CEO, Co-Founder'
    },
    {
        img: <img src={PesonImg} className={styles.member_img} alt='Peson img' />,
        name: 'Courtney Alexander6',
        position: 'CEO, Co-Founder'
    },
    {
        img: <img src={PesonImg} className={styles.member_img} alt='Peson img' />,
        name: 'Courtney Alexander7',
        position: 'CEO, Co-Founder'
    }
]

export const Team: FC = () => {
    return (
        <section className={styles.main}>
            <h3 className={styles.main_title}>Unser Team</h3>
            <p className={styles.main_subtitle}>Lorem ipsum dolor sit amet consectetur.</p>
            <div className={styles.team}>
                {team.map((member) => (
                    <div key={member.name} className={styles.member}>
                        {member.img}
                        <h4 className={styles.member_name}>{member.name}</h4>
                        <span className={styles.member_position}>{member.position}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
