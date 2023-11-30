import React from "react";
import Carrousel from "./Carrousel";
import Brand from "./Brand";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Page() {
  const productos = [
    {
      id: 1,
      nombre: "Producto 1",
      precio: "Precio1",
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: "Precio2",
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: "Precio3",
    },
    {
      id: 4,
      nombre: "Producto 4",
      precio: "Precio4",
    },
    {
      id: 5,
      nombre: "Producto 5",
      precio: "Precio5",
    },
    {
      id: 6,
      nombre: "Producto 6",
      precio: "Precio6",
    },
    {
      id: 7,
      nombre: "Producto 7",
      precio: "Precio7",
    },
    {
      id: 8,
      nombre: "Producto 8",
      precio: "Precio8",
    },
  ];

  const logos = [
    {
      id: 1,
      ruta: "/Logo-Eugenperma.jpg",
      alt: "Logo-Eugenperma",
    },
    {
      id: 2,
      ruta: "/Logo-Chenice.jpg",
      alt: "Logo-Chenice",
    },
    {
      id: 3,
      ruta: "/logo.jpg",
      alt: "Logo-SHE",
    },
  ];

  return (
    <div className="border-l border-r border-gray-300">
      <Carrousel />
      <div className="background-color: #fafaf7 max-w-[1200px] mx-auto">
        <section className="bg-grey-500 pt-5">
          <h2 className="text-center text-base mb-2 text-rgb-700f1c h-8 flex items-center justify-center bg-gray-100 sm:text-lg sm:h-10 lg:text-2xl lg:h-14">
            MARCHE ESCLUSIVE
          </h2>
          <div className="bg-white shadow-lg text-base rounded-full border-0.5 border-gray-800 justify-center w-2/3 my-5 mx-auto flex items-center">
            <p className="text-base sm:text-md lg:text-lg h-8">
              CAROUSEL MARCHE
            </p>
          </div>
        </section>

        <section className="bg-grey-500 pt-5">
          <h2 className="text-center text-base mb-2 text-rgb-700f1c h-8 flex items-center justify-center bg-gray-100 sm:text-lg sm:h-10 lg:text-2xl lg:h-12">
            PRODOTTI PIU VENDUTI
          </h2>
          <ul className="flex flex-wrap justify-around items-center">
            {productos.map((producto) => (
              <li
                key={producto.id}
                className="w-64 h-auto m-3 text-center border-gray-300 bg-gray-300 "
              >
                <article className="flex flex-col items-center">
                  <div className="relative rounded-md">
                    <img
                      className=""
                      src="/product1-home.jpg"
                      alt={`Producto: ${producto.nombre}`}
                    />
                    <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-orange-500 rounded-sm">
                      <Link href={""} className="font-bold mb-4">
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="h-5 m-1 text-rgb-700f1c"
                        />
                      </Link>
                    </button>
                  </div>
                  <p className="text-sm text-gray-800">{producto.nombre}</p>
                  <p className="text-xs text-gray-700">{producto.precio}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-grey-500 pt-5 sm:columns-2 sm:pb-5">
          <div className="relative">
            <img
              className="relative w-full"
              src="./categoria-foto1.jpeg"
              alt="Descripción de la imagen"
            />
            <div className="absolute bg-white bg-opacity-60 inset-y-0 w-3/4 p-3 m-4 sm:p-6 sm:m-7 lg:p-10 lg:m-11 rounded-md items-center text-left flex flex-col justify-between h-4/5">
              <span className="">
                I nostri shampoo a organici all'aloe vera organici all'aloe vera
                I nostri shampoo a organici
              </span>
              <a
                href="/ruta-del-catalogo"
                className=" underline text-blue-500"
              >
                Vai al catalogo...
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              className="relative w-full"
              src="./categoria-foto2.jpeg"
              alt="Descripción de la imagen"
            />
            <div className="absolute bg-white bg-opacity-70 inset-y-0 w-3/4 p-3 m-4 sm:p-6 sm:m-7 lg:p-10 lg:m-11 rounded-md items-center text-left flex flex-col justify-between h-4/5">
              <span className="">
                I nostri shampoo a organici all'aloe vera organici all'aloe vera
                I nostri shampoo a organici
              </span>
              <a
                href="/ruta-del-catalogo"
                className="underline text-blue-500"
              >
                Vai al catalogo...
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
