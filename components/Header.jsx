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
              <FontAwesomeIcon icon={faPhone} className="h-4 ml-1" />
            </li>
            <li>329.4131.136</li>
          </ul>
        </div>

        <nav className="">
          <div className="flex items-center justify-between p-2 h-20">
            <div className="flex items-center">
              <div className="">
                <FontAwesomeIcon icon={faBars} className="h-5" />
              </div>
            </div>
            <img src="/logo.jpg" alt="LogoSHE" className="h-16" />
            <div className="flex items-center">
              <div>
                <FontAwesomeIcon icon={faUserCircle} className="h-5" />
              </div>
              <div className="relative flex items-center ml-2 ">
                <FontAwesomeIcon icon={faCartShopping} className="h-5 ml-1" />
                <div className="absolute bottom-5 flex left-1/2 items-center rounded-full w-4 h-4 bg-[#5f9b96] text-white justify-center">
                  0
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm border-t border border-gray-300">
            <div className="flex items-center justify-between w-3/5 p-2 border-r border-gray-300">
              RICERCA
              <FontAwesomeIcon icon={faMagnifyingGlass} className="h-4 ml-1" />
            </div>
            <div className="flex items-center justify-center w-2/5">
              PRODOTTI
              <FontAwesomeIcon icon={faChevronDown} className="h-4 ml-1" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
