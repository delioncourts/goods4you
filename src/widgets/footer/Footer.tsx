import Logo from '../../shared/ui/logo/Logo';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>

                <Logo className={styles.logo}/>

                <ul className={styles.links}>
                    <li><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Catalog</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>About us</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Product selection</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Our team</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Shipping and payment</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Contacts</a></li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer;