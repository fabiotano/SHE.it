"use client";
import React, { useState } from "react";
import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";

import Link from "next/link";
import { products as allProducts, sortOptions } from "@/constants.js";

function Products() {

  const [products, setProducts] = useState(allProducts);

  const handleApplyFilters = (appliedFilters) => {
    console.log("Filters aplicados en Products:", appliedFilters);
    // Puedes realizar acciones adicionales con los filtros aplicados aquí
  };


  return (
    <div className="container">
      <div className="text-2xs py-2 pl-3">
        <p>
          <Link href={"/"}>Inicio</Link> /{" "}
          <span className="text-gray-300">Peluqueria</span>
        </p>
      </div>
      <div>
        <h2 className="text-5xl font-bold text-center">Peluquería</h2>
        <p className="text-center text-gray-400 text-xs mt-4 hidden sm:block">
          ¿Buscas las mejores ofertas online en productos Peluquería ? No
          busques más que nuestra tienda online ofrecemos una amplia variedad de
          productos de Peluquería a los precios más competitivos en línea.
          Además, ofrecemos regularmente promociones y descuentos especiales en
          nuestros productos, por lo que seguro que encontrarás la mejor oferta
          posible. Así que si buscas cualquier tipo de producto de Peluquería ,
          ¡asegúrate de consultar primero nuestra tienda online!
        </p>
      </div>
      <div className="mt-6 sm:flex">

      <Filter onApplyFilters={handleApplyFilters} />


        <section className="flex-grow">
          {/* Sort Results */}
          <div className="flex justify-center sm:justify-end">
            <p className="text-sm py-3 hidden sm:block">Ordenar por:</p>
            <select className="border-b border-gray-400  px-2 text-sm mx-10 py-3 outline-none w-full sm:w-auto">
              {sortOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>
          </div>
          {/* Products */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 py-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Products;
