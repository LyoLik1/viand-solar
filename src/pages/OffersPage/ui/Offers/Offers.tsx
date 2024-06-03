import { FC } from 'react'
import Img from '../../../../assets/img/card1-bg.png'
import { Button } from '../../../../components/ui/Button/Button'
import { useDevice } from '../../../../hooks/useDevice'
import styles from './Offers.module.scss'

export const Offers: FC = () => {
    const { isMobile } = useDevice()
    return (
        <section className={styles.main}>
            <div className={styles.offers_list}>
                <div className={styles.offers_item} id='offer-1'>
                    {isMobile ? (
                        <Button onClick={() => {}} typeButton='transparentBg' width='medium'>
                            mehr erfahren
                        </Button>
                    ) : null}
                    <img src={Img} className={styles.offers_item_img} alt='Offer 1 image' />
                    <div className={styles.offers_item_info}>
                        <h2 className={styles.offers_item_info_title}>Lorem ipsum</h2>
                        <p className={styles.offers_item_info_text}>
                            Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac
                            interdum. Eget aliquam dignissim ut vestibulum.
                        </p>
                        {isMobile ? null : (
                            <Button onClick={() => {}} typeButton='transparentBg' width='medium'>
                                mehr erfahren
                            </Button>
                        )}
                    </div>
                </div>
                <div className={`${styles.offers_item} ${isMobile ? '' : styles.offers_item_reverse}`} id='offer-2'>
                    {isMobile ? (
                        <Button onClick={() => {}} typeButton='transparentBg' width='medium'>
                            mehr erfahren
                        </Button>
                    ) : null}
                    <img src={Img} className={styles.offers_item_img} alt='Offer 2 image' />
                    <div className={styles.offers_item_info}>
                        <h2 className={styles.offers_item_info_title}>Lorem ipsum</h2>
                        <p className={styles.offers_item_info_text}>
                            Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac
                            interdum. Eget aliquam dignissim ut vestibulum.{' '}
                        </p>
                        {isMobile ? null : (
                            <Button onClick={() => {}} typeButton='transparentBg' width='medium'>
                                mehr erfahren
                            </Button>
                        )}
                    </div>
                </div>
                <div className={styles.offers_item} id='offer-3'>
                    {isMobile ? (
                        <Button onClick={() => {}} typeButton='transparentBg' width='medium'>
                            mehr erfahren
                        </Button>
                    ) : null}
                    <img src={Img} className={styles.offers_item_img} alt='Offer 3 image' />
                    <div className={styles.offers_item_info}>
                        <h2 className={styles.offers_item_info_title}>Lorem ipsum</h2>
                        <p className={styles.offers_item_info_text}>
                            Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac
                            interdum. Eget aliquam dignissim ut vestibulum.{' '}
                        </p>
                        {isMobile ? null : (
                            <Button onClick={() => {}} typeButton='transparentBg' width='medium'>
                                mehr erfahren
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
