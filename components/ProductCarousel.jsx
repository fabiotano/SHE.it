'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

const products = [
  {
    title: 'Product 1',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: '/products/image-1.jpg',
    newFlag: true,
    price: 979.14,
    discount: 5,
    favorite: true,
  },
  {
    title: 'Product 2',
    desc: 'Brief description',
    image: '/products/image-2.jpg',
    newFlag: false,
    price: 364.29,
    discount: 10,
    favorite: false,
  },
  {
    title: 'Product 3',
    desc: 'Brief description',
    image: '/products/image-3.jpg',
    newFlag: false,
    price: 936.77,
    discount: 10,
    favorite: false,
  },
  {
    title: 'Product 4',
    desc: 'Brief description',
    image: '/products/image-4.jpg',
    newFlag: true,
    price: 196.24,
    discount: 10,
    favorite: true,
  },
  {
    title: 'Product 5',
    desc: 'Brief description',
    image: '/products/image-5.jpg',
    newFlag: true,
    price: 651.71,
    discount: 5,
    favorite: true,
  },
  {
    title: 'Product 6',
    desc: 'Brief description',
    image: '/products/image-6.jpg',
    newFlag: false,
    price: 106.5,
    discount: 5,
    favorite: true,
  },
  {
    title: 'Product 7',
    desc: 'Brief description',
    image: '/products/image-7.jpg',
    newFlag: true,
    price: 263.04,
    discount: 5,
    favorite: false,
  },
  {
    title: 'Product 8',
    desc: 'Brief description',
    image: '/products/image-8.jpg',
    newFlag: false,
    price: 385.75,
    discount: 5,
    favorite: true,
  },
];

export default function ProductCarousel() {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[200px] h-[300px] my-4 bg-white border rounded-md m-auto">
              {product.newFlag && (
                <div className="absolute top-1/2 bg-red-400 -translate-x-1/4 w-14 h-7 text-white text-xs font-bold flex justify-center items-center z-50">
                  Nuevo!
                </div>
              )}
              <FontAwesomeIcon
                icon={faHeart}
                className={`absolute top-3 right-3 z-50 text-xl cursor-pointer ${
                  product.favorite ? 'text-red-400' : 'text-gray-400'
                }`}
              />
              <div className="relative w-[150px] h-[150px] m-auto mt-6">
                <Image
                  src={product.image}
                  alt=""
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="text-center font-bold text-lg mt-3">
                {product.title}
              </h3>
              <h6 className="text-center text-xs text-gray-400">
                {product.desc}
              </h6>
              <h4 className="text-center font-bold mt-3">
                &euro;
                {` ${Math.floor(product.price)}`}
                <sup>{(product.price % 1).toFixed(2).substring(2)}</sup>
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
