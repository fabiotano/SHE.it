import React from "react";
import Carrousel from './Carrousel';
import Brand from './Brand';

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
    <div>
      <Carrousel />
      <div className="background-color: #fafaf7 max-w-[1200px] mx-auto">
        <section className="bg-grey-500 p-5">
          <h2 className="text-center text-base text-rgb-700f1c">
            NUESTROS MARCAS
          </h2>
          {/* <Brand/> */}
        </section>

        <section className="#fafaf7 py-2">
          <h2 className="text-center text-base m-2 text-rgb-700f1c">
            PRODUCTOS DESTACADOS
          </h2>
          <ul className="flex flex-wrap justify-around items-center">
            {productos.map((producto) => (
              <li
                key={producto.id}
                className="w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2 text-center bg-white"
              >
                <article className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src="/product1-home.jpg"
                      alt={`Producto: ${producto.nombre}`}
                    />
                    <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-600">
                      <Link href={""} className="font-bold mb-4">
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="h-5 m-1 text-rgb-700f1c"
                        />
                      </Link>
                    </button>
                  </div>
                  <p>{producto.nombre}</p>
                  <p>{producto.precio}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-grey-500 p-5">
          <h2 className="text-center text-base text-rgb-700f1c">
            CATEGORIAS
          </h2>
        </section>

      </div>
    </div>
  );
}

export default Page;
