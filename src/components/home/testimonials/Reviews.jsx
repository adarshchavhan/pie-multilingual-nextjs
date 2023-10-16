"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './testimonials.module.css';

const Reviews = ({reviews}) => {
  return (
    <div className={styles.swiper}>
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        autoPlay={{
            delay:1000,
            disableOnInteraction: false
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        {reviews.map((item, i) => (
            <SwiperSlide className={styles.swiperSlide} key={i}>
                <p className={styles.review}>{item.review}</p>
                <h4 className={styles.name}>{item.name}</h4>
                <h4 className={styles.role}>{item.role} <span>{item.location}</span></h4>
            </SwiperSlide>

        ))}
      </Swiper>
    </div>
  )
}

export default Reviews