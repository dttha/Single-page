import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from "../../../../public/Mask group.png"
import styles from './slider.module.css';
import Image from 'next/image';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { useRef } from 'react';
import nextBtn from '../../../../public/nextBtn.png';
import prevBtn from '../../../../public/prevBtn.png';
export default function Slider() {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <div className={styles.slider}>
      <div className={styles.slider_container}>
        <div className={styles.slider_most_viewed}>
          Most viewed
        </div>
        <div className={styles.slider_wrapper}>
          <div className={styles.slider_preBtn} ref={navigationPrevRef}><Image src={prevBtn} alt="" /></div>
          <div className={styles.slider_nextBtn} ref={navigationNextRef}><Image src={nextBtn} alt="" /></div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={48}
            slidesPerView={5}
            className={styles.slider_swiper_container}
            onInit={(swiper: any) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              <div className={styles.swiper_slide_wrap}>
                <div className={styles.swiper_slide_img}>
                  <Image src={img1} alt="" width="100"></Image>
                </div>
                <div className={styles.swiper_slide_content}>
                  How Createur Made Waves for Client Sunny Life
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper_slide_wrap}>
                <div className={styles.swiper_slide_img}>
                  <Image src={img1} alt="" width="100"></Image>
                </div>
                <div className={styles.swiper_slide_content}>
                  How Createur Made Waves for Client Sunny Life
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper_slide_wrap}>
                <div className={styles.swiper_slide_img}>
                  <Image src={img1} alt="" width="100"></Image>
                </div>
                <div className={styles.swiper_slide_content}>
                  How Createur Made Waves for Client Sunny Life
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper_slide_wrap}>
                <div className={styles.swiper_slide_img}>
                  <Image src={img1} alt="" width="100"></Image>
                </div>
                <div className={styles.swiper_slide_content}>
                  How Createur Made Waves for Client Sunny Life
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper_slide_wrap}>
                <div className={styles.swiper_slide_img}>
                  <Image src={img1} alt="" width="100"></Image>
                </div>
                <div className={styles.swiper_slide_content}>
                  How Createur Made Waves for Client Sunny Life
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper_slide_wrap}>
                <div className={styles.swiper_slide_img}>
                  <Image src={img1} alt="" width="100"></Image>
                </div>
                <div className={styles.swiper_slide_content}>
                  How Createur Made Waves for Client Sunny Life
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper_slide_wrap}>
                <div className={styles.swiper_slide_img}>
                  <Image src={img1} alt="" width="100"></Image>
                </div>
                <div className={styles.swiper_slide_content}>
                  How Createur Made Waves for Client Sunny Life
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper_slide_wrap}>
                <div className={styles.swiper_slide_img}>
                  <Image src={img1} alt="" width="100"></Image>
                </div>
                <div className={styles.swiper_slide_content}>
                  How Createur Made Waves for Client Sunny Life
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div >
  )
}
