import styles from './Header.module.css';

import Logo from '../../shared/ui/logo/Logo';
import Cart from '../../entities/cart/Cart';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo className={styles.logo} />

                <nav className={styles.nav}>
                    <ul className={styles.links}>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Catalog</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>About us</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Product selection</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Our team</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Shipping and payment</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Contacts</a></li>
                    </ul>

                    <div className={styles.cart}>
                        <a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Cart</a>
                        <Cart />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;