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
  const bestSeller = products.filter((product) => product.bestseller === true);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={200}
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
          delay: 3000,
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
              className="bg-white border-b border-x border-b-gray-100 border-x-gray-100 rounded-md w-1/3 max-w-[250px] mx-auto flex-wrap flex-grow relative group transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative w-[210px] h-[300px] my-5 bg-white border-b border-x rounded-md m-auto flex flex-col justify-between">
                {/* LOGO */}
                <div className="z-10 flex items-center justify-center absolute top-1 left-1">
                  {(() => {
                    if (product.brand == "She") {
                      return (
                        <img
                          src="/brands/1.svg"
                          alt="She Logo"
                          className="w-16"
                        />
                      );
                    } else if (product.brand == "Eugeneperma") {
                      return (
                        <img
                          src="/brands/2.svg"
                          alt="Eugeneperma Logo"
                          className="w-16"
                        />
                      );
                    } else if (product.brand == "Chenice") {
                      return (
                        <img
                          src="/brands/3.svg"
                          alt="Chenice Logo"
                          className="w-16"
                        />
                      );
                    } else {
                      return <span>Unknown Brand</span>; // Opcional: para manejar casos no previstos
                    }
                  })()}
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

                <div className="relative pb-[100%] mt-2">
                  <img
                    src={product.image_url}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 w-full p-2 h-full object-contain"
                  />
                </div>

                {/* PRODUCT INFO */}
                <div className="flex flex-grow items-center justify-between rounded-md p-3 group-hover:bg-gray-200 transition-colors duration-300">
                  <div className="">
                    <h3 className="text-xs font-semibold text-gray-700">
                      {product.name} {product.format}{" "}
                    </h3>
                  </div>

                  <div className="w-1/3 ml-2  text-center">
                    <h4 className="font-semibold text-gray-700 text-md">
                      €{product.price}
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
