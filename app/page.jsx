import BrandCarousel from '@/components/BrandCarousel';
import Carousel from '@/components/Carousel';
import ProductCarousel from '@/components/ProductCarousel';

import React from 'react';

function page() {
  return (
    <div className="container m-auto ">
      <Carousel />
      <section>
        <h2 className="text-2xl font-bold text-center my-2">
          Productos Destacados
        </h2>
        <p className="text-sm text-center text-gray-400">
          Tienda Online de productos de Peluqueria y Estetica
        </p>
        <ProductCarousel />
      </section>
      <section>
        <h2 className="text-2xl font-bold text-center my-2">Nuestras Marcas</h2>
        <p className="text-sm text-center text-gray-400">
          Tienda Online de productos de Peluqueria y Estetica
        </p>
        <BrandCarousel />
      </section>
    </div>
  );
}

export default page;
