'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';

export default function Carousel() {
  return (
    <div className="relative">
      <div className="absolute w-full h-full">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="absolute z-10 text-xl rounded-full next p-4 bg-slate-400 bg-opacity-50 cursor-pointer top-1/2 -translate-y-1/2 right-2 mr-2 text-gray-100"
        />
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="absolute z-10 text-xl rounded-full prev p-4 bg-slate-400 bg-opacity-50  cursor-pointer top-1/2 -translate-y-1/2 left-2 ml-2 text-gray-100"
        />
      </div>
      <Swiper
        // spaceBetween={30}
        style={{
          '--swiper-pagination-color': '#FFBA08',
          '--swiper-pagination-bullet-inactive-color':
            'rgb(148 163 184 / var(--tw-bg-opacity))',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-horizontal-gap': '3px',
          '--tw-bg-opacity': 1,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
        }}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        className="mySwiper h-64 md:h-96"
      >
        <SwiperSlide className="h-full">
          <Image
            src="/carousel/image-1.jpg"
            // style={{ objectFit: 'contain' }}
            fill
            style={{ objectFit: 'cover' }}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/carousel/image-2.jpg"
            fill
            style={{ objectFit: 'cover' }}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/carousel/image-3.jpg"
            style={{ objectFit: 'cover' }}
            fill
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/carousel/image-4.jpg"
            style={{ objectFit: 'cover' }}
            fill
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
