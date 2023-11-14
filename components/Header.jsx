import styles from './Header.module.css';

function Header() {
    return (
        <header>
            <div className={styles.notification}>
                <div>Ayuda y Contacto</div>
                <div>11 - 1234 - 4235</div>
            </div>
            <nav>
                <div className="flex-center">
                    <div>logo</div>
                    <div>Search + cart + login</div>
                </div>
                <div className="flex-center">
                    <div>login</div>
                    <div>cart</div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
