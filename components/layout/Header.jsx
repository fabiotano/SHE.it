"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUserCircle,
  faCartShopping,
  faBars,
  faCircleXmark,
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { mainMenu } from "@/constants";

export default function Header2() {
  const [showMenu, setShowMenu] = useState(false);

  const clickMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <header className="border border-b-red-900 shadow-md">
        <div className="hidden sm:flex  justify-end items-center h-7 text-xs bg-gray-100">
          <ul className="flex items-center space-x-2 p-2">
            <li>
              <a>info@she.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="h-3 ml-1" />
            </li>
            <li>329.4131.136</li>
          </ul>
        </div>
        <div>
          <div className="flex w-full py-5 container">
            {/* Menú desplegable para dispositivos pequeños */}
            <div
              onClick={clickMenuHandler}
              className="sm:hidden w-14 flex-initial flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faBars} className="h-6 text-gray-700" />
            </div>
            {/* Logo */}
            <div className="flex flex-auto justify-center sm:justify-start ">
              <Link href="/home">
                <img
                  src="/logoShe.png"
                  alt="LogoSHE"
                  className="h-14 lg:-ml-2  sm:h-19 lg:h-21 sm:order-first"
                />
              </Link>
            </div>
            {/* Barra de búsqueda */}
            <div className="hidden sm:flex flex-auto items-center">
              <div className="flex items-center justify-between border border-gray-300 p-2 h-8 w-5/6 mx-auto sm:visible rounded-md">
                <form className="flex-auto" action="">
                  <input
                    className=" outline-slate-100 outline-0 w-full"
                    type="text"
                    placeholder="Buscar"
                  />
                </form>
              </div>
            </div>
            {/* Iconos de usuario y carrito */}
            <div className="w-24 flex-initial flex items-center justify-evenly">
              <div>
                <Link href="/login">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="text-gray-600 h-7 hover:text-gray-800 transform transition-transform duration-200 hover:scale-125"
                  />
                </Link>
              </div>
              <div className="flex text-gray-600 relative hover:text-gray-800 transform transition-transform duration-200 hover:scale-125 space-x-3">
                <Link href="/cart">
                  <div className="absolute -top-2 -right-1 flex justify-center items-center rounded-full w-4 h-4 bg-red-500 text-white text-xs">
                    12
                  </div>
                  <FontAwesomeIcon icon={faCartShopping} className="h-7" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-b-grey-300"></div>
          <nav>
            <ul className="flex items-center justify-center text-sm py-2 sm:py-0 sm:p-3 lg:pl-1 container">
              <li className="sm:hidden flex items-center text-xs border border-gray-300 rounded-md justify-between w-full p-2 pl-3 mx-4 sm:text-lg lg:text-xl my-2">
                <form className="flex-auto" action="">
                  <input
                    className=" outline-slate-100 outline-0 w-full"
                    type="text"
                    placeholder="Buscar"
                  />
                </form>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="h-4" />
              </li>

              <li className="hidden sm:flex space-x-3 p-2">
                {/* <Link href="products" */}
                {mainMenu.map((menuItem, idx) => (
                  <Link
                    href={`${menuItem.href}`}
                    key={idx}
                    className="justify-center w-32 py-3 flex-shrink-0 flex-grow-0 hidden sm:flex"
                  >
                    <div className="text-gray-500 hover:text-gray-800 font-semibold sm:text-sm lg:text-md transform transition-transform duration-200 hover:scale-125">
                      <span className="flex items-center justify-center">
                        {menuItem.title}
                      </span>
                      <span className="flex items-center justify-center text-xs pt-2">
                        {menuItem.logo}
                      </span>
                    </div>
                  </Link>
                ))}
              </li>
              {/* </Link> */}
            </ul>
          </nav>
        </div>
      </header>
      {showMenu && (
        <div className="p-6 left-0 w-full h-screen bg-red-500 opacity-95 z-20 items-center">
          <ul className="gap-5 flex flex-col justify-center">
            <li className="mt-4 pb-5 w-auto border-white text-center">
              <div
                onClick={clickMenuHandler}
                className="text-gray-300 hover:underline inline-flex justify-center items-center w-max p-2 rounded cursor-pointer transform transition-transform duration-100 group"
              >
                <FontAwesomeIcon
                  className="h-7 transform transition-transform duration-300 group-hover:scale-150 group-hover:text-white"
                  icon={faCircleXmark}
                />
              </div>
            </li>

            <li className="pb-4 flex justify-between relative group">
              <Link
                href="/products/capelli"
                onClick={clickMenuHandler}
                className="text-white hover:underline flex items-center transform transition-transform duration-300 group-hover:translate-x-8"
              >
                <img
                  src="/iconos/secador-de-pelo.png"
                  alt="Accessori Logo"
                  className="h-6 mr-4"
                />
                ACCESSORI
              </Link>
              <FontAwesomeIcon icon={faChevronDown} className="text-white" />

              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white opacity-50 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>

            <li className="pb-4 flex justify-between relative group">
              <Link
                href="/products/capelli"
                onClick={clickMenuHandler}
                className="text-white hover:underline flex items-center transform transition-transform duration-300 group-hover:translate-x-8"
              >
                <img
                  src="/iconos/cosmetici.png"
                  alt="Cosmetici Logo"
                  className="h-6 mr-4"
                />
                COSMETICI
              </Link>
              <FontAwesomeIcon icon={faChevronDown} className="text-white" />

              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white opacity-50 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>

            <li className="pb-4 flex justify-between relative group">
              <Link
                href="/products/capelli"
                onClick={clickMenuHandler}
                className="text-white hover:underline flex items-center transform transition-transform duration-300 group-hover:translate-x-8"
              >
                <img
                  src="/iconos/hombre.png"
                  alt="Barbershop Logo"
                  className="h-6 mr-4"
                />
                BARBERSHOP
              </Link>
              <FontAwesomeIcon icon={faChevronDown} className="text-white" />

              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white opacity-50 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>

            <li className="pb-4 flex justify-between relative group">
              <Link
                href="/products/capelli"
                onClick={clickMenuHandler}
                className="text-white hover:underline flex items-center transform transition-transform duration-300 group-hover:translate-x-8"
              >
                <img
                  src="/iconos/equipo.png"
                  alt="Noi Logo"
                  className="h-6 mr-4"
                />
                ABOUT US
              </Link>
              <FontAwesomeIcon icon={faChevronDown} className="text-white" />

              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white opacity-50 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
