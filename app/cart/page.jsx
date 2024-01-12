import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTrash,
  faPersonRunning,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <div className="container">
      <div className="text-2xs py-2 pl-3">
        <p>
          <Link href={"/"}>Carrito</Link>
        </p>
      </div>
      <h2 className="text-5xl font-bold text-center">Carrito</h2>
      <section className="mt-6 flex-grow md:flex">
        <ul className="mt-6 mx-4 flex-auto flex flex-col flex-wrap justify-center md:mb-4">
          <li className="py-4 border-b flex flex-auto gap-1">
            <div className="flex-auto basis-1/6 border-right flex justify-center">
              <img
                src="/products/image-1.jpg"
                alt="Product Image"
                style={{ width: "112px", height: "112px" }}
              />
            </div>
            <div className="flex flex-col basis-1/2 flex-auto justify-between">
              <h2 className="text-sm text-gray-900">CARMEN TT DEVELOPER</h2>
              <h3 className="text-xs text-gray-500 pt-1">5-9-15 VOL 1000 ML</h3>
              <p className="pt-2">$12.67</p>
              <div className="grid grid-cols-3 pt-3">
                <form className="flex justify-left">
                  <input
                    type="button"
                    value="-"
                    id={`qty-minus`}
                    className="w-5 border flex-shrink-0"
                  />
                  <input
                    type="text"
                    id={`quantity`}
                    className="w-8 text-center border flex-shrink-0"
                    name="quantity"
                    value={"1"}
                  />
                  <input
                    type="button"
                    value="+"
                    id={`qty-plus`}
                    className="w-5 border flex-shrink-0"
                  />
                </form>
                <p className="font-semibold text-center text-md">12.67</p>
                <div className="text-center">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
          </li>
          <li className="py-4 flex flex-auto gap-1">
            <div className="flex-auto basis-1/6 border-right flex justify-center">
              <img
                src="/products/image-1.jpg"
                alt="Product Image"
                style={{ width: "112px", height: "112px" }}
              />
            </div>
            <div className="flex flex-col basis-1/2 flex-auto justify-between">
              <h2 className="text-sm text-gray-900">CARMEN TT DEVELOPER</h2>
              <h3 className="text-xs text-gray-500 pt-1">5-9-15 VOL 1000 ML</h3>
              <p className="pt-2">$12.67</p>
              <div className="grid grid-cols-3 pt-3">
                <form className="flex justify-left">
                  <input
                    type="button"
                    value="-"
                    id={`qty-minus`}
                    className="w-5 border flex-shrink-0"
                  />
                  <input
                    type="text"
                    id={`quantity`}
                    className="w-8 text-center border flex-shrink-0"
                    name="quantity"
                    value={"2"}
                  />
                  <input
                    type="button"
                    value="+"
                    id={`qty-plus`}
                    className="w-5 border flex-shrink-0"
                  />
                </form>
                <p className="font-semibold text-center">12.67</p>
                <div className="text-center">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
          </li>
          <li className="py-4 flex flex-auto gap-1">
            <div className="flex-auto basis-1/6 border-right flex justify-center">
              <img
                src="/products/image-1.jpg"
                alt="Product Image"
                style={{ width: "112px", height: "112px" }}
              />
            </div>
            <div className="flex flex-col basis-1/2 flex-auto justify-between">
              <h2 className="text-sm text-gray-900">CARMEN TT DEVELOPER</h2>
              <h3 className="text-xs text-gray-500 pt-1">5-9-15 VOL 1000 ML</h3>
              <p className="pt-2">$12.67</p>
              <div className="grid grid-cols-3 pt-3">
                <form className="flex justify-left">
                  <input
                    type="button"
                    value="-"
                    id={`qty-minus`}
                    className="w-5 border flex-shrink-0"
                  />
                  <input
                    type="text"
                    id={`quantity`}
                    className="w-8 text-center border flex-shrink-0"
                    name="quantity"
                    value={"2"}
                  />
                  <input
                    type="button"
                    value="+"
                    id={`qty-plus`}
                    className="w-5 border flex-shrink-0"
                  />
                </form>
                <p className="font-semibold text-center">12.67</p>
                <div className="text-center">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
          </li>
          <button className="hover:bg-gray-200 mx-8 border border border-gray-400 text-sm px-5 py-2 mt-3 mb-5">
            {" "}
            <FontAwesomeIcon
              icon={faPersonRunning}
              flip="horizontal"
              className="mr-2"
            />{" "}
            Seguir comprando
          </button>
        </ul>
        <div className="mx-12 my-8 flex-auto h-fit border border-gray-600 md:mr-5">
          <ul className="px-3 text-left mt-2">
            <li className="my-1">
              <p className="text-black inline-block text-xs">3 Artículos</p>
              <p className="text-black inline-block float-right text-xs">100</p>
            </li>
            <li className="my-1">
              <p className="text-black inline-block text-xs">3 Artículos</p>
              <p className="text-black inline-block float-right text-xs">100</p>
            </li>
            <li className="my-1">
              <p className="text-black inline-block text-xs">3 Artículos</p>
              <p className="text-black inline-block float-right text-xs">100</p>
            </li>
            <li className="my-1">
              <p className="text-black inline-block text-xs">3 Artículos</p>
              <p className="text-black inline-block float-right text-xs">100</p>
            </li>
          </ul>
          <div className="px-3 py-2 border-t">
            <p className="text-black font-semibold inline-block ">TOTAL</p>
            <p className="text-black inline-block font-semibold float-right text-sm">
              100
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
