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
        <header className="max-w-[1200px]">
            <div className="flex justify-end items-center h-7 text-xs bg-gray-100">
                <ul className="flex items-center space-x-2 p-2">
                    <li>Aiuto e Contatto</li>
                    <li>
                        <FontAwesomeIcon icon={faPhone} className="h-3 ml-1" />
                    </li>
                    <li>329.4131.136</li>
                </ul>
            </div>
            <div className="flex w-full p-3">
                {/* Menú desplegable para dispositivos pequeños */}
                <div className="sm:hidden w-20 flex-initial flex items-center justify-center">
                    <FontAwesomeIcon icon={faBars} className="h-6" />
                </div>

                {/* Logo */}
                <div className="flex flex-auto justify-center sm:justify-start">
                    <img
                        src="/logo.jpg"
                        alt="LogoSHE"
                        className="h-16 sm:h-19 lg:h-21 sm:order-first"
                    />
                </div>

                {/* Barra de búsqueda */}
                <div className="hidden sm:flex flex-auto items-center">
                    <div className="flex items-center justify-between border border-gray-300 p-2 h-8 w-5/6 mx-auto sm:visible">
                        RICERCA
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="h-4" />
                    </div>
                </div>

                {/* Iconos de usuario y carrito */}
                <div className="w-24 flex-initial flex items-center justify-evenly">
                    <div>
                        <FontAwesomeIcon icon={faUserCircle} className="h-6" />
                    </div>
                    <div className="flex relative">
                        <div className="absolute -top-2/3 -right-2 flex justify-center items-center rounded-full w-4 h-4 bg-[#5f9b96] text-white text-xs sm:text-base lg:text-lg">
                            0
                        </div>
                        <FontAwesomeIcon icon={faCartShopping} className="h-6" />
                    </div>
                </div>
            </div>
            <nav>
                <ul className="flex items-center text-sm border border-gray-300 ">
                    <li className="sm:hidden flex items-center text-xs justify-between w-3/5 p-2 pl-3 border-r border-gray-300 sm:text-lg lg:text-xl">
                        RICERCA
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="h-4"
                        />
                    </li>

                    <li className=" text-left pl-3 w-1/6 sm:flex sm:text-lg lg:text-lg">
                        PRODOTTI
                    </li>

                    <li className="hidden sm:flex w-1/6 pl-2 sm:text-lg lg:text-">
                        COSMETICI
                    </li>
                    <li className="hidden sm:flex w-1/6 pl-2 sm:text-lg lg:text-">
                        BALSAMI
                    </li>
                    <li className="hidden sm:flex w-1/6 pl-2 sm:text-lg lg:text-">
                        CREME
                    </li>

                    <li className="hidden sm:flex pl-2 w-1/6 sm:text-lg lg:text-">
                        ABOUT US

                    </li>
                </ul>
            </nav>
        </header>
    );
}
