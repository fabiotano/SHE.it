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
      <div className={styles.notificationBar}>
        <ul>
          <li>Ayuda y Contacto</li>
          <li>
            {/* <FontAwesomeIcon icon={faPhone} /> */}
          </li>
          <li>329.4131.136</li>
        </ul>
      </div>

      <nav>
        <div className={styles.CentralBar}>
          <div className={styles.menuIcon}>
            {/* <FontAwesomeIcon icon={faBars} /> */}
          </div>
          <img src="/logo.jpg" alt="LogoSHE" />
          <div className={styles.rightSide}>
            <div>
              {/* <FontAwesomeIcon icon={faUserCircle} />{" "} */}
            </div>
            <div>
              {/* <FontAwesomeIcon icon={faCartShopping} /> */}
            </div>
          </div>
        </div>

        <div className={styles.bottonBar}>
          <div className={styles.searchBar}>
            {/* CERCARE <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
          </div>
          <div className={styles.productDropdown}>
            {/* PRODOTTI <FontAwesomeIcon icon={faChevronDown} /> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;