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
        <div className="flex justify-end items-center h-8 text-xs bg-gray-100">
          <ul className="flex items-center space-x-2">
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
                <div className="flex items-center text-xs justify-between pl-2 p-1 sm:text-md lg:text-xl w-full border-r border-gray-300 sm:visible">
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
                <div className="absolute -top-2/3 -right-2 flex items-center rounded-full w-4 h-4 bg-[#5f9b96] text-white justify-center text-xs sm:text-base lg:text-lg">
                  0
                </div>
              </div>
            </div>
          </div>

          <ul className="flex items-center text-sm border-t border border-gray-300 sm:h-10">
            <li className="sm:hidden flex items-center text-xs justify-between w-3/5 pl-4 p-2 border-r border-gray-300 sm:text-lg lg:text-xl">
              RICERCA
            </li>

            <li className="flex items-center text-xs justify-center p-2 w-auto sm:text-lg lg:text-xl">
              PRODOTTI
            </li>

            <li className="hidden sm:flex items-center text-xs justify-center w-auto p-2 sm:text-lg lg:text-xl">
              TEST
            </li>
            <li className="hidden sm:flex items-center text-xs justify-center w-auto p-2 sm:text-lg lg:text-xl">
              TEST
            </li>
            <li className="hidden sm:flex items-center text-xs justify-center w-auto p-2 sm:text-lg lg:text-xl">
              TEST
            </li>

            <li className="hidden sm:flex items-center text-xs justify-center p-2 w-auto sm:text-lg lg:text-xl">
              ABOUT US

            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
