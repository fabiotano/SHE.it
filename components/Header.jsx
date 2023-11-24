import styles from "./Header.module.css";
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
        <div className={styles.notificationBar}>
          <ul>
            <li>Ayuda y Contacto</li>
            <li>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            </li>
            <li>329.4131.136</li>
          </ul>
        </div>

        <nav>
          <div className={styles.CentralBar}>
            <div className={styles.menuIcon}>
              <FontAwesomeIcon icon={faBars} className={styles.icon} />
            </div>
            <img src="/logo.jpg" alt="LogoSHE" />
            <div className={styles.rightSide}>
              <div>
                <FontAwesomeIcon icon={faUserCircle} className={styles.icon} />{" "}
              </div>
              <div  className="flex items-center">
                <FontAwesomeIcon icon={faCartShopping} className={styles.icon}/>0
              </div>
            </div>
          </div>

          <div className={styles.bottonBar}>
            <div className={styles.searchBar}>
              <div className=" ">BUSCADOR</div>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
            </div>
            <div className={styles.productDropdown}>
              PRODOTTI
              <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
