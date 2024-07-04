import { FC } from 'react'
import HelmetImg from '../../../../assets/svg/helmet.svg'
import LikeImg from '../../../../assets/svg/like.svg'
import RepairImg from '../../../../assets/svg/repair.svg'
import CoreItem from './CoreItem'
import styles from './Cores.module.scss'

export const Cores: FC = () => {
    return (
        <div className={styles.cores}>
            <CoreItem imgSrc={LikeImg} number='98%' text='Zufriedene Kunde' />
            <CoreItem imgSrc={RepairImg} number='2000+' text='Erledigte Projekte' />
            <CoreItem imgSrc={HelmetImg} number='12' text='Profis mit langjähriger Erfahrung' />
        </div>
    )
}
