import { FC } from 'react'
import Form from '../Form/Form'
import styles from './Form.module.scss'

export const FormBg: FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.main_wrapper}>
                <Form />
            </div>
        </div>
    )
}
