import BrandCarousel from "@/components/client/BrandCarousel";
import Carousel from "@/components/client/Carousel";
import ProductCarousel from "@/components/client/ProductCarousel";
import ProductCategory from "@/components/client/ProductCategory";
import {products}  from "@/products";
import React from "react";

function Home() {
  return (
    <div className="container m-auto ">
      <Carousel />
      <section className="w-full max-w-6xl mx-auto px-6 py-8 md:py-14">
        <h2 className="text-2xl font-bold text-center">Le nostre scelte per te</h2>
        <p className="text-sm text-center text-gray-400 mt-2 mb-4">
          Scopri i prodotti in primo piano che renderanno i tuoi capelli
          impeccabili. Entra e porta l'eccellenza nel tuo salone!
        </p>
        <ProductCarousel products={products}/>
      </section>

      <section className="py-4 md:py-8 bg-gray-100">
        {/* <h2 className="text-2xl font-bold text-center">Brands</h2> */}
        <BrandCarousel />
      </section>

      <section className="w-full max-w-6xl mx-auto px-6  py-8 md:py-14 sm:pb-8 ">
        <h2 className="text-2xl font-bold text-center">Categorie</h2>
        <p className="text-sm text-center text-gray-400 mt-2 mb-4">
          Scopri la nostra vasta gamma di prodotti per capelli, accessori e
          creme
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
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
        </div>
      </section>
    </div>
  );
}

export default Home;
