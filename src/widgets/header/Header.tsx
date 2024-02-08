import styles from './Header.module.css';

import Logo from '../../shared/ui/logo/Logo';


const Header = () => {

    return (
        <header className={styles.header}>
            <Logo className={styles.logo} />

            <a href="#" target="_blank" rel="noopener noreferrer">Catalog</a>
            <a href="#" target="_blank" rel="noopener noreferrer">About us</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Product selection</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Our team</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Shipping and payment</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Contacts</a>

            <a href="#" target="_blank" rel="noopener noreferrer">Cart</a>

            {/* cart image*/}
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="#" alt="#"></img></a>
        </header>
    )
}

export default Header;