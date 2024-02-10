import Logo from '../../shared/ui/logo/Logo';

import styles from './Footer.module.css';

const Footer = () => {

    return (
        <footer className={styles.footer}>

            <div className={styles.container}>

                <Logo />

                <ul className={styles.links}>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Catalog</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">About us</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Product selection</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Our team</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Shipping and payment</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Contacts</a></li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer;