import { FC } from 'react'
import HelmetImg from '../../../../assets/svg/helmet.svg'
import RepairImg from '../../../../assets/svg/repair.svg'
import LikeImg from '../../../../assets/svg/like.svg'

import s from './Cores.module.scss'

export const Cores: FC = () => {
    return (
        <div className={s.cores}>
            <div className={s.core}>
                <img className={s.core_img} src={LikeImg} />
                <p className={s.core_number}>98%</p>
                <p className={s.core_text}>Zufriedene Kunde</p>
            </div>
            <div className={s.core}>
                <img className={s.core_img} src={RepairImg} />
                <p className={s.core_number}>2000+</p>

                <p className={s.core_text}>Erledigte Projekte</p>
            </div>
            <div className={s.core}>
                <img className={s.core_img} src={HelmetImg} />
                <p className={s.core_number}>12</p>

                <p className={s.core_text}>Profis mit langjähriger Erfahrung</p>
            </div>
        </div>
    )
}
