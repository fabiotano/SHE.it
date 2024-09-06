'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 480px)').matches);
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const images = isMobile
    ? [
        '/carousel/mobile/image-1.jpg',
        '/carousel/mobile/image-2.jpg',
        '/carousel/mobile/image-3.jpg',
        '/carousel/mobile/image-4.jpg',
        '/carousel/mobile/image-5.jpg',
        '/carousel/mobile/image-6.jpg',
      ]
    : [
        '/carousel/laptop/image-1.jpg',
        '/carousel/laptop/image-2.jpg',
        '/carousel/laptop/image-3.jpg',
        '/carousel/laptop/image-4.jpg',
        '/carousel/laptop/image-5.jpg',
        '/carousel/laptop/image-6.jpg',
      ];

  return (
    <div className="relative" role="region" aria-label="Image Carousel">
      {/* Botones de navegación */}
      <div className="absolute w-full h-full pointer-events-none">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="absolute z-10 text-xl rounded-full next p-4 bg-slate-400 bg-opacity-50 cursor-pointer top-1/2 -translate-y-1/2 right-2 mr-2 text-gray-100 pointer-events-auto"
          role="button"
          aria-label="Next slide"
        />
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="absolute z-10 text-xl rounded-full prev p-4 bg-slate-400 bg-opacity-50 cursor-pointer top-1/2 -translate-y-1/2 left-2 ml-2 text-gray-100 pointer-events-auto"
          role="button"
          aria-label="Previous slide"
        />
      </div>

      <Swiper
        style={{
          '--swiper-pagination-color': '#FFBA08',
          '--swiper-pagination-bullet-inactive-color': 'rgb(148 163 184)',
          '--swiper-pagination-bullet-horizontal-gap': '3px',
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
        }}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        className="mySwiper h-72 md:h-[43vh] border"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              fill
              style={{ objectFit: 'cover' }}
              alt={`Slide image ${index + 1}`}
              priority={index === 0} // Carga la primera imagen con prioridad
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
