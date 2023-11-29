import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUserCircle,
  faCartShopping,
  faBars,
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <div className="container max-w-[1200px] mx-auto">
        <div className="flex justify-end items-center h-7 text-xs bg-gray-100">
          <ul className="flex items-center space-x-2 p-2">
            <li>Aiuto e Contatto</li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="h-3 ml-1" />
            </li>
            <li>329.4131.136</li>
          </ul>
        </div>

        <nav className="">
          <div className="flex items-center justify-between p-3 w-full sm:h-24 lg:h-28">
            <div className="flex items-center">
              <div className="sm:hidden">
                <FontAwesomeIcon icon={faBars} className="h-5 sm:h-7" />
              </div>
            </div>
            <img
              src="/logo.jpg"
              alt="LogoSHE"
              className="h-16 sm:h-19 lg:h-21 sm:order-first"
            />

            <div className="flex items-center space-x-2">
              <div className="hidden sm:flex w-72 max-w-[260px] border border-gray-300">
                <div className="flex items-center text-xs justify-between pl-2 p-1 sm:text-md lg:text-md w-full border-r border-gray-300 sm:visible">
                  RICERCA
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="h-4 sm:h-5 ml-1 mr-2"
                  />
                </div>
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="h-5 sm:h-6"
                />
              </div>
              <div className="relative flex items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="ml-1 h-5 sm:h-6"
                />
                <div className="absolute -top-2/3 -right-2 flex rounded-full w-4 h-4 bg-[#5f9b96] text-white text-xs sm:text-base lg:text-lg">
                  0
                </div>
              </div>
            </div>
          </div>

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
      </div>
    </header>
  );
}

export default Header;
