'use client';
import { Carousel } from '@material-tailwind/react';

export default function Carrousel() {
  return (
    <Carousel
      className="h-92"
      autoplay={true}
      autoplayDelay={3000}
      loop={true}
      transition={{ duration: 2 }}
    >
      <img
        src="carrousel/product1-home.jpeg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="carrousel/product1-home.jpeg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="carrousel/product1-home.jpeg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="carrousel/product1-home.jpeg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}