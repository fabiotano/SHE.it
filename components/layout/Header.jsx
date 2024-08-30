"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUserCircle,
  faCartShopping,
  faBars,
  faGlobe,
  faEnvelope,
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
        {/* Información de contacto */}
        <div className="hidden sm:flex justify-end items-center h-7 text-xs bg-gray-100">
          <ul className="flex items-center space-x-2 p-2">
            <li className="hover:text-blue-600 transition-colors duration-300">
              <a href="mailto:info@she.com" className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="h-3 mr-1" />
                info@she.com
              </a>
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              <a href="tel:3294131136" className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="h-3 mr-1" />
                329.4131.136
              </a>
            </li>
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
            <div className="flex flex-grow justify-center sm:justify-start">
              <Link href="/home">
                <img
                  src="/logoShe.png"
                  alt="LogoSHE"
                  className="h-14 lg:-ml-2 lg:h-20 sm:order-first"
                />
              </Link>
            </div>

            {/* Barra de búsqueda */}
            <div className="hidden sm:flex flex-auto items-center">
              <div className="flex items-center border border-gray-300 p-1.5 h-10 w-5/6 mx-auto rounded-md bg-white">
                <form className="flex-auto flex">
                  <input
                    className="outline-none w-full h-full px-2 text-gray-700"
                    type="text"
                    placeholder="Buscar"
                  />
                </form>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="h-6 text-gray-600 ml-2"
                />
              </div>
            </div>

            {/* Iconos de usuario y carrito */}
            <div className="w-24 flex-auto flex items-center justify-end space-x-3">
              <div>
                <Link href="/">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-gray-600 h-6 mr-2 md:mr-6 md:h-7 hover:text-gray-800 transform transition-transform duration-200 hover:scale-125"
                  />
                </Link>
              </div>
              <div className="flex flex-row space-x-2">
                <div>
                  <Link href="/login">
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className="text-gray-600 h-6 md:h-7 hover:text-gray-800 transform transition-transform duration-200 hover:scale-125"
                    />
                  </Link>
                </div>
                <div className="flex text-gray-600 relative hover:text-gray-800 transform transition-transform duration-200 hover:scale-125">
                  <Link href="/cart">
                    <div className="absolute -top-2 -right-1 flex justify-center items-center rounded-full w-4 h-4 bg-red-500 text-white text-xs">
                      12
                    </div>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="h-6 md:h-7"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-b-gray-300"></div>

          <nav>
            <ul className="flex items-center justify-center text-sm py-2 sm:py-0 sm:p-3 lg:pl-1 container">
              {/* Barra de búsqueda móvil */}
              <li className="sm:hidden flex items-center text-xs border border-gray-300 rounded-md justify-between w-full p-2 pl-3 mx-4 sm:text-lg lg:text-xl my-2">
                <form className="flex-auto flex">
                  <input
                    className="outline-none w-full h-5 text-gray-700"
                    type="text"
                    placeholder="Buscar"
                  />
                </form>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="h-4 md:h-5 text-gray-600"
                />
              </li>

              {/* Menú principal */}
              <li className="hidden sm:flex space-x-3 p-2">
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
            </ul>
          </nav>
        </div>
      </header>

      {/* Menú desplegable */}
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

            {mainMenu.map((menuItem, idx) => (
              <li
                key={idx}
                className="pb-4 flex justify-between relative group"
              >
                <Link
                  href={menuItem.href}
                  onClick={clickMenuHandler}
                  className="text-white hover:underline flex items-center transform transition-transform duration-300 group-hover:translate-x-8"
                >
                  <img
                    src={menuItem.iconSrc}
                    alt={`${menuItem.title} Logo`}
                    className="h-6 mr-4"
                  />
                  {menuItem.title}
                </Link>
                <FontAwesomeIcon icon={faChevronDown} className="text-white" />
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white opacity-50 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
