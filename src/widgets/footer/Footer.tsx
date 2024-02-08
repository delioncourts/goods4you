import Logo from '../../shared/ui/logo/Logo';

import styles from './Footer.module.css';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <Logo />

            <div className={styles.footer__navigation}>
                <a href="#" target="_blank" rel="noopener noreferrer">Catalog</a>
                <a href="#" target="_blank" rel="noopener noreferrer">About us</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Product selection</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Our team</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Shipping and payment</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Contacts</a>

            </div>

        </footer>
    )
}

export default Footer;