import { FC } from 'react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import Img from '../../../../../assets/img/card1-bg.png'
import ArrowLeft from '../../../../../assets/svg/arrow-left.svg'
import ArrowRight from '../../../../../assets/svg/arrow-right.svg'
import styles from './Reviews.module.scss'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

export const Reviews: FC = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (_index: number, className: string) {
            return `<span class="${classNames(styles.swiperPaginationBullet, className)}"></span>`
        }
    }

    return (
        <div className={styles.main}>
            <h3 className={styles.title}>Bewertungen</h3>
            <Swiper
                cssMode={true}
                rewind={true}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                }}
                pagination={pagination}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className={styles.slider}
            >
                <div className={classNames(styles.swiperButton, 'swiper-button-prev')}>
                    <img src={ArrowLeft} alt='Arrow Previous' />
                </div>

                <div className={classNames(styles.swiperButton, 'swiper-button-next')}>
                    <img src={ArrowRight} alt='Arrow Next' />
                </div>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <p className={styles.slide_text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in, itaque quidem maiores ut dolorem earum recusandae corporis laborum consectetur dolores fugit distinctio accusamus officia assumenda accusantium quo odio
                            error est nobis? Doloribus necessitatibus deserunt omnis quas molestias neque voluptatibus modi esse incidunt! Blanditiis, animi deserunt at voluptatibus autem inventore?
                        </p>
                        <img src={Img} className={styles.slide_img} alt='Solar Panels image' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <p className={styles.slide_text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in, itaque quidem maiores ut dolorem earum recusandae corporis laborum consectetur dolores fugit distinctio accusamus officia assumenda accusantium quo odio
                            error est nobis? Doloribus necessitatibus deserunt omnis quas molestias neque voluptatibus modi esse incidunt! Blanditiis, animi deserunt at voluptatibus autem inventore?
                        </p>
                        <img src={Img} className={styles.slide_img} alt='Solar Panels image' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <p className={styles.slide_text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in, itaque quidem maiores ut dolorem earum recusandae corporis laborum consectetur dolores fugit distinctio accusamus officia assumenda accusantium quo odio
                            error est nobis? Doloribus necessitatibus deserunt omnis quas molestias neque voluptatibus modi esse incidunt! Blanditiis, animi deserunt at voluptatibus autem inventore?
                        </p>
                        <img src={Img} className={styles.slide_img} alt='Solar Panels image' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <p className={styles.slide_text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in, itaque quidem maiores ut dolorem earum recusandae corporis laborum consectetur dolores fugit distinctio accusamus officia assumenda accusantium quo odio
                            error est nobis? Doloribus necessitatibus deserunt omnis quas molestias neque voluptatibus modi esse incidunt! Blanditiis, animi deserunt at voluptatibus autem inventore?
                        </p>
                        <img src={Img} className={styles.slide_img} alt='Solar Panels image' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <p className={styles.slide_text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in, itaque quidem maiores ut dolorem earum recusandae corporis laborum consectetur dolores fugit distinctio accusamus officia assumenda accusantium quo odio
                            error est nobis? Doloribus necessitatibus deserunt omnis quas molestias neque voluptatibus modi esse incidunt! Blanditiis, animi deserunt at voluptatibus autem inventore?
                        </p>
                        <img src={Img} className={styles.slide_img} alt='Solar Panels image' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <p className={styles.slide_text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in, itaque quidem maiores ut dolorem earum recusandae corporis laborum consectetur dolores fugit distinctio accusamus officia assumenda accusantium quo odio
                            error est nobis? Doloribus necessitatibus deserunt omnis quas molestias neque voluptatibus modi esse incidunt! Blanditiis, animi deserunt at voluptatibus autem inventore?
                        </p>
                        <img src={Img} className={styles.slide_img} alt='Solar Panels image' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <p className={styles.slide_text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in, itaque quidem maiores ut dolorem earum recusandae corporis laborum consectetur dolores fugit distinctio accusamus officia assumenda accusantium quo odio
                            error est nobis? Doloribus necessitatibus deserunt omnis quas molestias neque voluptatibus modi esse incidunt! Blanditiis, animi deserunt at voluptatibus autem inventore?
                        </p>
                        <img src={Img} className={styles.slide_img} alt='Solar Panels image' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <p className={styles.slide_text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in, itaque quidem maiores ut dolorem earum recusandae corporis laborum consectetur dolores fugit distinctio accusamus officia assumenda accusantium quo odio
                            error est nobis? Doloribus necessitatibus deserunt omnis quas molestias neque voluptatibus modi esse incidunt! Blanditiis, animi deserunt at voluptatibus autem inventore?
                        </p>
                        <img src={Img} className={styles.slide_img} alt='Solar Panels image' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <p className={styles.slide_text}>
                            Lorem ipsum doslor sit amet consectetur adipisicing elit. Harum in, itaque quidem maiores ut dolorem earum recusandae corporis laborum consectetur dolores fugit distinctio accusamus officia assumenda accusantium quo odio
                            error est nobis? Doloribus necessitatibus deserunt omnis quas molestias neque voluptatibus modi esse incidunt! Blanditiis, animi deserunt at voluptatibus autem inventore?
                        </p>
                        <img src={Img} className={styles.slide_img} alt='Solar Panels image' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
