'use client';
const brands = Array.from({ length: 13 }, (_, index) => index + 1).map(
  (brand) => `/brands/${brand}.svg`
);

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules

import { Autoplay, FreeMode } from 'swiper/modules';

export default function BrandCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        freeMode={true}
        style={{
          '--swiper-pagination-color': '#FFBA08',
          '--swiper-pagination-bullet-inactive-color': '#999999',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '16px',
          '--swiper-pagination-bullet-horizontal-gap': '6px',
        }}
        autoplay={{
          delay: 2,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 7,
          },
        }}
        loop={true}
        speed={5000}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {brands.map((file) => (
          <SwiperSlide key={file}>
            <img src={file} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
