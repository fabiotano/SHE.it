"use client";
import Link from "next/link";

const brands = Array.from({ length: 6 }, (_, index) => index + 1).map(
  (brand) => `/brands/${brand}.svg`
);

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";

export default function BrandCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          height: "110px",
        }}
        autoplay={{
          delay: 3000, // Incrementa el delay para observar cambios
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        loop={true}
        speed={2000} // Ajusta la velocidad para suavizar la transición
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {brands.map((file) => (
          <SwiperSlide key={file} className="flex justify-center items-center">
            <Link href={"/home"}>
              <img
                src={file}
                alt={`Brand`}
                className="h-32 w-auto mx-2 transition-transform duration-300 transform hover:-translate-y-3"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
