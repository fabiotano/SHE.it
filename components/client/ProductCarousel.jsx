"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ProductCarousel({ products }) {

  const bestSeller = products.filter(product => product.bestseller === true);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* PRODUCTS */}
        {bestSeller.map((product, index) => (
          <SwiperSlide key={index}>
            <Link
              href={`/products/${product.id}`}
              className="bg-white border-b border-x border-b-gray-100 border-x-gray-100 rounded-md hover:bg-gray-100 w-1/3 max-w-[200px] mx-auto flex-wrap flex-grow relative group transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative w-[210px] h-[300px] my-5 bg-white border-b border-x rounded-md m-auto hover:bg-gray-200 group transform transition-transform duration-300 hover:-translate-y-2">
                {/* LOGO */}
                <div className="w-8 h-6 z-10 flex items-center justify-center absolute top-2 left-2">
                  <img
                    src={product.brandLogo}
                    className="object-contain"
                    alt="Logo"
                  />
                </div>

                {/* FAV */}
                {product.newFlag && (
                  <div className="absolute top-1/2 bg-red-400 sm:-translate-x-1/4 w-14 h-7 text-white text-xs font-bold flex justify-center items-center z-50">
                    Nuevo!
                  </div>
                )}
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`absolute top-1 right-1 z-50 h-6 cursor-pointer text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    product.favorite ? "text-red-400" : "text-gray-400"
                  }`}
                />

                <div className="relative w-full p-6 h-0 pb-[100%] mt-2">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>

                {/* PRODUCT INFO */}
                <div className="flex flex-row items-center justify-between rounded-md p-3">
                  <div className="">
                    <h3 className="text-xs font-semibold text-gray-700">
                      {product.title} {product.format}{" "}
                    </h3>
                  </div>

                  <div className="w-1/3 ml-2 text-center">
                    <h4 className="text-md font-bold text-gray-900">
                      &euro;{Math.floor(product.price)}
                      <sup>{(product.price % 1).toFixed(2).substring(2)}</sup>
                    </h4>
                    <h4 className="text-xs font-semibold text-gray-700">
                      {product.price}
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
