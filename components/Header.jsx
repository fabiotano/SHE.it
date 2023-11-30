import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faUserCircle,
    faCartShopping,
    faBars,
    faChevronDown,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Header2() {
    return (
      <header className="borde border border-b-red-900 shadow-md">
        <div className="hidden sm:flex  justify-end items-center h-7 text-xs bg-gray-100">
          <ul className="flex items-center space-x-2 p-2">
            <li>Aiuto e Contatto</li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="h-3 ml-1" />
            </li>
            <li>329.4131.136</li>
          </ul>
        </div>
        <div>
          <div className="flex w-full py-5 container">
            {/* Menú desplegable para dispositivos pequeños */}
            <div className="sm:hidden w-14 flex-initial flex items-center justify-center">
              <FontAwesomeIcon icon={faBars} className="h-6 text-gray-700" />
            </div>
            {/* Logo */}
            <div className="flex flex-auto justify-center sm:justify-start ">
              <img
                src="/logo.jpg"
                alt="LogoSHE"
                className="h-14 lg:-ml-2  sm:h-19 lg:h-21 sm:order-first"
              />
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
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="text-gray-700 h-6"
                />
              </div>
              <div className="flex relative">
                <div className="absolute  -top-2 -right-1 flex justify-center items-center rounded-full w-4 h-4 bg-red-500 text-white text-xs">
                  12
                </div>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-gray-700 h-6"
                />
              </div>
            </div>
          </div>
          <div className="border border-b-grey-300"></div>
          <nav>
            <ul className="flex items-center text-sm py-2 sm:p-3 lg:pl-0 container">
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
              {['PRODOTTI', 'COSMETICI', 'BALSAMI', 'CREME', 'ABOUT US'].map(
                (item, idx) => (
                  <li
                    key={idx}
                    className={`hidden text-lef ${
                      idx > 0 ? 'pl-[5%]' : ''
                    }  sm:flex sm:text-lg lg:text-lg`}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </header>
    );
}
