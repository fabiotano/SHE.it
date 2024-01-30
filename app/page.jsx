import BrandCarousel from '@/components/client/BrandCarousel';
import Carousel from '@/components/client/Carousel';
import ProductCarousel from '@/components/client/ProductCarousel';

import React from 'react';

function page() {
  return (
    <div className="container m-auto ">
      <Carousel />
      <section className="pt-8 pb-3 px-1">
        <h2 className="text-2xl font-bold text-center">Productos Destacados</h2>
        <p className="text-sm text-center text-gray-400">
          Tienda Online de productos de Peluqueria y Estetica
        </p>
        <ProductCarousel />
      </section>

      <section className="pt-8 pb-3 bg-gray-100">
        <h2 className="text-2xl font-bold text-center ">Nuestras Marcas</h2>
        <BrandCarousel />
      </section>

      <section className="pt-8 px-8 pb-3 ">
        <h2 className="text-2xl font-bold text-center">Categorias</h2>
        <p className="text-sm text-center text-gray-400">
          Descubri las categorias de nuestras marcas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:mt-5">
          {/* first div con clases diversas */}
          <div className="relative border rounded-md bg-white h-[333px] bg-cover bg-no-repeat bg-top mt-5 m-auto md:mt-2">
            <img
              className="w-full object-cover h-full"
              src="/Carrousell-image1.jpg"
              alt="Descripción de la imagen"
            />
            <div className="absolute inset-x-0 bottom-0 w-5/6 m-auto bg-white p-3">
              <h2 className="font-bold text-xl mb-2 text-black">CREMAS</h2>
              <p className="text-lg text-gray-400 mb-2">Descubre los packs</p>
              <p className="font-bold text-sm text-red-500 mb-2">
                Ver Todos --
              </p>
            </div>
          </div>

          <div className="relative border rounded-md bg-white h-[333px] bg-cover bg-no-repeat mt-2 m-auto">
            <img
              className="w-full object-cover h-full"
              src="/Carrousell-image1.jpg"
              alt="Descripción de la imagen"
            />
            <div className="absolute inset-x-0 bottom-0 w-5/6 m-auto bg-white p-3">
              <h2 className="font-bold text-xl mb-2 text-black">SHAMPOO</h2>
              <p className="text-lg text-gray-400 mb-2">Descubre los packs</p>
              <p className="font-bold text-sm text-red-500 mb-2">
                Ver Todos --
              </p>
            </div>
          </div>

          <div className="relative border rounded-md bg-white h-[333px] bg-cover bg-no-repeat mt-2 m-auto">
            <img
              className="w-full object-cover h-full"
              src="/Carrousell-image1.jpg"
              alt="Descripción de la imagen"
            />
            <div className="absolute inset-x-0 bottom-0 w-5/6 m-auto bg-white p-3">
              <h2 className="font-bold text-xl mb-2 text-black">SHAMPOO</h2>
              <p className="text-lg text-gray-400 mb-2">Descubre los packs</p>
              <p className="font-bold text-sm text-red-500 mb-2">
                Ver Todos --
              </p>
            </div>
          </div>

          <div className="relative border rounded-md bg-white h-[333px] bg-cover bg-no-repeat mt-2 m-auto">
            <img
              className="w-full object-cover h-full"
              src="/Carrousell-image1.jpg"
              alt="Descripción de la imagen"
            />
            <div className="absolute inset-x-0 bottom-0 w-5/6 m-auto bg-white p-3">
              <h2 className="font-bold text-xl mb-2 text-black">SHAMPOO</h2>
              <p className="text-lg text-gray-400 mb-2">Descubre los packs</p>
              <p className="font-bold text-sm text-red-500 mb-2">
                Ver Todos --
              </p>
            </div>
          </div>

          <div className="relative border rounded-md bg-white h-[333px] bg-cover bg-no-repeat mt-2 m-auto">
            <img
              className="w-full object-cover h-full"
              src="/Carrousell-image1.jpg"
              alt="Descripción de la imagen"
            />
            <div className="absolute inset-x-0 bottom-0 w-5/6 m-auto bg-white p-3">
              <h2 className="font-bold text-xl mb-2 text-black">SHAMPOO</h2>
              <p className="text-lg text-gray-400 mb-2">Descubre los packs</p>
              <p className="font-bold text-sm text-red-500 mb-2">
                Ver Todos --
              </p>
            </div>
          </div>

          {/* last div con clases diversas */}
          <div className="relative border rounded-md bg-white h-[333px] bg-cover bg-no-repeat mt-2 mb-8 m-auto">
            <img
              className="w-full object-cover h-full"
              src="/Carrousell-image1.jpg"
              alt="Descripción de la imagen"
            />
            <div className="absolute inset-x-0 bottom-0 w-5/6 m-auto bg-white p-3">
              <h2 className="font-bold text-xl mb-2 text-black">SOLARES</h2>
              <p className="text-lg text-gray-400 mb-2">Descubre los packs</p>
              <p className="font-bold text-sm text-red-500 mb-2">
                Ver Todos --
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
