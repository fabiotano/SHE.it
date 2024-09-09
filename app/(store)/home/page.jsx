"use client";
import BrandCarousel from "@/components/client/BrandCarousel";
import Carousel from "@/components/client/Carousel";
import ProductCarousel from "@/components/client/ProductCarousel";
import ProductCategory from "@/components/client/ProductCategory";
// import {products}  from "@/products";
import { useEffect } from "react";
import { useProducts } from "@/app/context/ProductContext";

import { filters } from "@/constants.js";

const categoryFilter = filters.find(filter => filter.titleBackend === "category");
const categoryOptions = categoryFilter ? categoryFilter.options : [];

function Home() {
  const { state, fetchProducts } = useProducts();
  const { products, loading } = state;

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container m-auto ">
      <Carousel />
      <section className="w-full max-w-6xl mx-auto px-6 pt-8 md:pt-14">
        <h2 className="text-2xl font-bold text-center my-2 text-gray-800">
          Le nostre scelte per te
        </h2>
        <p className="text-sm text-center text-gray-400 mb-4">
          Scopri i prodotti in primo piano che renderanno i tuoi capelli
          impeccabili. Entra e porta l'eccellenza nel tuo salone!
        </p>
        <ProductCarousel products={products} />
      </section>

      <section className="w-full max-w-6xl mx-auto px-6 pt-8 md:pt-14 pb-5">
        <h2 className="text-2xl font-bold text-center my-2 text-gray-800">
          Le nostre marche
        </h2>
      </section>
      <div className="bg-gray-100 py-6 mb-4">
        <BrandCarousel />
      </div>

      <section className="w-full max-w-6xl mx-auto py-6 pt-8 md:pt-14">
        <h2 className="text-2xl font-bold text-center my-2 text-gray-800">
          Categorie
        </h2>
        <p className="text-sm text-center text-gray-400 mb-4">
          Scopri la nostra vasta gamma di prodotti per capelli, accessori e
          creme
        </p>

        <div className="flex flex-col justify-center md:flex-wrap md:flex-row mt-6">
          {categoryOptions.map((category, index) => (
            <ProductCategory key={index} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;